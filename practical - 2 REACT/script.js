// Hardcoded weather data
const weatherData = {
    'London': { temperature: '15°C' },
    'New York': { temperature: '22°C' },
    'Paris': { temperature: '18°C' },
    'Tokyo': { temperature: '20°C' },
    'Delhi': { temperature: '30°C' },
    'Mumbai': { temperature: '28°C' },
    'Kolkata': { temperature: '25°C' },
    'Chennai': { temperature: '27°C' },
    'Hyderabad': { temperature: '29°C' },
    'Bengaluru': { temperature: '26°C' },
    'Ahmedabad': { temperature: '24°C' },
    'Jaipur': { temperature: '23°C' },
    'Lucknow': { temperature: '22°C' },
    'Chandigarh': { temperature: '21°C' },
    'Ahmedabad': { temperature: '24°C' },
    'Surat': { temperature: '28°C' },
    'Vadodara': { temperature: '29°C' },
};

const cityInput = document.getElementById('city-input');
const getWeatherBtn = document.getElementById('get-weather');
const resultDiv = document.getElementById('weather-result');
const clearBtn = document.getElementById('clear-btn');
const cityListDiv = document.getElementById('city-list');

// Get unique city names from weatherData
const cityNames = Object.keys(weatherData).filter((v, i, a) => a.indexOf(v) === i);

// Render city list
cityListDiv.innerHTML = cityNames.map(city => `<span>${city}</span>`).join(' ');

cityListDiv.addEventListener('click', function(e) {
    if (e.target.tagName === 'SPAN') {
        cityInput.value = e.target.textContent;
        cityInput.focus();
        resultDiv.textContent = '';
        resultDiv.classList.remove('visible');
    }
});

function showWeather() {
    const city = cityInput.value.trim();
    resultDiv.classList.remove('visible');
    resultDiv.textContent = 'Loading...';
    setTimeout(() => {
        if (weatherData[city]) {
            resultDiv.textContent = `Temperature in ${city}: ${weatherData[city].temperature}`;
            resultDiv.classList.add('visible');
        } else {
            resultDiv.textContent = 'Weather data not found for this city.';
            resultDiv.classList.add('visible');
            cityInput.classList.add('shake');
            setTimeout(() => cityInput.classList.remove('shake'), 400);
        }
    }, 500);
}


getWeatherBtn.addEventListener('click', showWeather);

cityInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        showWeather();
    }
});

cityInput.addEventListener('input', function() {
    resultDiv.textContent = '';
    resultDiv.classList.remove('visible');
});

clearBtn.addEventListener('click', function() {
    cityInput.value = '';
    resultDiv.textContent = '';
    resultDiv.classList.remove('visible');
    cityInput.focus();
});