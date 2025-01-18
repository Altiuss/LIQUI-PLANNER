"use strict";

const haushaltsbuch = {

    gesamtbilanz: new Map(),


    eintraege: [],

    eintrag_erfassen() {
        let neuer_eintrag = new Map();
        neuer_eintrag.set("titel", prompt("Titel:"));
        neuer_eintrag.set("typ", prompt("Typ (Einnahme oder Ausgabe):"));
        neuer_eintrag.set("betrag", parseInt(prompt("Betrag (in Cent):")));
        neuer_eintrag.set("datum", prompt("Datum (jjjj.mm.tt):"));
        this.eintraege.push(neuer_eintrag);

    },

    eintraege_sortieren() {
        this.eintraege.sort(function (a, b) {
            if (a.get("datum") > b.get("datum")) {
                return -1;
            } else if (a.get("datum") < b.get("datum")) {
                return 1;
            } else {
                return 0;
            }
        })

    },



    eintraege_ausgeben() {
        console.clear();
        this.eintraege.forEach(function (eintrag) {
            console.log(`Titel: ${eintrag.get("titel")}\n`
                + `Typ: ${eintrag.get("typ")}\n`
                + `Betrag: ${eintrag.get("betrag")} cnt\n`
                + `Datum: ${eintrag.get("datum")}`);
        });

    },

    gesamtbilanz_erstellen() {
        let neue_gesamtbilanz = new Map();
        neue_gesamtbilanz.set("einnahmen", 0);
        neue_gesamtbilanz.set("ausgaben", 0);
        neue_gesamtbilanz.set("bilanz", 0);
        this.eintraege.forEach(function (eintrag) {
            switch (eintrag.get("typ")) {
                case "Einnahme":
                    neue_gesamtbilanz.set("einnahmen", neue_gesamtbilanz.get("einnahmen") + eintrag.get("betrag"));
                    neue_gesamtbilanz.set("bilanz", neue_gesamtbilanz.get("bilanz") + eintrag.get("betrag"));
                    break;
                case "Ausgabe":
                    neue_gesamtbilanz.set("ausgaben", neue_gesamtbilanz.get("ausgaben") + eintrag.get("betrag"));
                    neue_gesamtbilanz.set("bilanz", neue_gesamtbilanz.get("bilanz") - eintrag.get("betrag"));
                    break;
                default: console.log(`Der Typ "${eintrag.get("typ")}" ist nicht bekannt.`);
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
            `Einnahmen: ${this.gesamtbilanz.get("einnahmen")}ct\n`
            + `Ausgaben: ${this.gesamtbilanz.get("ausgaben")}ct\n`
            + `Bilanz: ${this.gesamtbilanz.get("bilanz")} ct\n`
            + `Bilanz ist positiv: ${this.gesamtbilanz.get("bilanz") >= 0}`
        );
    },

    eintrag_hinzufuegen() {
        let weitere_eintrag = true;
        while (weitere_eintrag) {
            this.eintrag_erfassen();
            this.eintraege_sortieren()
            this.eintraege_ausgeben();;
            this.gesamtbilanz_erstellen();
            this.gesamtbilanz_ausgeben();
            weitere_eintrag = confirm("Weitere Eintrag hinzufugen?")
        };
    }

};

haushaltsbuch.eintrag_hinzufuegen();
console.log(haushaltsbuch);





