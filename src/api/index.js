import axios from 'axios';

require('dotenv').config();

const userApi = axios.create({
	baseURL: process.env.REACT_APP_USERS_SERVER_URL,
	headers: {},
});
