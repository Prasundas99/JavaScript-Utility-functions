function extractUrls(text) {
  const urlRegex = /https?:\/\/[^\s/$.?#].[^\s]*|www\.[^\s/$.?#].[^\s]*/g;
  return text.match(urlRegex) || [];
}

const text = "Visit my website at https://www.example.com or check out https://anotherexample.com";
const urls = extractUrls(text);
console.log(urls);
