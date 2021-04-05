// Code your solution in this file!
 
const returnFirstTwoDrivers = function(aDriver=[]){
      return aDriver.slice(0,2);
};

const returnLastTwoDrivers = function(aDriver=[]){
    return aDriver.slice(-2);
};

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];




const createFareMultiplier = function(number1){
    return function(number2){return  number1 * number2};
};

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3);

const  selectDifferentDrivers = function (aDrivers, nfunction){
    return nfunction(aDrivers)
};
