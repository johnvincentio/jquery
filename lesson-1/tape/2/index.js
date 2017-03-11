
'use strict';

module.exports = Bear;

function Bear(type) {
    this.type = type || 'any';
    console.log("change something");
}
Bear.prototype.growl = function(says) {
    return 'The '+this.type+' bear says '+ (says || 'grrr');
};

