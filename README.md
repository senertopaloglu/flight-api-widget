# flight-api-widget

Widget that displays flights arriving at Madrid Barajas Airport to users, in order of earliest arrival, makes use of the API accessible at https://rapidapi.com/Rotanev/api/madrid-barajas-airport-flights/.

Uses nodemon for constant connection to API server, with the application aspect coded in vanilla JS.

## Screenshots
![Screenshot](screenshots/screenshot.PNG "Screenshot")

## Instructions
To run this project you will need an API key, which can be obtained for free by choosing basic subscription at the above URL. There is a .env file already in the repository, please assign your generated API key to the RAPID_API_KEY variable in the file.

Following this, please ensure node and npm is installed and added to PATH. After pulling this repo and navigating to local directory please enter the following command and follow instructions ```npm run start```. In the case packages such as axios HTTP client and Nodemon are not already installed npm will guide you through installation.

The front end can be accessed by copying the absolute path of the client/index.html file into the browser with prefix ```file:///``` after succesfully completing the previous step.
