var myImage= document.querySelector('img');
var msg = document.getElementById("message"); 
        var button = document.getElementById("button"); 
        var textBox = document.getElementById("textbox"); 
        textBox.style.display = 'none';
        // This event is fired when button is clicked 
        button.addEventListener("click", function () { 
           
          textBox.style.display = '';
            var str = textBox.value; 
            console.log(str); 
            msg.innerHTML += str; 
        }); 
myImage.onclick=function() {
var mySrc= myImage.getAttribute ('src');
if (mySrc==='images/firefox-icon.png'){
    myImage.setAttribute('src','images/firefox2.png');

}
else{
    myImage.setAttribute('src','images/firefox-icon.png');
}
}