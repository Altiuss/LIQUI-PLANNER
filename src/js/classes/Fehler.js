export default class Fehler {

    constructor(fehlertext, formular_fehler) {
        this._fehlertext = fehlertext;
        this.formular_fehler = formular_fehler;
        this._html = this._html_generieren();

    }

    _html_generieren() {

        let fehlerbox = document.createElement("div");
        fehlerbox.setAttribute("class", "fehlerbox");

        let fehlerText = document.createElement("span");
        fehlerText.textContent = this._fehlertext;
        fehlerbox.insertAdjacentElement("afterbegin", fehlerText);

        let fehlerListe = document.createElement("ul");
        this.formular_fehler.forEach(fehler => {
            let fehlerlistepunkt = document.createElement("li");
            fehlerlistepunkt.textContent = fehler;
            fehlerListe.insertAdjacentElement("beforeend", fehlerlistepunkt);
        });
        fehlerbox.insertAdjacentElement("beforeend", fehlerListe);

        return fehlerbox;

    }

    _entfernen() {

        let bestehende_fehlerbox = document.querySelector(".fehlerbox");
        if (bestehende_fehlerbox !== null) {
            bestehende_fehlerbox.remove();
        }

    }

    anzeigen() {
        this._entfernen();
        let eingabeformular_container = document.querySelector("#eingabeformular-container");
        if (eingabeformular_container !== null) {
            eingabeformular_container.insertAdjacentElement("afterbegin", this._html);
        }

    }

};