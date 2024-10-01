
import Modell from "../model/Modell.js"
import JatekTer from "../view/JatekTer.js"



export default class Controll{

    constructor(){

        this.copyModell = new Modell();
        const lista = this.copyModell.getLista();

        new JatekTer(lista);

        const ellenorzes = this.copyModell.ellenorzes();

        const szoveg = new JatekTer(lista).setSzoveg();
        alert(szoveg);

    }

    esemenyKezelo(){
        $(window).on("kattint", (event) => {
            this.copyModell = new Modell();
            const lista = this.copyModell.getLista();

            new JatekTer(lista);
        })
    }

}



Controller

Példányosítsd a modellt!✅
Kérd le a modellből a listát!✅
Példányosítsd a view-t!✅
Iratkozz fel a Kartya osztály eseménykezelőjére!✅
Az eseménykezelőben hívd meg a modell ellenorzes metódusát!✅
Hívd meg a Jatekter setSzoveg metódusát, és írd ki a szövegesen az eredményt a képernyőre!