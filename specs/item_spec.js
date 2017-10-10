var assert = require("assert");
var Item = require("../models/item");

describe("Item", function(){
  var apple
  var beans

  beforeEach(function(){
    apple = new Item("Royal Gala apple", 19, false);
    beans = new Item("Heinz baked beans", 7, true);
  })

  it("apple is a Royal Gala", function(){
    assert.strictEqual(apple.name, "Royal Gala apple");
  });

  it("apple is 19p", function(){
    assert.strictEqual(apple.price, 19);
  });

  it("apple has no BOGOF", function(){
    assert.strictEqual(apple.bogof, false);
  });

});
