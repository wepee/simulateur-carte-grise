const FRAIS_GRAY_CARDS = 25
const TAXE_FIXE = 11
const TAXE_ACHEMINEMENT = 2.76


const taxeRegion = document.getElementById("locality-dropdown");
const energie = document.getElementById("energy-dropdown");
const typeVehicule = document.getElementById("type-vehicule-dropdown");
const taxeProfessionnelle = document.getElementById("PTAC-dropdown");
const CV = document.getElementById("puissance-cv");
const plusDeDixAns = document.getElementById("true");

const form_el = document.getElementById("form");

form_el.addEventListener("submit", function(evt) {
    evt.preventDefault();
    calculate(parse(taxeRegion.value), energie.value, typeVehicule.value, taxeProfessionnelle.value, plusDeDixAns.checked, CV.value)
});

function calculate(taxeRegion, energie, typeVehicule, taxeProfessionnelle, plusDeDixAns, CV) {
    console.log(taxeRegion)
    console.log(energie)
    console.log(typeVehicule)
    console.log(taxeProfessionnelle)
    console.log(plusDeDixAns)
    console.log(CV)


    const taxeRegionnale = TaxeRegionnale(taxeRegion, energie, typeVehicule, plusDeDixAns)
    console.log("taxe regionnale ", taxeRegionnale * CV)
    console.log("taxe professionnelle ", taxeProfessionnelle)
    console.log("taxe diverses ", TAXE_FIXE + TAXE_ACHEMINEMENT + FRAIS_GRAY_CARDS)

    const result = Math.round(taxeRegionnale * CV) + +taxeProfessionnelle + TAXE_FIXE + TAXE_ACHEMINEMENT + FRAIS_GRAY_CARDS

    document.getElementById("result").innerText = result + " €";
}

function TaxeRegionnale(taxeRegion, energie, typeVehicule, plusDeDixAns) {
    console.log('exonerationPropre : ',exonerationPropre(taxeRegion, energie))
    console.log('exonerationCatergorieVehicule : ',exonerationCatergorieVehicule(typeVehicule, plusDeDixAns))
    return taxeRegion.normal * exonerationPropre(taxeRegion, energie) * exonerationCatergorieVehicule(typeVehicule, plusDeDixAns)
}

function exonerationPropre(taxeRegion, energie) {

    //si le vehicule est propre
    if (energie == 0 ) return 0

    //si le vehicule est dit-propre
    if (energie == 1) return taxeRegion.ditPropre

    //si le vehicule est autre
    if (energie == 2) return 1

}

function exonerationCatergorieVehicule(typeVehicule, plusDeDixAns) {
    if (typeVehicule === "cyclomoteur_a_2_roues") return 0

    if (typeVehicule === "utilitaire" ||  typeVehicule === "moto_2_roues_de_moins_de_125_cm3") return 0.5

    if (typeVehicule === "voiture_particuliere" ){
        if (plusDeDixAns) return 0.5
        else return 1
    }
}

function parse(notParsed) {
    const separator = '|'
    const parsed = notParsed.split(separator)
    return { normal : parsed[0], ditPropre : parsed[1]}
}
