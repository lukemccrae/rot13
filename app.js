Math.random = function () { return .5; };

var lucky_number = Math.floor(Math.random() * 100 + 1);

console.log(lucky_number);
