import KonyvekView from "../View/KonyvekView.js";
import KonyvModel from "../Model/KonyvModel.js";
import KonyvekPublicView from "../View/konyvekPublicView.js";
import KosarView from "../View/kosarView.js";
import KosarModel from "../Model/KosarModel.js";

class KonyvController {
    constructor() {
        const token = $('meta[name="csrf-token"]').attr("content");
        const konyvmodel = new KonyvModel(token);
        const kosarmodel = new KosarModel();
        const kosarOldal = $("#kosar");
        const adminOldal = $("#admin");
        const publicOldal = $("#public");
        this.vegpont = "konyvek";
        konyvmodel.adatBe(this.vegpont, this.konyvAdatokPublic);
        kosarOldal.on("click", () => {
            this.kosarAdatok(kosarmodel.getKosarTomb());
        });
        adminOldal.on("click", () => {
            console.log("admin");
            konyvmodel.adatBe(this.vegpont, this.konyvAdatokAdmin);
        });
        publicOldal.on("click", () => {
            konyvmodel.adatBe(this.vegpont, this.konyvAdatokPublic);
        });

        $(window).on("torol", (event) => {
            konyvmodel.adatTorol(this.vegpont, event.detail);
        });
        $(window).on("modosit", (event) => {
            event.detail.cim += "X";
            konyvmodel.adatModosit(this.vegpont, event.detail);
        });
        $(window).on("kosarba", (event) => {
            kosarmodel.onKosarba(event.detail);
            console.log("kosárba vagyok");
        });
    }

    konyvAdatokAdmin(tomb) {
        let szuloelem = $(".elemek");
        new KonyvekView(tomb, szuloelem);
    }

    konyvAdatokPublic(tomb) {
        let szuloelem = $(".elemek");
        new KonyvekPublicView(tomb, szuloelem);
    }

    kosarAdatok(tomb) {
        let szuloelem = $(".kosar");
        new KosarView(tomb, szuloelem);
    }
}

export default KonyvController;
