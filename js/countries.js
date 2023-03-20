const loadCountries = async() => {
    const url = `https://restcountries.com/v3.1/all`;
    const res = await fetch(url);
    const data = await res.json();
    displayCountries(data)
   
}
const displayCountries = countries => {
    console.log(countries);
    const countriesHTML = countries.map(country =>getCountryHTML(country));
    const container = document.getElementById('country');
    container.innerHTML = countriesHTML.join(" ");
}
const getCountryHTML = (country) => {
    const {name, flags} = country;
    return `
    <div class="container">
    <h2>${name.common}</h2>
    <p>${name.official}</p>
    <img src="${flags.png}">
    </div>
    `
}
loadCountries();