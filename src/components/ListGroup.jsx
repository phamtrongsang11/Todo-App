import React, { useState } from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { AiFillMinusCircle } from 'react-icons/ai';
import LoadingBox from './LoadingBox';
const ListGroup = ({ todos, update, loadingFetch, loadingUpdate }) => {
	const [selected, setSelected] = useState(null);
	const doneTask = todos.reduce(
		(acc, todo) => (todo.completed ? acc + 1 : acc),
		0
	);
	return (
		<>
			<div className="text-center">{loadingFetch && <LoadingBox />}</div>
			{todos.length !== 0 ? (
				<div>
					<ul className="list-group mt-3 border-1 scroll-list">
						{todos.map((todo) => (
							<li
								className="list-group-item d-flex justify-content-between p-3 w-100"
								key={todo.id}
							>
								<div className="w-70">
									{todo.completed ? (
										<BsFillCheckCircleFill color="#ff6b81" size={20} />
									) : (
										<AiFillMinusCircle color="gold" size={20} />
									)}
									<span className="mx-2">{todo.title}</span>
								</div>

								{!todo.completed && (
									<button
										className="btn btn-primary"
										onClick={() => {
											update(todo.id), setSelected(todo.id);
										}}
									>
										{todo.id === selected && loadingUpdate && <LoadingBox />}
										<span>Mark done</span>
									</button>
								)}
							</li>
						))}
					</ul>
					<div className="my-3">
						Done {doneTask} / {todos.length} tasks
					</div>
				</div>
			) : (
				!loadingFetch && (
					<div className="text-center color-medium ">No Data</div>
				)
			)}
		</>
	);
};

export default ListGroup;
