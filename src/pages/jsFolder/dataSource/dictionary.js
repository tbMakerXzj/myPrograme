function Dictionary() {
  this.data = [];
  this.add = add;
  this.find = find;
  this.remove = remove;
  this.showAll = showAll;
  this.count = count;
  this.clear = clear;
}

function add(k, v) {
  this.data[k] = v;
}

function find(k) {
  return this.data[k];
}

function remove(k) {
  delete this.data[k];
}

function showAll() {
  for (var key of Object.keys(this.data).sort()) {
    console.log(key + ": " + this.data[key]);
  }
}

function count() {
  var count = 0;
  for (var {} in this.data) {
    count++;
  }
  return count;
}

function clear() {
  for (var key in this.data) {
    delete this.data[key];
  }
}

var dictionary = new Dictionary();
dictionary.add("one", 1);
dictionary.add("two", 2);
dictionary.add("three", 3);
dictionary.add("four", 4);
dictionary.showAll();
dictionary.remove("two");
dictionary.showAll();
// dictionary.clear();
// dictionary.showAll();
