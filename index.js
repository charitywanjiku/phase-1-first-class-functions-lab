// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
  };
  const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
  };
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  const createFareMultiplier = function(multiplier) {
      return function (fare){
          return fare * multiplier;
      }
  }
     const fareDoubler = createFareMultiplier(2);
     console.log (fareDoubler(2));
     createFareMultiplier();
     
      const fareTripler = createFareMultiplier(3);
      console.log (fareTripler(3));
      createFareMultiplier();
      
  const selectDifferentDrivers = function (drivers, returnLastTwoDrivers) {
      return returnLastTwoDrivers(drivers);
  }
