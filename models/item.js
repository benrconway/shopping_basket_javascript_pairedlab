var Item = function(name_string, price_number, bogof_boolean) {
  this.name = name_string;
  this.price = price_number;
  // This is of course an acronym for 'Buy one, get one free'
  this.bogof = bogof_boolean;
}

module.exports = Item;
