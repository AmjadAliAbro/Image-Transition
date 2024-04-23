var imgBox = document.getElementsByClassName("img-box")[0];
var imgWrap = document.getElementsByClassName("img-wrap")[0];
var originalImg = document.getElementById("originalImg");
var line = document.getElementById("line");

originalImg.style.width = imgBox.offsetWidth + "px";

var leftSpace = parseFloat(imgBox.offsetLeft);

imgBox.onmousemove = function (e) {
  var boxWidth = e.pageX - leftSpace + "px";
  imgWrap.style.left = boxWidth;
  line.style.left = boxWidth;
};
