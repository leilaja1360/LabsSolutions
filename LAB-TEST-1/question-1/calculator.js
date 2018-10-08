module.exports.multiplyTwoNumbers=function (x, y) {
    if (isNaN(parseInt(x)) || isNaN(parseInt(y))) {
        throw new Error('wrong value');
    }
    return x * y;
};
module.exports.evenDoubler=function (x) {
    if (isNaN(parseInt(x)) ) {
        throw new Error('wrong value');
    }
    if (x % 2 === 0){
        return x * x;
    }
    else {
        return 0;
    }
};
