import React , { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/googlemap';




class WeatherList extends Component {

	renderWeather(cityData) {

		const name = cityData.city.name;

		const temperatureData = cityData.list.map( (weather)  => { return weather.main.temp});
		const pressureData = cityData.list.map( (weather)  => { return weather.main.pressure});
		const humidityData = cityData.list.map( (weather)  => { return weather.main.humidity});
		const {lon, lat } = cityData.city.coord;
		
		return (
			<tr key={name}>
				<td><GoogleMap lon={lon} lat={lat} />
				{name}</td>
				<td><Chart data={temperatureData} color="red" units="K" /></td>
				<td> <Chart data={pressureData} color="blue" units="hPa" /></td>
				<td> <Chart data={humidityData} color="orange" units="%" /></td>
			</tr>
			);
	}



	render () {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
			);

	}

}

function mapStateToProps({ weather }) {
	return { weather };

}


export default connect(mapStateToProps)(WeatherList);
