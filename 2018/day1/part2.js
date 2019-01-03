const { read } = require("../parser");

const result = (input) => {
    let list = input.trim().split('\n').map(x => parseInt(x.trim(), 10));
    let total = 0;
  
    let frequency = 0;
    let i = 0;
    let duplicate = false;
    let pastFrequencies = [frequency];
  
    while(!duplicate) {
        // Keep going after list end is reached
        if (i === list.length) {
            i = 0;
        }
        frequency += list[i];
        // Set duplicate boolean
        duplicate = pastFrequencies.includes(frequency);
        // Add to past frequencies array
        pastFrequencies.push(frequency);
        i++;
    }

    console.log(frequency);
    return frequency;
}
  
  result(read("../input.txt"));

