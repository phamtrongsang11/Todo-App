import apiClient from './api-client';

const endPoint = '/users';

const getUsers = () => {
	return apiClient.get(endPoint);
};

const getTodos = (userId) => {
	return apiClient.get(`${endPoint}/${userId}/todos`);
};

const updateCompleted = (taskId) => {
	return apiClient.patch(`/todos/${taskId}`, { completed: true });
};

export default {
	getUsers,
	getTodos,
	updateCompleted,
};
