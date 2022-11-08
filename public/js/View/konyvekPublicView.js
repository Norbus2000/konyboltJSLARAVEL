import KonyvPublicView from "./KonyvPublicView.js";

class KonyvekPublicView {
    constructor(tomb, szuloElem) {
        szuloElem.html(
            `<div class="konyvek"></div>`
            );
            this.konyvekDiv=$(".konyvek")
    

    tomb.forEach(konyv => {
        const konyvemPublic = new KonyvPublicView(konyv,this.konyvekDiv);
    });
}
}

export default KonyvekPublicView;