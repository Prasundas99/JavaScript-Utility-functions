// 1. Check if String contain only alphanumeric characters and can
// contain a mininum of two characters, and end with a digit.

const reg = /\b[a-zA-Z\d]{1,}\d$\b/;
const str1 = "jAsOn1";
const str2 = "jAsOn1_";

const check1 = reg.test(str1) // return true
const check2 = reg.test(str2) // return false


// 2. Email Validation with regex
const reg2 = /^([\w\.\+]{1,})([^\W])(@)([\w]{1,})(\.[\w]{1,})+$/;
const input = "shubham@gmail.com"

const check3 = reg2.test(input) // returns true



// 3. Date Format check with regex
const dateFormat = /\d\d-\w+-\d\d\d\d/;
const dateInp = "10-02-2021"

const check4 = dateFormat.test(dateInp);
