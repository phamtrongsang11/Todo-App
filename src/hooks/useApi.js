import { useState } from 'react';

export default function useApi(apiFunction) {
	const [data, setData] = useState([]);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const request = async (...args) => {
		try {
			setLoading(true);
			const response = await apiFunction(...args);
			setData(response.data);
		} catch (error) {
			setError(error.message);
		}
		setLoading(false);
	};

	return { data, setData, error, loading, request };
}
