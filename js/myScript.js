function openPage(pageName,elmnt,color) {
    // Hide all elements with class="tabcontent" by default
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
      tablinks[i].style.color="";
    }
    // Makes all toblink colors black when selected
    elmnt.style.color = "black";
    
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
    
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
}
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
  
//  Creates a modal box for Learning Page:

var modals = document.getElementsByClassName('modal');
// Get the button that opens the modal
var btns = document.getElementsByClassName("openmodal");
var spans=document.getElementsByClassName("close");
for(let i=0;i<btns.length;i++){
   btns[i].onclick = function() {
      modals[i].style.display = "block";
   }
}
for(let i=0;i<spans.length;i++){
    spans[i].onclick = function() {
       modals[i].style.display = "none";
    }
 }

//  Creates random color confetti for Subscribe page

var html = '';
var red;
var green;
var blue;
var rgbColor;

for ( var i = 1; i <= 12; i +=1) {
red = Math.floor(Math.random() * 256 );
green = Math.floor(Math.random() * 256 );
blue = Math.floor(Math.random() * 256 );
rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
html += '<div style="background-color:' + rgbColor + '"></div>';
}
document.write(html);
