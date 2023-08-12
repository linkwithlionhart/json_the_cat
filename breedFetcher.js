// Require module: 'request' library to make HTTP requests.
const request = require('request');

/**
 * Fetches the breed description for a given breed from TheCatAPI.
 * @param {string} breedName - The name of the cat breed.
 * @param {function} callback - A callback function that handles the response.
 */

const fetchBreedDescription = (breedName, callback) => {
  // Construct URL to query TheCatAPI.
  const apiURL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  // Make an HTTP request to the constructed URL.
  request(apiURL, (error, response, body) => {

    // Edge Case: Request failed. If error, report it.
    if (error) {
      callback(`Request failed: ${error}`, null);
      return;
    }

    // Parse the JSON body into a JavaScript object.
    const data = JSON.parse(body);

    // Edge case: Breed not found. If no data returned for breed, report.
    if (data.length === 0) {
      callback(`Breed "${breedName}" not found`, null);
      return;
    }

    // If success, return description of breed.
    callback(null, data[0].description.trim());
  });
};

// Get breed name from the command line
const breedName = process.argv[2];

// Fetch the description for the provided breed name.
fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    // Log errors.
    console.log('Error: ', error);
  } else {
    // If success, print out breed description.
    console.log('Description: ', description);
  }
});
