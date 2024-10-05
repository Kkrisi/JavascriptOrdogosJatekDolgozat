



export default class Kartya {

    #lista;       
    #index;

    constructor(lista, index){

        this.#lista = lista;
        this.#index = index;

        this.szuloElem = $(".tartalom");

        this.htmlOsszerak();

        this.esemenyKezelo();

    }

    htmlOsszerak(){
        this.kartyaElem = $(`<div class="kartya"></div>`); // Store the card element for later use
        this.szuloElem.append(this.kartyaElem);
    }
    
    esemenyKezelo(){
        this.kartyaElem.on("click", () => {
            const e = new CustomEvent("kattint", { detail: this.#index });
            window.dispatchEvent(e);
    
            this.kartyaElem.text(this.#lista[this.#index]);
            this.kartyaElem.addClass("felforditott");

            if (this.#lista[this.#index] === '👺') {
                $(".kartya").off("click"); // Minden kártyára kikapcsolja a kattintási eseményt
            }
        });
    }

}



