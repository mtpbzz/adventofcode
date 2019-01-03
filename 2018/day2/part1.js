const { read } = require("../parser");

const generateChecksum = (input) => {
    let rows = input.split('\n');
    let twos = 0;
    let threes = 0;
  
    rows.map((item, i) => {
      let count = {};
      let currentBox = item.split('');
  
      currentBox.map(box => {
        count[box] = (count[box] !== undefined) ? count[box] + 1 : 1;
      })
  
      let counts = new Set(Object.values(count));
  
      if (counts.has(2)) {
        twos++;
      }; 
      
      if (counts.has(3)) {
        threes++;
      };
    });
  
    console.log(twos * threes)
    return twos * threes;
  }

  generateChecksum(read("./input.txt"))