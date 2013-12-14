
var Grid = function(width, height, container) {
  this.width = width;
  this.height = height;
  this.container = container;

  this.draw = function() {
    var table = $('<table></table>');
    for (var row=0; row < this.height; row++) {
      var newRow = $('<tr id="row_'+row+'"></tr>');
      for (var col=0; col < this.width; col++) {
        newRow.append($('<td id="cell_'+col+'_'+row+'"></td>'));
      };
      table.append(newRow);
    };
    $(container).html("");
    $(container).append(table);
  };

};

$(document).ready( function() {
  myGrid = new Grid(10,10, "#container");
  myGrid.draw();

});
