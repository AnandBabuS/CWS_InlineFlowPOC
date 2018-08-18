<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
<style>
    #confirmWindow {
        position: absolute;
        top: 0px;
        left: 400px;
        height: 100px;
        width: 250px;
        display: none;
        z-index: 2;
    }
</style>
</head>
<body>

<button onClick="PopupCenter()">click me</button>

<div id="confirmWindow">
    Are you sure you want to cancel the installation?
    <button onClick="cancelIt()">Yes</button>
    <button style="padding-left: 10px;" onClick="continueIt()">No</button>
</div>

</body>
<script>
var newWindow = null;
var crxUrl = "https://chrome.google.com/webstore/detail/getformsonline/haimhglnogbaajllmgggffgbedjfbcob";
var a, b;
function PopupCenter() {

var cwswindowclosed = false;
newWindow = window.open(crxUrl, '_blank', 'scrollbars=no, width=927, height=612, top=40px, left=60px');

try {
    newWindow.focus();
} catch (e) {}

document.body.style.overflow = 'hidden';

b = document.createElement('div');
b.style.position = 'fixed';
b.style.left = '0';
b.style.top = '0';
b.style.width = '100%';
b.style.height = '100%';
b.style.backgroundColor = '#000000';
b.style.opacity = '0.6';

a = document.createElement('div');
a.style.backgroundImage = 'url(//ak.staticimgfarm.com/images/download/assist_21.gif)';
a.style.width = '285px';
a.style.height = '196px';
a.style.position = 'fixed';
a.style.right = '0px';
a.style.top =  '25px';
a.style.zIndex = 1;
a.style.textAlign = 'center';
a.style.boxSizing = 'border-box';
a.style.fontFamily = '\'Open Sans\',arial,sans-serif';
a.style.fontSize = '25px';
a.style.padding = '55px 0 0 139px';
a.innerHTML = 'Final Step!<br><span style="font-size:12px;margin-top:10px;display:block;line-height: 20px;">Click "ADD TO CHROME"<br> to finish.</span>';

window.addEventListener("mousedown", onMouseDown);
window.addEventListener('resize', onMouseDown);

document.body.appendChild(a);
document.body.appendChild(b);
checkContinuously();
}

function checkContinuously() {
    var c = setInterval(function() {
        if (newWindow.closed) {
            document.getElementById("confirmWindow").style.display = "block";
            cwswindowclosed = true;
            window.removeEventListener("mousedown", onMouseDown);
            window.removeEventListener('resize', onMouseDown);
            c = clearInterval(c);
            document.body.removeChild(a);
        }
    }, 200);
}

function onMouseDown() {
    document.getElementById("confirmWindow").style.display = "block";
    document.body.removeChild(a);
}

function cancelIt () {
    document.body.removeChild(b);
    document.body.style.overflow = 'unset';
    document.getElementById("confirmWindow").style.display = "none";
}

function continueIt() {
    document.getElementById("confirmWindow").style.display = "none";
    if (newWindow.closed) {
        newWindow = window.open(crxUrl, '_blank', 'scrollbars=no, width=927, height=612, top=40px, left=60px');
    } else {
        newWindow.focus(); 
    }
    checkContinuously();
    document.body.appendChild(a);
}
</script>
</html>