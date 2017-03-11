'use strict';

require("../src/b.js");

describe ("bSpec", function() {

    beforeEach (function() {
        console.log("beforeEach");
    });

    afterEach (function() {
        console.log("afterEach");
    });

    it ("test 1", function () {
        var text = test();
        expect(text).toBeDefined();
        expect(text).toEqual('abcd');
    });
});

