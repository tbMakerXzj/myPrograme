function Set() {
  this.dataStore = [];
  this.add = add;
  this.remove = remove;
  this.size = size;
  this.show = show;
  this.contain = contain;
  this.union = union;
  this.intersect = intersect;
  this.difference = difference;
}

function add(data) {
  if (this.dataStore.indexOf(data) === -1) {
    this.dataStore.push(data);
    return true;
  } else {
    return false;
  }
}

function remove(data) {
  var pos = this.dataStore.indexOf(data);
  if (pos !== -1) {
    this.dataStore.splice(pos, 1);
    return true;
  } else {
    return false;
  }
}

function size() {
  return this.dataStore.length;
}

function show() {
  return this.dataStore;
}

function contain(data) {
  return this.dataStore.indexOf(data) > -1 ? true : false;
}

// 并集
function union(set2) {
  var tempSet = new Set();
  // var tempArr = this.dataStore.concat(set2.dataStore);
  for (var i = 0; i < this.dataStore.length; i++) {
    tempSet.add(this.dataStore[i]);
  }

  for (var j = 0; j < set2.dataStore.length; j++) {
    if (!tempSet.contain(set2.dataStore[j])) {
      tempSet.dataStore.push(set2.dataStore[j]);
    }
  }
  return tempSet;
}

// 交集
function intersect(set) {
  var tempSet = new Set();
  for (var i = 0; i < this.dataStore.length; i++) {
    if (set.contain(this.dataStore[i])) {
      tempSet.add(this.dataStore[i]);
    }
  }
  return tempSet;
}

// 补集
function difference(set) {
  var tempSet = new Set();
  for (var i = 0; i < this.dataStore.length; i++) {
    if (!set.contain(this.dataStore[i])) {
      tempSet.add(this.dataStore[i]);
    }
  }
  return tempSet;
}

var names = new Set();
names.add("John");
names.add("Bob");
names.add("Mary");
names.add("Boasd");
names.add("Joe");
names.add("Joe1");
// if (names.add("Bob")) {
//   console.log("add success");
// } else {
//   console.log("add failed");
// }
// console.log(names.show());

names.remove("Boasd");
console.log("name", names.show());

var names2 = new Set();
names2.add("Tom");
names2.add("Cat");
names2.add("Mary");
names2.add("Bob");
names2.add("Joe");
console.log("name2", names2.show());
var unionSet = names.union(names2);
console.log("union", unionSet.show(), unionSet.dataStore.length);
var intersectSet = names.intersect(names2);
console.log("intersect", intersectSet.show(), intersectSet.dataStore.length);
var differenceSet = names.difference(names2);
console.log("difference", differenceSet.show(), differenceSet.dataStore.length);
