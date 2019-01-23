export const CONFIG = {
	NODE_ENV: process.env.NODE_ENV || 'development',
	SERVER_URL:
		process.env.NODE_ENV === 'production'
			? 'https://ph-bookstore.herokuapp.com/v1'
			: process.env.REACT_APP_SERVER_URL
			? process.env.REACT_APP_SERVER_URL
			: 'http://localhost:5000/v1'
};
