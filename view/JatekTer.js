


export default class JatekTer {

    #lista = [];

    constructor(lista){
        
        this.#lista = lista;
        this.szuloElem = $(".eredmeny");

        this.szuloElem.empty();
        this.kiír();

    }

    osszerakHTML(){
        this.szuloElem.append(`<div></div>`);
    }

    kiír(){
        for (let i = 0; i < 20; i++) {
            new Kartya(this.#lista, i, this.szuloElem);
        }
    }

    setSzoveg(){
        //this.#szuloElem.;
    }

}


Hozz létre egy html elemet az eredmény kiírásának is! Fogd meg ezt az elemet!
Írj hozzá setterrt, amivel beállíthatod az elem szöveges tartalmát! (setSzoveg)
Példányosítsd a Kartya osztályt annyiszor, ahány eleme van a listának!