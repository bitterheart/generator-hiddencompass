(function(){
    "use strict";
    describe("simple",function(){
        it("pass",function(){
            expect(true).toEqual(true);
        });
        it("pass",function(){
            expect(true).toEqual(false);
        });
    });
    describe("interactive",function(){
        beforeEach(function(){
            browser.get("index.html");
        });
        it("pass",function(){
            expect(element(by.css("h1")).getText()).toEqual("Hello World");
        });
        it("pass",function(){
            expect(element(by.css("h1")).getText()).toEqual("Goodbye World");
        });
    });
}());
