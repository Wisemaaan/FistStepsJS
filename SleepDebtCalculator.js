const getSleepHours = (day) => {
    if (day === "monday") {
      return 8;
    } else if (day === "tuesday") {
      return 4;
    } else if (day === "wednesday") {
      return 6;
    } else if (day === "thursday") {
      return 7;
    } else if (day === "friday") {
      return 3;
    } else if (day === "saturday") {
      return 2;
    } else if (day === "sunday") {
      return 9;
    }
  };
  
  //console.log(getSleepHours("monday"));
  //console.log(getSleepHours("friday"));
  
  const getActualSleepHours = () => {
    return getSleepHours("monday") +
           getSleepHours("tuesday") +
           getSleepHours("wednesday") +
           getSleepHours("thursday") +
           getSleepHours("friday") +
           getSleepHours("saturday") +
           getSleepHours("sunday");
  };
  
  console.log(getActualSleepHours()); 
  
  
  const getIdealSleepHours = () => {
    idealHours = 8;
    return idealHours * 7;
  };
  
  //console.log(getIdealSleepHours())
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours === idealSleepHours) {
      console.log('The user got the perfect amount of sleep.');
    } else if (actualSleepHours > idealSleepHours) {
      console.log('The user got more sleep than needed.');
    } else if (actualSleepHours < idealSleepHours) {
      console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
    }
  }
  
  calculateSleepDebt()
  