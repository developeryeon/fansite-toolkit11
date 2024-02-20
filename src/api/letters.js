import axios from 'axios';

const lettersAPI = axios.create({
	// baseURL: process.env.REACT_APP_LETTERS_SERVER_URL,
	baseURL: 'https://moneyfulpublicpolicy.co.kr',
});

lettersAPI.interceptors.request.use(
	function (config) {
		console.log('팬레터 요청 성공', config);
		return config;
	},
	function (error) {
		console.error('팬레터 요청 오류', error);
		return Promise.reject(error);
	}
);

lettersAPI.interceptors.response.use(
	function (response) {
		console.log('팬레터 응답 성공', response);
		return response;
	},

	function (error) {
		console.error('팬레터 응답 오류', error);
		return Promise.reject(error);
	}
);

export default lettersAPI;
