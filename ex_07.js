// Fonction pour créer une ville
function createCity(country, cityName) {
    // On vérifie si la ville existe déjà
    const city = country.find(c => c[0] === cityName);
    if (city) {
        console.log(`City ${cityName} already exists.`);
        return;
    }
    // Si la ville n'existe pas, on l'ajoute avec un tableau vide de logements
    country.push([cityName, []]);
}

// Fonction pour créer un logement dans une ville
function createHousing(country, cityName, housingName) {
    // On cherche la ville
    const city = country.find(c => c[0] === cityName);
    if (!city) {
        console.log(`Failure to get city: ${cityName}.`);
        return null;
    }
    
    // On vérifie si le logement existe déjà
    const housing = city[1].find(h => h[0] === housingName);
    if (housing) {
        console.log(`Housing ${housingName} already exists in ${cityName}.`);
        return;
    }
    
    // Ajouter le logement à la ville
    city[1].push([housingName, []]);
}

// Fonction pour ajouter des caractéristiques à un logement
function addCharacteristics(country, cityName, housingName, ...characteristics) {
    // On cherche la ville
    const city = country.find(c => c[0] === cityName);
    if (!city) {
        console.log(`Failure to get city: ${cityName}.`);
        return null;
    }
    
    // On cherche le logement dans cette ville
    const housing = city[1].find(h => h[0] === housingName);
    if (!housing) {
        console.log(`Failure to get housing: ${housingName} in ${cityName}.`);
        return null;
    }
    
    // Ajouter les caractéristiques au logement
    housing[1].push(...characteristics);
}

// Fonction pour obtenir une ville
function getCityOfCountry(country, cityName) {
    // On cherche la ville
    const city = country.find(c => c[0] === cityName);
    if (!city) {
        console.log(`Failure to get city: ${cityName}.`);
        return null;
    }
    return city;
}

// Fonction pour obtenir les caractéristiques d'un logement
function getCharacteristicsOfHousing(country, cityName, housingName) {
    // On cherche la ville
    const city = country.find(c => c[0] === cityName);
    if (!city) {
        console.log(`Failure to get city: ${cityName}.`);
        return null;
    }
    
    // On cherche le logement dans cette ville
    const housing = city[1].find(h => h[0] === housingName);
    if (!housing) {
        console.log(`Failure to get housing: ${housingName} in ${cityName}.`);
        return null;
    }
    
    return housing[1];
}

// --- Exemple d'utilisation ---

let country = [];

// Création d'une ville
createCity(country, "Nantes");

// Création d'un logement dans la ville "Nantes"
createHousing(country, "Nantes", "Apartment1");

// Ajout de caractéristiques au logement "Apartment1" dans la ville "Nantes"
addCharacteristics(country, "Nantes", "Apartment1", "100m2", "2 bathrooms", "Red paint", "14 rue Arthur III");

// Récupération des caractéristiques du logement "Apartment1" dans la ville "Nantes"
console.log(getCharacteristicsOfHousing(country, "Nantes", "Apartment1"));

// Affichage de la structure complète du pays
console.log(country);

