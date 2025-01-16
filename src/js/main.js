"use strict";

const haushaltsbuch = {

    gesamtbilanz: {
        einnahmen: 0,
        ausgaben: 0,
        bilanz: 0
    },

    eintraege: [],



    eintrag_erfassen() {
        let eintrag = {
            titel: prompt("Titel:"),
            typ: prompt("Typ (Einnahme oder Ausgabe):"),
            betrag: parseInt(prompt("Betrag (in Cent):")),
            datum: prompt("Datum (jjjj.mm.tt):")

        };

        this.eintraege.push(eintrag);

    },

    eintraege_ausgeben() {
        console.clear();
        this.eintraege.forEach(function (eintrag) {
            console.log(`Titel: ${eintrag.titel}\n`
                + `Typ: ${eintrag.typ}\n`
                + `Betrag: ${eintrag.betrag} cnt\n`
                + `Datum: ${eintrag.datum}`);
        });

    },

    gesamtbilanz_erstellen() {
        let neue_gesamtbilanz = {
            einnahmen: 0,
            ausgaben: 0,
            bilanz: 0
        };

        this.eintraege.forEach(function (eintrag) {
            switch (eintrag.typ) {
                case "Einnahme":
                    neue_gesamtbilanz.einnahmen += eintrag.betrag;
                    neue_gesamtbilanz.bilanz += eintrag.betrag;
                    break;
                case "Ausgabe":
                    neue_gesamtbilanz.ausgaben += eintrag.betrag;
                    neue_gesamtbilanz.bilanz -= eintrag.betrag;
                    break;
                default: console.log(`Der Typ "${eintrag.typ}" ist nicht bekannt.`);
                    break;
            }

        });
        this.gesamtbilanz = neue_gesamtbilanz;
    },


    //     // if (this.neuer_eintrag.typ === "Einnahme") {
    //     //     this.gesamtbilanz.einnahmen += this.neuer_eintrag.betrag;
    //     //     this.gesamtbilanz.bilanz += this.neuer_eintrag.betrag;
    //     // } else if (this.neuer_eintrag.typ === "Ausgabe") {
    //     //     this.gesamtbilanz.ausgaben += this.neuer_eintrag.betrag;
    //     //     this.gesamtbilanz.bilanz -= this.neuer_eintrag.betrag;
    //     // } else {
    //     //     console.log(`Der Typ "${this.neuer_eintrag.typ}" ist nicht bekannt.`)
    //     // };
    // },

    gesamtbilanz_ausgeben() {
        console.log(
            `Einnahmen: ${this.gesamtbilanz.einnahmen}ct\n`
            + `Ausgaben: ${this.gesamtbilanz.ausgaben}ct\n`
            + `Bilanz: ${this.gesamtbilanz.bilanz} ct\n`
            + `Bilanz ist positiv: ${this.gesamtbilanz.bilanz >= 0}`
        );
    },

    eintrag_hinzufuegen() {
        let weitere_eintrag = true;
        while (weitere_eintrag) {
        this.eintrag_erfassen();
        this.eintraege_ausgeben();
        this.gesamtbilanz_erstellen();
        this.gesamtbilanz_ausgeben();
        weitere_eintrag = confirm("Weitere Eintrag hinzufugen?")
        };
    }

};

haushaltsbuch.eintrag_hinzufuegen();
console.log(haushaltsbuch);





