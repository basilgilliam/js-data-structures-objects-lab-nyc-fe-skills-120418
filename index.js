// Write your solution in this file!

const driver = {}

function updateDriverWithKeyAndValue(driver,key,value){
  const driverCopy = {... driver}
  driverCopy[key] = value
  return driverCopy
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key){
  delete.driver
  
}