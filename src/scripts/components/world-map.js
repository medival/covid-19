import $ from "jquery";
import "jquery";
import "popper.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "jvectormap-next";
// import "jvectormap-next/jquery-jvectormap"
// import "jvectormap-next/jquery-jvectormap.min.css"

import "./../../styles/style.css";
import DataSource from "../data/data-source";

class WorldMap extends HTMLElement {
    connectedCallback() {
        this.generateWorldMap();
    }

    async getDataWorld() {
        try {
            const data = await DataSource.getDataWorld();
            return data;
        } catch (err) {
            alert(err);
        }
    }

    async generateWorldMap() {
        let html = `<script
			src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"
			integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg=="
			crossorigin="anonymous"
		></script>
		<script src="https://www.bootstrapdash.com/demo/corona/jquery/template/assets/vendors/jvectormap/jquery-jvectormap.min.js"></script>
		<script src="https://www.bootstrapdash.com/demo/corona/jquery/template/assets/vendors/jvectormap/jquery-jvectormap-world-mill-en.js"></script>`;
        // const data = await this.getDataWorld();
        // console.log(data);
        html += `<div id="world-map" class="jvmap-smart"></div>`;
        this.innerHTML = html;
    }
}

customElements.define("world-map", WorldMap);