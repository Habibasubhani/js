let score = 33

//type isliye find krte kyuki hme nhi pta as a backend dev ki frontend se jo value ayi hai wo kiss type ki hai maybe value in score is string or number
//for ex: const{score} = req.body //there is no guarentee of value ki string ayi hai ya number ayi hai
console.log(typeof score)
let scoreA = "33"
console.log(typeof scoreA) //since value string me ayi hai but we no 100% operation will execute in numbers
let valueInNumber = Number(scoreA)
console.log(typeof valueInNumber)
let scoreB = "33abc"
let valueOfNumber = Number(scoreB)
console.log(typeof valueOfNumber) // ans number aa rha jbki ye nhi ana chahiye tha abc number me kaise aa skta
console.log(valueOfNumber) // NaN not a number
let scoreC = null
console.log(typeof scoreC)
let valves = Number(scoreC)
console.log(typeof valves)
console.log(valves)      //0
let scoreD = undefined
console.log(typeof scoreD)
let abc = Number(scoreD)
console.log(typeof abc)
console.log(abc)       //NaN
let scoreE = true
console.log(typeof scoreE)
let values = Number(scoreE)
console.log(typeof values)
console.log(values)     //1
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)