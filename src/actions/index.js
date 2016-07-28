import axios from 'axios';

const WEATHER_API_KEY = 'f4b3505c656bbc68d3007a400c3015f9';
export const FETCH_WEATHER = 'FETCH_WEATHER';
const WEATHER_URL = `http://api.openweathermap.org/data/2.5/forecast/?appid=${WEATHER_API_KEY}`;


export function fetchWeather(city){
	console.log(`searching for weather ${city}`);

	const url = `${WEATHER_URL}&q=${city},us`;
	console.log(`url for weather api for ${city} is ${url}`);

	const request = axios.get(url);
	console.log('Request: ', request);

	return (
	{
		type: FETCH_WEATHER,
		payload: request
	});
}