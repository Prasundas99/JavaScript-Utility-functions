// Dictionary Function
const dictionary = (word) => {
    // Dictionary API URL
    url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    // Fetching meaning of the word from the API
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // In case of words missing in the API
            if (data.title == 'No Definitions Found') {
                console.log(`${data.message} ${data.resolution}`);
            } else {
                // Final Meaning
                console.log(`${data[0].meanings[0].definitions[0].definition}`);
            }
        })
        // Any other errors
        .catch((err) => console.log(err));
    return word;
}
// Calling the function
dictionary('Table');
dictionary('Ocean');