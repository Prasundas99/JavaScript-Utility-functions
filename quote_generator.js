const quote_generator = () => {
    // Storing the API endpoint in a variable
    const url = "https://type.fit/api/quotes/";
    // Fetching the API
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // Generate quotes
            let RandomQuotes = Math.floor(Math.random() * data.length);
            let quote = data[RandomQuotes].text;
            console.log(quote);
        })
        .catch(() => {
            if (err) throw err;
        });
    return quote;
};