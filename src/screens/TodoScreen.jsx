import React, { useEffect, useState } from 'react';
import Title from '../components/Title';
import useApi from '../hooks/useApi';
import todoService from '../services/todo-service';
import ListGroup from '../components/ListGroup';

const TodoScreen = () => {
	const getUsersApi = useApi(todoService.getUsers);
	const getTodosApi = useApi(todoService.getTodos);
	const updateTodoApi = useApi(todoService.updateCompleted);

	useEffect(() => {
		getUsersApi.request();
	}, []);

	const updateCompleted = (taskId) => {
		updateTodoApi.request(taskId);
	};

	useEffect(() => {
		const newTodos = getTodosApi.data.map((todo) =>
			todo.id === updateTodoApi.data.id ? updateTodoApi.data : todo
		);
		getTodosApi.setData(newTodos);
	}, [updateTodoApi.data]);

	return (
		<div className="container">
			<div>
				<Title>
					<h5>Users</h5>
				</Title>
				<select
					name="users"
					className="form-select w-auto mt-3"
					onChange={(event) => {
						getTodosApi.request(event.target.value);
					}}
				>
					<option value="" disabled selected hidden>
						Select user
					</option>
					{getUsersApi?.data.map((user) => (
						<option key={user.id} value={user.id}>
							{user.name}
						</option>
					))}
				</select>
			</div>
			<div>
				<Title>
					<h5>Todos</h5>
				</Title>

				<ListGroup
					todos={getTodosApi.data.sort((a, b) => a.completed - b.completed)}
					update={updateCompleted}
					loadingFetch={getTodosApi.loading}
					loadingUpdate={updateTodoApi.loading}
				/>
			</div>
		</div>
	);
};

export default TodoScreen;
