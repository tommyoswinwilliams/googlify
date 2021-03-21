// Select at least one word in a text elemend (e.g. paragraph, heading, title) and this 
// function will colour each letter in the element in the Google logo colour scheme in order
function googlify() {
  var selection = DocumentApp.getActiveDocument().getSelection();
  var selectedElements = selection.getSelectedElements();
   for (var i = 0; i < selectedElements.length; ++i) {
      var selectedElement = selectedElements[i];
      var text = selectedElement.getElement();
        var letters =  selectedElement.getElement().getText();
        for(var j = 0 ; j< letters.length-1; j++)
        {
            text.setForegroundColor(j, j+1, getGoogleColour(j))
        }
   }
}

function getGoogleColour(position) {
  var googleColourOrder = ['#4285f4', '#ea4335','#fbbc05','#4285f4', '#34a853','#ea4335'];
  while (position > 5) {
    position -= 6
  }
  return googleColourOrder[position];
}
