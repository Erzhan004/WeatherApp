# WeatherApp
# API
# OpenWeatherMap API
Description:
OpenWeatherMap provides a comprehensive set of weather data and forecasts. The API allows you to access current weather conditions, forecasts, and historical data for any location on Earth.
Usage:
Obtain an API key by registering on the OpenWeatherMap website.
Make HTTP requests to their API endpoint to get weather data for a specific location.

# Yandex Maps API
Description:
Yandex Maps API offers mapping and geocoding services. It allows you to integrate maps, geolocation, and route planning into your application.
Usage:
Obtain an API key from Yandex Map.
Use the API to convert city names into geographical coordinates and display interactive maps.

# Unsplash API
Description:
Unsplash is a platform for high-quality, freely usable images. The Unsplash API provides programmatic access to their vast collection of photos.
Usage:
Create a developer account on Unsplash and register an application to obtain an API key.
Use the API to dynamically fetch background images based on weather conditions.
These APIs collectively enable your weather website to provide users with up-to-date weather information, display city maps, and enhance the visual experience with dynamically changing background images.

# Dependencies
  "axios": "^1.6.5",
  "body-parser": "^1.20.2",
  "express": "^4.18.2",
  "path": "^0.12.7"
  
Axios:
Axios is a promise-based HTTP client for making HTTP requests. It simplifies the process of sending asynchronous HTTP requests and handling responses.
Installation: 
# npm install axios

body-parser:

Purpose: Body-parser is a middleware for Express.js that parses incoming request bodies. It extracts the entire body portion of an incoming request and exposes it on req.body.
Installation: 
# npm install body-parser

express:

Purpose: Express.js is a web application framework for Node.js. It simplifies the process of building web applications by providing a set of features and middleware
for handling various aspects of web development.
Installation:
# npm install express

path:

Purpose: The 'path' module provides utilities for working with file and directory paths. It is often used to manipulate file paths and directories.
Installation: 
# The 'path' module is a core module in Node.js, so you don't need to install it separately. You can use it directly in your code.

To install all dependencies at once, you can run the following command in your project's root directory:
# npm install

# To strat the application
# Note : First, make sure you have Node.js and npm installed on your machine.
1) Install all dependencies
2) After the dependencies are installed, you can start your application by running the following command in the terminal:
node app.js
3) After running the node app.js command in your terminal, your application should be running on http://localhost:3000/. 
