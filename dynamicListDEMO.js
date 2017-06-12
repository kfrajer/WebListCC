var INPUTSTR="Type text";

var sec1Div;
var sec2Div;
var sec3Div;

var inDiv;
var bAdd;
var inItem;



function setup() {
  createCanvas(100, 100);

  sec1Div=createDiv('');  //Input
  createElement('hr');
  createElement('br');
  createElement('br');
  sec2Div=createDiv('');  //List
  createElement('hr');
  sec3Div=createDiv('');  //Table

  inItem=createInput(INPUTSTR);
  inItem.parent(sec1Div);
  bAdd=createButton("Add");
  bAdd.parent(sec1Div);
  bAdd.mousePressed(addNewItem);

  var listPtr=createElement('ol', 'Current List');
  listPtr.parent(sec2Div);
  listPtr.id('listPointer');

  var tablePtr=createElement('table', '<tr><th>ID</th><th>Item</th><th>Description</th></tr>');
  tablePtr.parent(sec3Div);
  tablePtr.id('tablePointer');
  //tablePtr.onclick("tableclick(event)");
  //tablePtr.mouseClicked(tableclick);
}

function draw() {
  background(150, 0, 150);
}


function addNewItem() {

  if (inItem.value()!=INPUTSTR) {

    createP(inItem.value(), sec2Div);

    //Add an item to a list    
    var pp = select('#listPointer');
    pp.html(pp.html()+"<li>"+inItem.value()+"</li>");
    //createButton('rm');

    //Add an item to a table
    var table = select('#tablePointer');
    console.log("Content table " + table.html());
    if (table.html=='') {
      //table.html("<tr><th>ID</th><th>Item</th><th>Description</th></tr>");
    }
    var extra = "<tr id="+frameCount+"><td>"+inItem.value()+"</td><td>"+frameCount+"</td><td>"+inItem.value()+"</td>";
    extra= extra+"<td> <input type='button' class='deleteDep' value='Rm' onclick='deleteRow("+frameCount+")'/></td>"+"</tr>";
    table.html(table.html()+extra);

    if (frameCount>1500) {
      //table.deleteRow(0);
    }

    //Clear input fields
    inItem.value(INPUTSTR);
  }
}

//https://stackoverflow.com/questions/13241005/add-delete-row-from-a-table
function deleteRow(id) {
  $("#" + id).remove();
}