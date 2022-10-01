const shortenStrWithellipsis = (text, length = 10, ellipsisCount = 3) => {
    if (!(typeof text === "string" || text instanceof String)) {
      console.error(`expecting a string, ${typeof text} provided`)
      return ""
    }
    if (isNaN(length) || isNaN(ellipsisCount)) {
      console.error("length and ellipsisCount must be valid numbers")
      return
    }
    
    if (text.length <= length) {
      return text
    }
    const ellipsis = Array.from(Array(ellipsisCount)).map(() => ".").join("")
    return `${text.substr(0, length)}${ellipsis}`
  }
  
console.log('====================================');
console.log(  shortenStrWithellipsis("I love Hacktoberfest, and this is my second year.", 20, 5));
console.log('====================================');  // "I..."