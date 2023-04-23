var qrcode = document.getElementById("qrcode");
var website = document.getElementById("website");
var darkSpace = document.getElementById("darkSpace");
var lightSpace = document.getElementById("lightSpace");
var size = document.getElementById("size");

new QRCode(document.getElementById("qrcode"), "https://www.linkedin.com/in/gorkem-tandogan-5408a5183/");

$("#generate").click(function(){
    qrcode.innerHTML = "";

    if(website.value === ""){
        website.value = "https://www.linkedin.com/in/gorkem-tandogan-5408a5183/";
    }
      
        new QRCode(qrcode, {
            text: website.value,
            width: size.value,
            height: size.value,
            colorDark: darkSpace.value,
            colorLight: lightSpace.value,
            correctLevel : QRCode.CorrectLevel.H
        });
});

/*var qrcode = new QRCode(document.getElementById("qrcode"), {
	text: "http://jindo.dev.naver.com/collie",
	width: 128,
	height: 128,
	colorDark : "#000000",
	colorLight : "#ffffff",
	correctLevel : QRCode.CorrectLevel.H
});

function generateQRCode(value){
    if(qrcode === undefined){
        qrcode = new QRCode(document.getElementById("qrcode"), value);
    }else{
        qrcode.clear();
        qrcode.makeCode(value);
    }
}


$("#generate").click(function(){
    var value = document.getElementById("website").value;
    var color = document.getElementById("color").value;
    alert(color);
    generateQRCode(value);
});

*/