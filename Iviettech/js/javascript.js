var images= []
images [0]="showimages01.jpg";
images [1]="showimages02.jpg";
var i=0;

var contenthv= []
contenthv[0] =document.getElementById("hocvien1");
contenthv[1] =document.getElementById("hocvien2");
contenthv[2] =document.getElementById("hocvien3");
contenthv[3] =document.getElementById("hocvien4");
contenthv[4] =document.getElementById("hocvien5");
contenthv[5] =document.getElementById("hocvien6");
var j=0;

function prev (){
  if (i > 0){
    i--;
  }
  else{
    i=images.length-1;
  }
  slideshow.src="images/"+images[i];
}

function next (){
  if (i < images.length-1){
    i++;
  }
  else{
    i=0;
  }
  slideshow.src="images/"+images[i];
}

function change_slide (){
  var slide= document.getElementById("slideshow");
  slide.src="images/"+images[i];
  if (i < images.length-1){
      i++;
  }
  else{
    i=0;
  }
  setTimeout("change_slide ()", 6000); 
}

function change_content (){
  if (j < contenthv.length-1){
    j++;
  }
  else{
    j=0;
  }
  for (var n=0; n < contenthv.length; n++){
    if(j==n){
      document.getElementById("hocvien"+(n+1)).style.display='block';
    }
    else{
      document.getElementById("hocvien"+(n+1)).style.display='none';
    }
  }
  setTimeout("change_content ()",5000);
}



function hocvien1 (){
  var a=1;
  for (var n=1; n<=6; n++){
    if(a==n){
      document.getElementById("hocvien"+n).style.display='block';
    }
    else{
      document.getElementById("hocvien"+n).style.display='none';
    }
  }
}

function hocvien2 (){
  var a=2;
  for (var n=1; n<=6; n++){
    if(a==n){
      document.getElementById("hocvien"+n).style.display='block';
    }
    else{
      document.getElementById("hocvien"+n).style.display='none';
    }
  }
}

function hocvien3 (){
  var a=3;
  for (var n=1; n<=6; n++){
    if(a==n){
      document.getElementById("hocvien"+n).style.display='block';
    }
    else{
      document.getElementById("hocvien"+n).style.display='none';
    }
  }
}

function hocvien4 (){
  var a=4;
  for (var n=1; n<=6; n++){
    if(a==n){
      document.getElementById("hocvien"+n).style.display='block';
    }
    else{
      document.getElementById("hocvien"+n).style.display='none';
    }
  }
}

function hocvien5 (){
  var a=5;
  for (var n=1; n<=6; n++){
    if(a==n){
      document.getElementById("hocvien"+n).style.display='block';
    }
    else{
      document.getElementById("hocvien"+n).style.display='none';
    }
  }
}

function hocvien6 (){
  var a=6;
  for (var n=1; n<=6; n++){
    if(a==n){
      document.getElementById("hocvien"+n).style.display='block';
    }
    else{
      document.getElementById("hocvien"+n).style.display='none';
    }
  }
}

window.onload= function(){
  change_slide ();
  change_content ();
}