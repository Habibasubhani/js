const accountId = 12345
let accountEmail = "habiba@google.com"
var accountPassword = "abcd"
accountCity = "Jaipur"
let accountState;
// accountId = 2 not allowed
accountEmail = "hc@hc.com"
accountPassword = "1123"
accountCity = "bangalore"
console.log(accountId);
/*
prefer not to use var because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword,accountCity,accountState])