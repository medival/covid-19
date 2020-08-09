import "jquery";
import "popper.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


import "./../../styles/style.css";
import DataSource from "../data/data-source";

class CardInfo extends HTMLElement {
    connectedCallback() {
        this.generateCardInfo();
    }

    async getDataIndonesia() {
        try {
            const data = await DataSource.getDataIndonesia();
            return data;
        } catch (err) {
            alert(err);
        }
    }

    async generateCardInfo() {
        const data = await this.getDataIndonesia();
        let html = `<div class="wrapper mt-5 pt-5">
                        <div class="row">
                            <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                                <div class="card primary-color">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-9">
                                                <div class="d-flex align-items-center align-self-start">
                                                    <h3 class="mb-0 text-white"> ${data.cases} </h3>
                                                    <p class="text-success ml-2 mb-0 font-weight-medium">+${data.todayCases}</p>
                                                </div>
                                            </div>
                                            <div class="col-3">
                                                <div class="icon icon-box-success ">
                                                    <span class="mdi mdi-arrow-top-right icon-item"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 class="text-muted font-weight-normal"> Cases </h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                                <div class="card primary-color">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-9">
                                                <div class="d-flex align-items-center align-self-start">
                                                    <h3 class="mb-0 text-white"> ${data.active} </h3>
                                                    <p class="text-success ml-2 mb-0 font-weight-medium"></p>
                                                </div>
                                            </div>
                                            <div class="col-3">
                                                <div class="icon icon-box-success">
                                                    <span class="mdi mdi-arrow-top-right icon-item"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 class="text-muted font-weight-normal"> Actives </h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                                <div class="card primary-color">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-9">
                                                <div class="d-flex align-items-center align-self-start">
                                                    <h3 class="mb-0 text-white">${data.deaths}</h3>
                                                    <p class="text-danger ml-2 mb-0 font-weight-medium"> +${data.todayDeaths} </p>
                                                </div>
                                            </div>
                                            <div class="col-3">
                                                <div class="icon icon-box-danger">
                                                    <span class="mdi mdi-arrow-bottom-left icon-item"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 class="text-muted font-weight-normal"> Deaths </h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                                <div class="card primary-color">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-9">
                                                <div class="d-flex align-items-center align-self-start">
                                                    <h3 class="mb-0 text-white"> ${data.recovered} </h3>
                                                    <p class="text-success ml-2 mb-0 font-weight-medium">+${data.todayRecovered}</p>
                                                </div>
                                            </div>
                                            <div class="col-3">
                                                <div class="icon icon-box-success ">
                                                    <span class="mdi mdi-arrow-top-right icon-item"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 class="text-muted font-weight-normal"> Recovered </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
        this.innerHTML = html;
    }
}

customElements.define("card-info", CardInfo);