// inline 1
function rating(aDriver) {
  return aDriver.numberOfLateDeliveries > 5 ? 2 : 1;
}


// inline 2 좀 더 복잡한 경우
function reportLines(aCustomer) {
  const lines = [];
  lines.push(['name', aCustomer.name]);
  gatherCustomerData(lines, aCustomer);
  return lines;
}

function gatherCustomerData(out, aCustomer) {
  // out.push(["name", aCustomer.name]);
  out.push(["location", aCustomer.location]);
}