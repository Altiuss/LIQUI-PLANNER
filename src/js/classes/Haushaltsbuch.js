import Navigationsleiste from "./Navigationsleiste.js";
import Eingabeformular from "./Eingabeformular.js";
import Monatslistensammlung from "./Monatslistensammlung.js";
import Gesamtbilanz from "./Gesamtbilanz.js";
import Eintrag from "./Eintrag.js";


export default class Haushaltsbuch {

    constructor() {
        this._eintraege = [];
        this._navigationsleiste = new Navigationsleiste();
        this._eingabeformular = new Eingabeformular();
        this._monatslistensammlung = new Monatslistensammlung();
        this._gesamtbilanz = new Gesamtbilanz();
        this._wiederherstellen();
    }

    eintrag_hinzufuegen(eintragsdaten) {

        let neuer_eintrag = new Eintrag(
            eintragsdaten.titel,
            eintragsdaten.betrag,
            eintragsdaten.typ,
            eintragsdaten.datum
        );
        this._eintraege.push(neuer_eintrag);
        this._monatslistensammlung.aktualisieren(this._eintraege);
        this._gesamtbilanz.aktualisieren(this._eintraege);
        this._speichern();
    }

    eintrag_entfernen(timestamp) {
        let start_index;
        for (let i = 0; i < this._eintraege.length; i++) {
            if (this._eintraege[i].timestamp() === parseInt(timestamp)) {
                start_index = i;
                break;
            }
        }
        this._eintraege.splice(start_index, 1);
        this._monatslistensammlung.aktualisieren(this._eintraege);
        this._gesamtbilanz.aktualisieren(this._eintraege);
        this._speichern();
    }

    _speichern() {
        localStorage.setItem("eintraege", JSON.stringify(this._eintraege));

    }

    _wiederherstellen() {
        let geschpeicherte_eintraege = localStorage.getItem("eintraege");
        if (geschpeicherte_eintraege !== null) {
            JSON.parse(geschpeicherte_eintraege).forEach(eintrag => {
                console.log(eintrag._datum)
                this.eintrag_hinzufuegen({
                    titel: eintrag._titel,
                    betrag: eintrag._betrag,
                    typ: eintrag._typ,
                    datum: new Date(eintrag._datum)
                })
            });
        }
    }

    start() {
        this._navigationsleiste.anzeigen();
        this._eingabeformular.anzeigen();
        this._monatslistensammlung.anzeigen();
        this._gesamtbilanz.anzeigen();
    }



};