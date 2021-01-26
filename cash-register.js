function checkCashRegister(price, cash, cid) {
  var output = {status: null, change: []};
  var changeDue = cash - price;
  
  //Create maps of denominations
  var valueMap = {'ONE HUNDRED': 100, 'TWENTY': 20, 'TEN': 10, 'FIVE': 5,  'ONE': 1, 'QUARTER': 0.25, 'DIME': 0.1, 'NICKEL': 0.05,'PENNY': 0.01};
  var cidMap = {}
  var totalCash = 0;
  
  //convert cash drawer cid to map
  for(let v of cid)
  {
    cidMap[v[0]] = v[1];
    totalCash += v[1];
  }
  if(changeDue > totalCash)
  {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }
   if(changeDue == totalCash)
  {
    output["status"] = 'CLOSED';
    output["change"] = cid;
    return output;
  }
  for(let value in valueMap)
  {
    let deductible = 0;
    let didAnythingHappen = false;
    while(changeDue >= valueMap[value] && cidMap[value] >= valueMap[value])
    {
      deductible += valueMap[value];
      changeDue -= valueMap[value];
      cidMap[value] -= valueMap[value];
      didAnythingHappen = true;

      changeDue = Math.round(changeDue * 100)/100
    }
    if(didAnythingHappen)
    {
      output.change.push([value, deductible]);
    }
  }

  if(changeDue > 0)
  {
    output["status"] = 'INSUFFICIENT_FUNDS';
    output.change = []
    return output;
  }
  output["status"] = 'OPEN';
  return output;
}
