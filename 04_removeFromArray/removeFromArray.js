const removeFromArray = function(givenArray, ...theArgs) {
  let newArray = [];
  for (let i = 0; i <= (givenArray.length - 1); i ++) {
    newArray.push(givenArray[i]);
    for (const arg of theArgs) {
      let bool = false;
      if (givenArray[i] === arg) {
        bool = true;
      }
      if (bool == true){
        newArray.pop();
      }
    }
  }
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
