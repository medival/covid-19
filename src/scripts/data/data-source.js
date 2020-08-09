class DataSource {

	static getDataGlobal() {
		return fetch('https://corona.lmao.ninja/v3/covid-19/all')
			.then(response => {
				return response.json();
			})
			.then(responseJson => {
				if (responseJson) {
					return Promise.resolve(responseJson)
				} else {
					return Promise.reject(alert(message))
				}
			})
	}

	static getDataIndonesia() {
		return fetch(`https://corona.lmao.ninja/v3/covid-19/countries/indonesia`)
			.then((response) => response.json())
			.then((responseJson) => {
				if (responseJson) {
					return Promise.resolve(responseJson);
				} else {
					return Promise.reject(alert(message));
				}
			});
	}
}

export default DataSource;