"use strict"

class Eintrag {

    constructor(titel, betrag, typ, datum) {
        this._titel = titel;
        this._betrag = betrag;
        this._typ = typ;
        this._datum = datum;
        this._timestsmp = Date.now();
        this._html = this._html_generieren();
    }

    titel() {
        return this._titel;
    }
    betrag() {
        return this._betrag;
    }
    typ() {
        return this._typ;

    }
    datum() {
        return this._datum;
    }
    timestamp() {
        return this._timestsmp;
    }

    html() {
        return this._html;
    }



    _html_generieren() {

        let listenPunkt = document.createElement("li");
        this._typ === "einnahme" ? listenPunkt.setAttribute("class", "einnahme") : listenPunkt.setAttribute("class", "ausgabe");
        listenPunkt.setAttribute("data-timestamp", this._timestamp);

        let datum = document.createElement("span");
        datum.setAttribute("class", "datum");
        datum.textContent = this._datum.toLocaleDateString("de-DE", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        });
        listenPunkt.insertAdjacentElement("afterbegin", datum);

        let titel = document.createElement("span");
        titel.setAttribute("class", 'titel');
        titel.textContent = this._titel;
        datum.insertAdjacentElement("afterend", titel);

        let betrag = document.createElement("span");
        betrag.setAttribute("class", "betrag");
        betrag.textContent = `${(this._betrag / 100).toFixed(2).replace(/\./, ",")} €`;
        titel.insertAdjacentElement("afterend", betrag);

        let button = document.createElement("button");
        button.setAttribute("class", "entfernen-button");
        betrag.insertAdjacentElement("afterend", button);

        let icon = document.createElement("i");
        icon.setAttribute("class", "fas fa-trash");
        button.insertAdjacentElement("afterbegin", icon);

        this._eintrag_entfernen_event_hinzufugen(listenPunkt);

        return listenPunkt;

    }

    _eintrag_entfernen_event_hinzufugen(listenPunkt) {
        listenPunkt.querySelector(".entfernen-button").addEventListener("click", e => {
            let timestamp = e.target.parentElement.getAttribute("data-timestamp");
            haushaltsbuch.eintrag_entfernen(timestamp);
        })
    }

};