function setupLocalityDropdown() {
    let dropdown = document.getElementById('locality-dropdown');
    dropdown.length = 0;

    dropdown.selectedIndex = 0;

    const data = [
        {
            "name": "Auvergne-Rhône-Alpes",
            "value": {normal: 43, ditPropre: 0}
        },
        {
            "name": "Bourgogne-Franche-Comté",
            "value": {normal: 51, ditPropre: 0}
        },
        {
            "name": "Bretagne",
            "value": {normal: 51, ditPropre: 0}
        },
        {
            "name": "Centre-Val de Loire",
            "value": {normal: 49.8, ditPropre: 0}
        },
        {
            "name": "Corse",
            "value": {normal: 27, ditPropre: 0}
        },
        {
            "name": "Grand-Est",
            "value": {normal: 42, ditPropre: 0}
        },
        {
            "name": "Hauts-de-France",
            "value": {normal: 33, ditPropre: 0}
        },
        {
            "name": "Île-de-France",
            "value": {normal: 46.15, ditPropre: 0}
        },
        {
            "name": "Nouvelle-Aquitaine",
            "value": {normal: 41, ditPropre: 0}
        },
        {
            "name": "Normandie",
            "value": {normal: 35, ditPropre: 0}
        },
        {
            "name": "Occitanie",
            "value": {normal: 44, ditPropre: 0}
        },
        {
            "name": "Pays de la Loire",
            "value": {normal: 48, ditPropre: 0}
        },
        {
            "name": "Provence-Alpes-Côte d'Azur",
            "value": {normal: 51.2, ditPropre: 0}
        }
    ]
    let option;
    for (let i = 0; i < data.length; i++) {
        option = document.createElement('option');
        option.text = data[i].name;
        option.value = data[i].value.normal + '|' + data[i].value.ditPropre;
        dropdown.add(option);
    }
}

setupLocalityDropdown()
