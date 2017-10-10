var assert = require("assert");
var Basket = require("../models/basket");
var Item = require("../models/item");

describe("Basket", function(){
  var basket;
  var apple;
  var beans;
  var babyMilk;

  beforeEach(function(){
    basket = new Basket();
    apple = new Item("Royal Gala apple", 19, false);
    beans = new Item("Heinz baked beans", 7, true);
    babyMilk = new Item("Generic baby milk", 999, false);
  })

  it("basket starts off empty", function(){
    assert.strictEqual(basket.size(), 0);
  });

  it("basket has 1 item after adding an apple", function(){
    basket.add(apple);
    assert.strictEqual(basket.size(), 1);
  });

  it("basket has 2 items after adding an apple and some beans", function(){
    basket.add(apple);
    basket.add(beans);
    assert.strictEqual(basket.size(), 2);
  });

  it("basket has 1 item after 2 adds then 1 remove", function(){
    basket.add(apple);
    basket.add(beans);
    basket.remove(apple);
    assert.strictEqual(basket.size(), 1);
  });

  it("basket has beans left after 2 adds and 1 remove", function(){
    basket.add(apple);
    basket.add(beans);
    basket.remove(apple);
    assert.strictEqual(basket.itemArray[0], beans);
  });

  it("cost of baby milk is 999 pence", function(){
    assert.strictEqual(babyMilk.price, 999);
  });

  it("shopping basket under £20 has no discount (1)", function(){
    basket.add(babyMilk);
    assert.strictEqual(basket.cost(), 999);
  });

  it("shopping basket under £20 has no discount (2)", function(){
    basket.add(babyMilk);
    basket.add(babyMilk);
    assert.strictEqual(basket.cost(), 1998);
  });

  it("shopping basket over £20 has a 10% discount", function(){
    basket.add(babyMilk);
    basket.add(babyMilk);
    basket.add(babyMilk);
    assert.strictEqual(basket.cost(), 2697);
  });

  it("shopping basket under £20 has 5% loyalty discount", function(){
    basket.add(babyMilk);
    var discountCardWorks = true;
    assert.strictEqual(basket.cost(discountCardWorks), 949);
  });

  it("shopping basket over £20 has a 10% discount and a 5% too", function(){
    basket.add(babyMilk);
    basket.add(babyMilk);
    basket.add(babyMilk);
    var discountCardWorks = true;
    assert.strictEqual(basket.cost(discountCardWorks), 2562);
  });

});
