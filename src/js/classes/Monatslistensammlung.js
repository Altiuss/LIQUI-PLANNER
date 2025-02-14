"use strict";

// <section id="monatslisten">
//     </section>

class Monatslistensammlung {

    constructor() {
        this._monatslisten = [];
        this._html = this._html_generieren();
    }

    eintrag_hinzufuegen(eintrag) {
         
       let eintragsmonat = eintrag.datum().toLocaleString("de-DE", {month: "numeric"});
       let eintragsjahr = eintrag.datum().toLocaleString("de-DE", {year: "numeric"});
       let monatsliste_vorhanden = false;

       this._monatslisten.forEach(monatsliste => {
         if (eintragsmonat === monatsliste.monat() && eintragsjahr === monatsliste.jahr()) {
         monatsliste.eintrag_hinzufuegen(eintrag);
         monatsliste_vorhanden = true;
         }
       });
       if (!monatsliste_vorhanden) {
        this._monatsliste_hinzufuegen();

       }
    }

    _monatsliste_hinzufuegen() {


    }

    _html_generieren() {

    }

    anzeigen() {
        
    }

};