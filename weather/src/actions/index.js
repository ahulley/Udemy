import axios from 'axios';

const API_KEY = '00a2e31e5a8e1468aa829697909298e0';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios({
		method: 'get',
		url: url,
		headers: []
	});

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}