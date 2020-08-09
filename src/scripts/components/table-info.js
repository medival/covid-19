import "jquery";
import "popper.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./../../styles/style.css";
import DataSource from "../data/data-source";

class TableInfo extends HTMLElement {
    connectedCallback() {
        this.generateTableInfo();
    }

    async getDataGlobal() {
        try {
            const data = await DataSource.getDataGlobal();
            return data;
        } catch (err) {
            alert(err);
        }
    }

    async generateTableInfo() {
        const results = await this.getDataGlobal();
        // console.log(results);
        let html = `<table class="table text-white ml-3 mt-5">
                         <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Active</th>
                                    <th scope="col">Death</th>
                                    <th scope="col">Recovered</th>
                                </tr>
                         </thead>
                        <tbody>`;
        results.forEach((data) => {
            // console.log(data.recovered);
            html += `<tr>
            <td> ${data.country}</td>
            <td> ${data.active} </td>
            <td> ${data.deaths} </td>
            <td> ${data.recovered} </td>
        </tr>`
        })
        html += `</tbody>
                        </table>`;
        this.innerHTML = html;
    }
}

customElements.define("table-info", TableInfo);