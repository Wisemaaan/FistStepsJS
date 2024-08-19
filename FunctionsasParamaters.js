const higherOrderFunc = param => {
    param();
    return `I just invoked ${param.name} as a callback function!`
  }
   
  const anotherFunc = () => {
    return 'I\'m being invoked by the higher-order function!';
  }
  
  higherOrderFunc(anotherFunc);



  const addTwo = num => {
    return num + 2;
  }
  
  const checkConsistentOutput = (func, val) => {
    let checkA = val + 2;
    let checkB = func(val);
    if(checkA === checkB) {
      return func(val);
    } else {
      return 'inconsistent results';
    }
  
  }
  
  console.log(checkConsistentOutput(addTwo, 45));