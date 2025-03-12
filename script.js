// Function to fetch and display temperature data
function getTemperature() {
    let city = document.getElementById('cityInput').value;
    let apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap or WeatherAPI key
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // For OpenWeatherMap

    // Clear any previous results or error messages
    document.getElementById('temperatureOutput').innerHTML = '';
    document.getElementById('errorMessage').innerHTML = '';

    // Fetch the weather data from the API
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            // Display the temperature in Celsius
            let temp = data.main.temp;
            document.getElementById('temperatureOutput').innerHTML = `Current Temperature: ${temp}°C`;
        })
        .catch(error => {
            // Display error message if city is not found
            document.getElementById('errorMessage').innerHTML = `Error: ${error.message}`;
        });
}
