
// module.exports = Cleaner;

var jv = {
    exports: '1'
};

console.log(JSON.stringify(jv));
jv.exports = 12;
console.log(JSON.stringify(jv));
