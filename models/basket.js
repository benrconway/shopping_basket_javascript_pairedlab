var Basket = function() {
  this.itemArray = [];
}

Basket.prototype.size = function () {
  return this.itemArray.length;
};

Basket.prototype.add = function (item) {
  this.itemArray.push(item);
};

Basket.prototype.remove = function (item) {
  this.itemArray.splice(this.itemArray.indexOf(item),1);
};

Basket.prototype.cost = function (discountCardBoolean) {
  var result = 0;
  // var bogofArray = this.calculateBogofArray();
  for (var item of this.itemArray) {
    // Boolean here to deal with the bogof status? {
    result += item.price;
    // }
  }
  if (result>=2000) {
    result *= 0.9;
    result = Math.round(result);
  }
  if (discountCardBoolean === true) {
    result *= 0.95;
    result = Math.round(result);
  }
  return result;
};

module.exports = Basket;
