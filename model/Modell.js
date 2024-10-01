


export default class Modell{

    #lista = [👻,👻,👻,👺,👻,👻,👻,👻,👻,👻,👻,👻,👻,👻,👻,👻,👻,👻,👻,];
    #index;

    constructor(index){
        
        this.#lista = lista;
        this.#index = index;

    }

    getLista(){
        return this.#lista;
    }

    ellenorzes(){
        if(this.#index === 3){
            console.log("Elvitt az ördög!")
        } else {
            console.log("Megmentettek a jó lelkek!".)
        }
    }

}



Modell

Hozz létre egy lista tagfüggvényt, és helyezd el benne a szellemeket és az ördögöt. ✅
ötösért: 30 % valószínűséggel lehet egy érték ördög. 
készíts gettert a lista adatainak lekérdezésére. ✅
Készíts ellenőrzés tagfüggvényt, mely visszaadja, hoyg a paraméterként kapott indexű hely alapján mit kell kiírni a képernyőre.  "Elvitt az ördög!" vagy "Megmentettek a jó lelkek!".✅