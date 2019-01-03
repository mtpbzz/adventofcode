const { read } = require("./parser");

const result = (input) => {
    let list = input.trim().split('\n').map(x => parseInt(x.trim(), 10));
    let total = 0;
  
    list.map(entry => {
        total += entry;
    })
  
    console.log("TOTAL:", total)
    return total;
}
  
  result(read("./input.txt"));