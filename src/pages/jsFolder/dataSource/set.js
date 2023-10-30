function set() {
  this.dataStore = [];
  this.add = add;
  this.remove = remove;
  this.size = size;
  this.show = show;
  this.contain = contain;
  this.union = union;
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
  return this.dataStore.indexOf(data) !== -1;
}

function union(set2) {
  var tempSet = new set();
  var tempArr = this.dataStore.concat(set2.dataStore);
  for (var i = 0; i < tempArr.length; i++) {
    if (tempSet.contain(tempArr[i]) === false) {
      tempSet.add(tempArr[i]);
    }
  }
  return tempSet;
}
