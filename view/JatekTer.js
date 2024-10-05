
import Kartya from "./Kartya.js";


export default class JatekTer {

    #lista = [];

    constructor(lista){
        this.#lista = lista;
        this.szuloElem = $(".eredmeny");
        
        this.szuloElem.empty(); // Clear before appending elements
        this.osszerakHTML();
        this.kiír();
    }


    osszerakHTML(){
        this.szuloElem.append(`<div></div>`);
    }


    kiír(){
        for (let index = 0; index < 20; index++) {
            new Kartya(this.#lista, index);
        }
    }


    setSzoveg(szoveg) {
        this.szuloElem.text(szoveg);  // Az eredményt írja ki
    }

}




