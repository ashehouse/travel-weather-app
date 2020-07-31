const geonamesApiURL = 'http://api.geonames.org/searchJSON?q=london&fuzzy=0.8&username=ashehouse'

const getLonLat = fetch(geonamesApiURL)
.then(response => response.json())
.catch(e => requestError(e, 'Thing Failed'));


const getWeather = async (apiUrl) => {
    const response = await fetch(apiUrl);
    try {
    const data = await response.json();
    return data;
    } catch(error) {
        console.log('error', error);
    }
}