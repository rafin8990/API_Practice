const loadCountries=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=> displayCountries(data))

}
const displayCountries=countries=>{
    const countriesContainer=document.getElementById('country-container')
    countries.forEach(country => {
        console.log(country)
      const countryDiv=document.createElement('div')
      countryDiv.classList.add('country')
      countryDiv.innerHTML=`
      <img src="${country.flags.png}" alt="">
      <h1>Country Name: ${country.name.common} </h1>
      <h1>Capital: ${country.capital? country.capital[0]:'No Capital'} </h1>
      
      <button class="btn" onClick="loadCountryDetails()">Show details </button>


      `  
      countriesContainer.appendChild(countryDiv)
    });
}

const loadCountryDetails=() =>{
    const url='https://restcountries.com/v2/alpha/${code}'
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data))
}

const displayCountryDetails=(country)=>{
const getCountryDetails=document.getElementById('country-details')
getCountryDetails.innerHTML=`

<h1>Capital: ${country.capital? country.capital[0]:'No Capital'}  </h1>
<br>
<img src="${country.flags.png}" alt="">

`
}
