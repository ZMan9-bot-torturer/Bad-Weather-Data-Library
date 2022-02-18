# BadWeatherDataLibrary
#### Several functions that get weather from all around the world.
***
## **Requirements**
## **_Make sure you include lines 2-4 of script.js in your program!_**

### **Required** Helper Function
##### Grabs JSON formatted string from query URL
###### @param url {string} - URL to pull JSON string from
###### @return {object} - JSON formatted object
**`function pullJSON(url)`**
***

The function **`getTemp()`** returns the current temperature in a given city.
##### Example: **`var londonTemperature = getTemp("London")`**
###### @param city {string} - A city to view the current temperature of - **`Example: "London"`**
###### @return {float number} - The current temperature in given city
**`function getTemp(city)`**
***

The function **`getTempAdv()`** returns advanced temperature data for a given city. Requires the **`pullJSON()`** function.
##### Example: **`var londonHumidity = getTempAdv("London" , "humidity")`**
###### @param city {string} - The name of the city the user wants to see information about
###### @param category {string} - What information you want to get about the city - **`Options: [ "temp" , "feels_like" , "temp_min" , "temp_max" , "pressure" , "humidity" ]`**
###### @return {float number} - Advanced temperature data for given city
**`function getTempAdv(city, category)`**
***

The function **`currentWeather()`** returns the current weather condition for a given city.
##### Example: **`var weather_in_london = currentWeather("London")`**
###### @param city {string} - Name of city to return weather for - **`Example: "London"`**
###### @return {string} - Current weather condition for given city
**`function currentWeather(city)`**
***

The function **`findPeak()`** returns the state with the current highest or lowest temperature in the US.
#
### Examples (Assume state with current highest temperature is California with a temperature of 98.76 F)
##### Using name and temperature separately:
**`var [state , highest_temperature] = findPeak("high");`**
###
**`console.log(state);`** ==> **`'California'`**
###
**`console.log(highest_temperature);`** ==> **`98.76`**
###

##### Outputting result of overall function:
**`console.log(findPeak("high"));`** ==> **`['California' , 98.76]`**
#
###### @param high_or_low {string} - Whether the user wants to find the state with the **high**est current temperature or the **low**est current temperature - **`Options: "high" , "low"`**
###### @return {list} - State with the highest or lowest temperature currently, and its current temperature
**`function findPeak(high_or_low)`**
***

The function **`findWeather()`** returns a list of states in the US with a given weather condition.
##### Example: **`var states_with_rain = findWeather("rain")`**
###### @param weather {string} - Weather condition to search for - **`Options: ["Clear" , "Clouds" , "Drizzle" , "Dust" , "Fog" , "Haze" , "Mist" , "Rain" , "Sand" , "Snow" , "Thunderstorm"]`**
###### @return {list} - A list of states with the desired weather condition
**`function findWeather(weather)`**
