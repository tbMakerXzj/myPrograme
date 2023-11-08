function Graph(v) {
  this.vertices = v;
  this.edges = 0;
  this.adj = [];
  for (var i = 0; i < this.vertices; i++) {
    this.adj[i] = [];
    this.adj[i].push("");
  }
  this.addEdge = addEdge;
  this.showGraph = showGraph;
  this.dfs = dfs;
  this.bfs = bfs;
  this.marked = [];
  for (var i = 0; i < this.vertices; i++) {
    this.marked[i] = false;
  }
}

function addEdge(v, w) {
  this.adj[v].push(w);
  this.adj[w].push(v);
  this.edges++;
}

function showGraph() {
  for (var i = 0; i < this.vertices; i++) {
    console.log(i + " -> ");
    for (var j = 0; j < this.adj[i].length; j++) {
      console.log(this.adj[i][j]);
    }
  }
}

function dfs(v) {
  this.marked[v] = true;
  if (this.adj[v] !== undefined) {
    console.log(v);
  }
  for (var w in this.adj[v]) {
    if (!this.marked[w]) {
      this.dfs(w);
    }
  }
}

function bfs(s) {
  var queue = [];
  this.marked[s] = true;
  queue.push(s);
  console.log(1111, queue);
  while (queue.length) {
    var v = queue.shift();
    if (this.adj[v] !== undefined) {
      console.log(v);
    }
    for (var w in this.adj[v]) {
      if (!this.marked[w]) {
        this.marked[w] = true;
        queue.push(w);
      }
    }
  }
}

var graph = new Graph(5);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
// graph.showGraph();
// graph.dfs(0);
graph.bfs(0);
