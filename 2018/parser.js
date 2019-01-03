const { readFileSync } = require("fs");

const read = path => {
  const content = readFileSync(path, "utf-8");
  return content;
};

module.exports = {
  read
};