# BadWeatherDataLibrary
#### Several functions that get weather from all around the world.
#
## **Requirements**
**Make sure you include lines 2-4 of script.js in your program!**

### **Required** Helper Function
##### Grabs JSON formatted string from query URL
###### @param url {string} - URL to pull JSON string from
###### @return {object} - JSON formatted object
**`function pullJSON(url)`**
#

The function **`getTemp()`** returns the current temperature in a given city.
##### Example: **`var londonTemperature = getTemp("London")`**
###### @param city {string} - A city to view the current temperature of - `Example: "London"`
###### @return {float number} - The current temperature in given city
**`function getTemp(city)`**
#

The function **`getTempAdv()`** returns advanced temperature data for a given city. Requires the **`pullJSON()`** function.
##### Example: **`var londonHumidity = getTempAdv("London" , "humidity")`**
###### @param city {string} - The name of the city the user wants to see information about
###### @param category {string} - What information you want to get about the city - `Options: [ "temp" , "feels_like" , "temp_min" , "temp_max" , "pressure" , "humidity" ]`
###### @return {float number} - Advanced temperature data for given city
**`function getTempAdv(city, category)`**
#

The function **`currentWeather()`** returns the current weather condition for a given city.
##### Example: **`var weather_in_london = currentWeather("London")`**
###### @param city {string} - Name of city to return weather for - `Example: "London"`
###### @return {string} - Current weather condition for given city
**`function currentWeather(city)`**
#

