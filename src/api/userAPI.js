import axios from 'axios';

const userAPI = axios.create({
	// baseURL: process.env.REACT_APP_BASE_SERVER_URL,
	baseURL: process.env.REACT_APP_BASE_SERVER_URL,
});

userAPI.interceptors.request.use(
	function (config) {
		console.log('user 요청 성공!!', config);
		return config;
	},
	function (error) {
		console.log('user 요청 에러!', error);
		return Promise.reject(error);
	}
);

userAPI.interceptors.response.use(
	function (response) {
		console.log('user 응답 받았어!!', response);
		return response;
	},
	function (error) {
		console.log('user 응답 에러!', error);
		return Promise.reject(error);
	}
);

export default userAPI;
