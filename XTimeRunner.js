const XTimerRunner = (times, func) => {
    if (isNaN(times)) {
      console.error("times to run must be specified")
      return
    }
    if (typeof func !== "function") {
      console.error(`func must be a valid function, ${typeof func} provided`)
      return
    }
    Array.from(Array(times)).forEach(() => {
      func()
    })
  }
  
  XTimerRunner(3, () => console.log("hello, Hacktoberfest 2k22")) // this will print "hello, Hacktoberfest 2k22" 3 times
  