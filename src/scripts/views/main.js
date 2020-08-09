import "../components/card-info";
// import "../components/world-map";
import "../components/table-info";
import DataSource from "./../data/data-source";

const main = async () => {

	const cardInfo = document.querySelector("card-info");
	const tableInfo = document.querySelector("table-info");

	const renderCardInfo = results => {
		cardInfo.generateCardInfo = results;
	}

	const renderTableInfo = results => {
		tableInfo.generateTableInfo = results;
		// console.log(results);
	}
	try {
		const results = await DataSource.getDataIndonesia();
		renderCardInfo(results);
		// console.log(results);
	} catch (message) {
		alert(message);
	}

	try {
		const results = await DataSource.getDataGlobal();
		// console.log(results);
		// renderTableInfo(results);
	} catch (message) {
		alert(message);
	}
};

export default main;