/* eslint-disable  */
function HashTable() {
  this.table = new Array(137);
  this.value = [];
  this.buildChains = buildChains;
  this.simpleHash = simpleHash;
  this.showDistro = showDistro;
  this.put = put;
  this.put1 = put1;
  this.get = get;
  this.get1 = get1;
}

function buildChains() {
  for (var i = 0; i < this.table.length; i++) {
    this.table[i] = new Array();
  }
}

function simpleHash(data) {
  var total = 0;
  const H = 37;
  for (var i = 0; i < data.length; i++) {
    total += H * total + data.charCodeAt(i);
  }
  return total % this.table.length;
}

function put(data) {
  var pos = this.simpleHash(data);
  this.table[pos] = data;
}

function put1(data) {
  var pos = this.simpleHash(data);
  if (this.table[pos] === undefined) {
    this.table[pos] = data;
    this.value[pos] = data;
  } else {
    while (this.table[pos] !== undefined) {
      pos++;
    }
    this.table[pos] = data;
    this.value[pos] = data;
  }
}

function get(key) {
  return this.table[this.simpleHash(key)];
}

function get1(key) {
  var hash = -1;
  hash = this.simpleHash(key);
  if (hash > -1) {
    for (var i = hash; this.table[hash] !== undefined; i++) {
      return this.value[hash];
    }
  }
  return undefined;
}

function showDistro() {
  for (var i = 0; i < this.table.length; i++) {
    if (this.table[i] !== undefined) {
      console.log(i + ":" + this.table[i]);
    }
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function genStuData(arr) {
  for (var i = 0; i < arr.length; i++) {
    var num = "";
    for (var j = 1; j < 10; j++) {
      num += Math.floor(Math.random() * 10);
    }
    num += getRandomInt(50, 100);
    arr[i] = num;
  }
}

var hb = new HashTable();
var names = ["Joe", "Jim", "Jill", "Jimmy", "Danny"];
for (var i = 0; i < names.length; i++) {
  hb.put(names[i]);
}

// var students = new Array(10);
// genStuData(students);
// for (var i = 0; i < students.length; i++) {
//   hb.put(students[i]);
// }

//  开链法 线性探测法

hb.showDistro();
