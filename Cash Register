function checkCashRegister(price, cash, cid) {
    const drawer = [
        { name: 'ONE HUNDRED', val: 100},
        { name: 'TWENTY', val: 20},
        { name: 'TEN', val: 10},
        { name: 'FIVE', val: 5},
        { name: 'ONE', val: 1},
        { name: 'QUARTER', val: 0.25},
        { name: 'DIME', val: 0.1},
        { name: 'NICKEL', val: 0.05},
        { name: 'PENNY', val: 0.01}
    ];

    let status = {status: null, change: []};
    let change = cash - price;

    let registerDrawer = cid.reduce(function(acc, curr) {
        acc.total += curr[1];
        acc[curr[0]] = curr[1];
        return acc;
    }, {total: 0});

    if(registerDrawer.total === change) {
        status.status = 'CLOSED';
        status.change = cid;
        return status;
    }

    if(registerDrawer.total < change) {
        status.status = 'INSUFFICIENT_FUNDS';
        return status;
    }

    let change_arr = drawer.reduce(function(acc, curr) {
        let value = 0;
        while(registerDrawer[curr.name] > 0 && change >= curr.val) {
            change -= curr.val;
            registerDrawer[curr.name] -= curr.val;
            value += curr.val;
            change = Math.round(change * 100) / 100;
        }

        if(value > 0) {
            acc.push([ curr.name, value ]);
        }
        return acc;
    }, []);

    if(change_arr.length < 1 || change > 0) {
        status.status = 'INSUFFICIENT_FUNDS';
        return status;
    }

    status.status = 'OPEN';
    status.change = change_arr;
    return status;
}
