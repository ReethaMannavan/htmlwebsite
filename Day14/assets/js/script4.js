// 4. Fetch real-time weather data using an API. 


        async function getWeather() {
            let city = document.getElementById("city").value.trim();
            let weatherField = document.getElementById("weather");
            let iconField = document.getElementById("icon");
            if (!city) {
                weatherField.textContent = "Please enter a city name.";
                return;
            }
            weatherField.textContent = "Fetching weather...";
            iconField.style.display = "none";
            const apiKey = "6b8475d1939bb5502208fc73e60459e5"; 
            const apiUrl =
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                if (data.cod !== 200) {
                    weatherField.textContent = "City not found!";
                    return;
                }
                let temp = data.main.temp;
                let description = data.weather[0].description;
                let icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
                weatherField.textContent = `🌡️ ${temp}°C - ${description}`;
                iconField.src = icon;
                iconField.style.display = "block";
            } catch (error) {
                weatherField.textContent = "Error fetching weather data!";
                console.error(error);
            }
        } 
 