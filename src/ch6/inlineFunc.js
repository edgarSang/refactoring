// inline 1
function rating(aDriver) {
  return aDriver.numberOfLateDeliveries > 5 ? 2 : 1;
}


// inline 2 좀 더 복잡한 경우
function reportLines(aCustomer) {
  const lines = [];
  lines.push(['name', aCustomer.name]);
  lines.push(["location", aCustomer.location]);
  return lines;
}