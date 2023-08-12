// Import the fetchBreedDescription function from breedFetcher module.
const { fetchBreedDescription } = require('./breedFetcher');

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