class KonyvModel {
    #konyvekTomb = [];

    constructor(token) {
        this.token = token;
        this.vegpont = "konyvek";
    }

    adatBe(vegpont, myCallBack) {
        fetch(vegpont, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                this.#konyvekTomb = data;
                //console.log(this.#konyvekTomb);
                myCallBack(this.#konyvekTomb);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }
    adatUj(vegpont, myCallBack) {
        fetch(vegpont, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": this.token,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Új adat:", data);
                this.#konyvekTomb = data;
                myCallBack(data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    adatTorol(vegpont, adat) {
        vegpont += "/" + adat.id;
        fetch(vegpont, {
            method: "DELETE",
            headers: {
                "X-CSRF-TOKEN": this.token,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                this.#konyvekTomb = data;
                console.log("Sikeres torles");
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    adatModosit(vegpont, adat) {
        vegpont += "/" + adat.id;
        console.log(vegpont);
        fetch(vegpont, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": this.token,
            },
            body: JSON.stringify(adat),
        })
            .then((response) => response.json())
            .then((data) => {
                this.#konyvekTomb = data;
                console.log("Sikeres modositas");
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }
}

export default KonyvModel;
