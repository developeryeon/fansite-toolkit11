import axios from 'axios';

const userAPI = axios.create({
	baseURL: 'https://moneyfulpublicpolicy.co.kr',
	headers: {
		'Content-Type': 'application/json',
	},
});

// 요청 보내기 전
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

//오류 요청 보내기 전
userAPI.interceptors.response.use(
	function (response) {
		console.log('user 응답 받았어!!', response);
		return response;
	},
	function (error) {
		if (error.response) {
			// 서버가 응답하지 않은 경우
			console.log('user 응답 에러!', error.response);
			return Promise.reject(error);
		} else if (error.message) {
			// 에러 메시지 출력
			console.log('user 응답 에러!', error.message);
			return Promise.reject(error);
		}
	}
);

export default userAPI;
