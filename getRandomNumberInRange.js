const getRandomNumberInRange = (lower = 0, upper = 10) => {
    if (isNaN(lower) || isNaN(upper)) {
      console.error("lower and upper must be valid numbers")
      return
    }
    lower = Math.ceil(lower)
    upper = Math.floor(upper)
    return Math.floor(Math.random() * (upper - lower + 1)) + lower
  }

  console.log('====================================');
  console.log(getRandomNumberInRange(222, 440)); // It will return a random number between 222 and 440
  console.log('====================================');