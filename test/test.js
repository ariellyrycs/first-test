
var chai = chai || require('chai');
var assert = chai.assert;


describe("DOM Tests", function () {
    var el = document.createElement("div");
    el.id = "myDiv";
    el.innerHTML = "Hi there!";
    el.style.background = "#ccc";
    document.body.appendChild(el);

    var myEl = document.getElementById('myDiv');
    it("is in the DOM", function () {
        expect(myEl).to.not.equal(null);
    });

    it("is a child of the body", function () {
        expect(myEl.parentElement).to.equal(document.body);
    });

    it("has the right text", function () {
        expect(myEl.innerHTML).to.equal("Hi there!");
    });

    it("has the right background", function () {
        expect(myEl.style.background).to.equal("rgb(204, 204, 204)");
    });
});



describe('asda', function(){
    describe('#inddsdfdsfexOf()', function(){
        it('should return -1 when the value is not present', function(){
            assert.equal(-1, [1,2,3].indexOf(0));
            assert.equal(-1, [1,2,3].indexOf(0));
        });
        it('shound pass', function(){
            //var sum = new sum(1,2);
//            assert.equal(1, sum(1,2));//Todo manipulate The DOM of this way
            /*var bodyElement = document.getElementsByTagName("body");
            var node = document.createElement('div');
            node.innerHTML = '<label style="color: red">ARIEL IS CRAZY</label>';
            bodyElement[0].appendChild(node);*/
        });
    });
});
/*
var TestUtils = {
    createGrid : function () {

    }
}
TestUtils.createGrid();*/