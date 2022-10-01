  // find people func
  const findPeople = () => {
    const people = []
    for (let i = 0; i < 1000000; i++) {
        people.push({
        name: "John Doe",
        age: 30,
        })
    }
    return people
}


const measureTime = (func, label = "default") => {
    if (typeof func !== "function") {
      console.error(`func must be a valid function, ${typeof func} provided`)
      return
    }
    console.time(label)
    func()
    console.timeEnd(label)
  }
  
  measureTime(findPeople,"findPeople")


