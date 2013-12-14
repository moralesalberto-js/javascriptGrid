test ("can draw a grid from a table", function () {
  var myGrid = new Grid(5,5);
  equal(myGrid.width, 5)
  equal(myGrid.height,5)
})
