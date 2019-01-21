/**
 *  Cash Register:
 * 
 *  Design a cash register drawer function 'checkCashRegister()' that accepts
 *  purchase price as the first argument, payment as the second argument, and
 *  cash-in-drawer as the third argument, which is a 2D arrays listing available
 *  currency.
 * 
 *  The 'checkCashRegister()' function should always return an object with a
 *  'status' key and a 'change' key.
 * 
 *  Return '{status: "INSUFFICIENT_FUNDS", change: []}' if cash-in-drawer is less
 *  than change due, or if you cannot return the exact change.
 *  
 *  Return '{status: "CLOSED", change: [...]}' with cash-in-drawer as the value for
 *  the key 'change' if it is equal to the change due.
 * 
 *  Otherwise, return '{status "OPEN", change: [...]}', with the change due in
 *  coins and bills, sorted in highest to lowest order, as the value of the 'change'
 *  key.
 */

var denomination = [
    { name: 'ONE HUNDRED', val: 100.00 },
    { name: 'TWENTY', val: 20.00 },
    { name: 'TEN', val: 10.00 },
    { name: 'FIVE', val: 5.00 },
    { name: 'ONE', val: 1.00 },
    { name: 'QUARTER', val: 0.25 },
    { name: 'DIME', val: 0.10 },
    { name: 'NICKEL', val: 0.05 },
    { name: 'PENNY', val: 0.01 }
  ];
  
  function checkCashRegister(price, cash, cid) {
    let output = { status: null, change: [] };
    let change = cash - price;
  
    let register = cid.reduce(function(acc, curr) {
        acc.total += curr[1];
        acc[curr[0]] = curr[1];
        return acc;
    }, { total: 0 });
  
    if (register.total === change) {
        output.status = 'CLOSED';
        output.change = cid;
        return output;
    }

    if (register.total < change) {
        output.status = 'INSUFFICIENT_FUNDS';
        return output;
    }
  
    // Loop through the denomination array
    let changeArr = denomination.reduce(function(acc, curr) {
        let value = 0;

        // While there is still money of this type in the drawer
        // And while the denomination is larger than the change remaining
        while (register[curr.name] > 0 && change >= curr.val) {
            change -= curr.val;
            register[curr.name] -= curr.val;
            value += curr.val;
  
            change = Math.round(change * 100) / 100;
        }
      
        if (value > 0) {
            acc.push([ curr.name, value ]);
        }
        return acc; 
    }, []); // Initial value of empty array for reduce
  
    if (changeArr.length < 1 || change > 0) {
        output.status = 'INSUFFICIENT_FUNDS';
        return output;
    }
  
    output.status = 'OPEN';
    output.change = changeArr;
    return output;
}

console.log(checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]));


/**
 *  First, create an array of objects with the valu of each denomination of bill or
 *  coin, along with an output object with the status and change keys. Next,
 *  transform the CID array into a drawer object. Then, handle the conditions of
 *  exact change and insufficient funds. Loop through the denomination array and
 *  update the change and values while there is still money of each type in the
 *  drawer and while denomination is larger than the change remaining.
 *  Add this denomination to the accmulator of change array if any of this type was
 *  used. After the loop, change array is a 2D array of the change due, sorted from
 *  highest to lowest denomination.
 *  If there are no elements in change array or you still owe change, return the
 *  output object with a status of INSUFFICIENT_FUNDS. Finally you can give the
 *  correct change. Return the output object with a status of OPEN and change array
 *  asthe value of change.
 */