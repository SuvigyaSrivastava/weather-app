// Utility function to convert Kelvin to Celsius
const kelvinToCelsius = (kelvin: number): number => kelvin - 273.15;

// Adjust temperature if it is outside of realistic bounds
const adjustTemperature = (temp: number): number => {
    if (temp < -100 || temp > 60) {
        return temp + 276.21;  // Adjust temperature to a reasonable range
    }
    return temp;
};

// Updated fetchWeatherData function to include adjustment
const fetchWeatherData = async () => {
    try {
        // Fetch current weather data for all cities
        for (const city of cities) {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
            );
            const { main, weather, dt } = response.data;

            // Convert temperatures from Kelvin to Celsius and adjust if needed
            let temperature = kelvinToCelsius(main.temp);
            let feelsLike = kelvinToCelsius(main.feels_like);
            temperature = adjustTemperature(temperature);
            feelsLike = adjustTemperature(feelsLike);

            const condition = weather[0].main;

            // Store the latest data in the weatherData object
            weatherData[city] = {
                temperature,
                feelsLike,
                condition,
                timestamp: dt,
            };

            await saveWeatherDataToDB(city, temperature, feelsLike, condition, dt);

            // Check for alerting condition (temperature > 35°C)
            await checkAlertThresholds(city, temperature, condition, dt);
            
            // Update daily summaries
            const summary = updateDailySummary(city, temperature, condition);
            await saveDailySummaryToDB(city, summary);
        }

        // Check for existing unresolved alerts after fetching weather data
        await resolveUnresolvedAlerts();

    } catch (error: any) {
        console.error('Error fetching weather data:', error.message);
    }
};
