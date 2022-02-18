// ############# Required within main JavaScript file ###############
const p = "OTNhY2JhZGVkZTAzM2FjNjJhNWM1NmUyNjI3NDgxMzM=";

const q = ['4829764','5879092','5551752','4099753','4350049','5417618','4831725','4142224','4138106','4155751','4197000','5855797','5596512','4896861','4921868','4862182','4273857','6254925','4331987','4971068','5667009','5073708','5509151','5090174','5101760','5481136','5128638','4482348','5690763','5165418','4544379','4904898','6691018','6254926','5001836','5037779','4436296','4398678','6254927','5224323','4597040','5769223','4662168','4736286','5549030','2145267','4252071','5815135','4826850','5279468','5843591']; 
// ##################################################################

// #Helper Function#
// Grabs JSON formatted string from query url
// @param url {string} - URL to pull JSON string from
// @return {object} - JSON formatted object
function pullJSON(url){
	var request = new XMLHttpRequest();  
	request.open("GET", url, false);
	request.send(null);  
	var jsonObject = request.responseText.split(/\r?\n|\r/);	
	jsonObject = JSON.parse(jsonObject)
	return jsonObject;
}

// Displays advanced temperature data for a given city.
// Example: var londonHumidity = getTempAdv("London","humidity");
// @param city {string} - A city to view the temperature info for - Example: "London"
// @param category {string} Options: "temp","feels_like","temp_min","temp_max","pressure","humidity" - What information you want to get - Example: "temp"
// @return {number/float} - Advanced temperature data for selected city
function getTempAdv(city, category){
	try {
		if (category && city){
			var response = pullJSON(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${atob(p)}`);
			if (response.cod !== 200){
				return "No results found. Please try again after changing your search.";
			} else {
				var temps = response.main;
				if (temps[category] !== undefined){
					return temps[category.toLowerCase()];
				} else {
					return "No results found.";
				}
			}
		} else if (!city) {
			return "No city specified or city not found. Please change your request and try again.";
		} else {
			return "No category specified or category does not exist. Please change your request and try again.";
		}
	} catch (err){
		return ("An unexpected error occured. Error: " + err);
	}
}

// Shows the current temperature in a city
// Example: var londonTemperature = getTemp("London");
// @param city {string} - A city to view the temperature info for - Example: "London"
// @return {number} - The current temperature in <city>
function getTemp(city){
	try {
		var response = pullJSON(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${atob(p)}`);
		if (response.cod !== 200){
			return ("No results found. Please try again after changing your search. Make sure you specified a valid city!\nError code: " + response.cod);
		} else {
			var temp = response.main.temp;
			return temp;
		}
	} catch (err){
		return ("An unexpected error occured. Error: " + err);
	}
}

// Finds current weather for a city
// Example: var weather_in_london = currentWeather("London");
// @param city {string} - name of city you want weather for - Example: "London"
// @return {string} - Current weather condition for given city
function currentWeather(city){
	try {
		if (city == undefined || city == ""){
			return "No city provided. Please try again.";
		} else {
			var response = pullJSON(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${atob(p)}`);
		}
		if (response.cod !== 200){
			return ("No results found. Please try again after changing your search. Make sure you have specified a valid city or have location services turned on!\nError code: " + response.cod);
		} else {
			return response.weather[0]["main"];
		}
	} catch (err){
		return ("An unexpected error occured. Error: " + err);
	}
}

// Finds the state with the highest or lowest temperature currently
// Example: 
//		var [state,highest_temperature] = findPeak("high");
// 		console.log(state);
// 		console.log(highest_temperature);
// @param high_or_low {string} Options: "high", "low" - whether you want to find the highest current temperature or the lowest current temperature
// @return {list} - State with the highest or lowest temperature currently, and its current temperature
function findPeak(high_or_low){
	try {
		if (!high_or_low) {
			return "No arguments provided. Please specify \"high\" or \"low\" and try again.";
		} else if (high_or_low !== "high" && high_or_low !== "low"){
			return "You must specify either \"high\" or \"low.\" Please try again.";
			return;
		}
		var temps = [];
		var names = [];
		for (let i in q) {
			var response = pullJSON(`https://api.openweathermap.org/data/2.5/weather?id=${q[i]}&units=imperial&appid=${atob(p)}`);
			temps.push(response.main.temp);
			names.push(response.name);
		}
		if (high_or_low == "high") {
			var highest = 0;
			var highestName = "";
			for (let i in temps){
				if (temps[i] > highest) {
					highest = temps[i];
					highestName = names[i];
				}
			}
			return [highestName,highest];
		} else {
			var lowest = 99999;
			var lowestIndex;
			for (let i in temps){
				if (temps[i] < lowest) {
					lowest = temps[i];
					lowestName = names[i];
				}
			}
			return [lowestName,lowest];
		}
	} catch (err){
		return ("An unexpected error occured. Error: " + err);
	}
}

// Returns all states in the US with a given weather condition
// @param weather {string} - Weather condition to search for - Options: ["Clear" , "Clouds" , "Drizzle" , "Dust" , "Fog" , "Haze" , "Mist" , "Rain" , "Sand" , "Snow" , "Thunderstorm"]
// @return {list} - A list of states with the desired weather condition
function findWeather(weather){
	try {
		if (!weather) {
			return ("Error: No arguments provided. Please provide an argument and try again.");
		} else if (!(weather.toLowerCase().includes("clear") || weather.toLowerCase().includes("clouds") || weather.toLowerCase().includes("rain") || weather.toLowerCase().includes("snow") || weather.toLowerCase().includes("sand") || weather.toLowerCase().includes("thunderstorm") || weather.toLowerCase().includes("smoke") || weather.toLowerCase().includes("haze") || weather.toLowerCase().includes("dust") || weather.toLowerCase().includes("drizzle") || weather.toLowerCase().includes("fog") || weather.toLowerCase().includes("mist"))) {
			return ("Error: Invalid arguments provided. Please provide one of [\"Clear\" , \"Clouds\" , \"Drizzle\" , \"Dust\" , \"Fog\" , \"Haze\" , \"Mist\" , \"Rain\" , \"Sand\" , \"Snow\" , \"Thunderstorm\"] , then try again.");
		} else {
			var states = [];
			for (let i in q) {
				var response = pullJSON(`https://api.openweathermap.org/data/2.5/weather?id=${q[i]}&units=imperial&appid=${atob(p)}`);
				if (weather.toLowerCase().includes(response.weather[0].main.toLowerCase())){
					states.push(response.name);
					console.log(weather);
				}
			}
			if (states.length === 0) {
				return `No states found with weather condition: "${weather}". Please try again in a little while or change your search.`;
			} else {
				return states;
			}
		}
	} catch (err){
		return (`An unexpected error occured. ERROR(${err.code}): ${err.message}`);
	}
}