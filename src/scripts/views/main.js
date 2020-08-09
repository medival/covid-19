import "../components/card-info";
import DataSource from "./../data/data-source";

const main = async () => {

	const cardInfo = document.querySelector("card-info");

	const renderCardInfo = results => {
		cardInfo.generateCardInfo = results;
	}
	try {
		const results = await DataSource.getDataIndonesia();
		renderCardInfo(results);
		console.log(results);
	} catch (message) {
		alert(message);
	}
};

export default main;