var title = document.getElementById("title");
var atitle = document.getElementById("atitle");
var filename = document.getElementById("filename");
var background = document.getElementById("background");
var description = document.getElementById("description");
var plus = document.getElementById("plus");

var background1 = document.getElementById("background1");
var title1 = document.getElementById("title1");
var description1 = document.getElementById("description1");

var background2 = document.getElementById("background2");
var title2 = document.getElementById("title2");
var description2 = document.getElementById("description2");

var background3 = document.getElementById("background3");
var title3 = document.getElementById("title3");
var description3 = document.getElementById("description3");



var num = 0;
var num1 = 0;
var num2 = 0;
var num3 = 0;
var num4 = 0;
//expand Menu
function expandMenu(){
	document.getElementById("filename").style.display="block";
	document.getElementById("atitle").style.display="block";
	document.getElementById("describe").style.display="block";
	document.getElementById("color").style.display="inline-block";
	document.getElementById("plus").style.display="inline-block";
	document.getElementById("minus").style.display="inline-block";
	}
	
document.getElementById("menu").addEventListener("click",function()
{
	expandMenu();
});

//document.getElementById("filename").addEventListener("keyup",function(ev){
	//if(ev.keyCode == 13)
	//{
		//background.style.backgroundImage= "url("+filename.value+".jpg)";
	//}
//});

//change background-remember to add ev in here
function changeBG(ev){
	if(ev.keyCode == 13){
		background.style.backgroundImage = "url("+filename.value+")";
	}
}
document.getElementById("filename").addEventListener("keyup",function(ev){
	changeBG(ev);
});

//change title
function changeTitle(ev){
	if(ev.keyCode == 13){
		title.innerText= atitle.value;
		title1.innerText = atitle.value;
		title2.innerText = atitle.value;
		title3.innerText = atitle.value;
		
		if(atitle.value == "horse"){background.style.backgroundImage = "url(imgs/horse.jpg)";
									background1.style.backgroundImage = "url(imgs/horse.jpg)";
									background2.style.backgroundImage = "url(imgs/horse.jpg)";
									background3.style.backgroundImage = "url(imgs/horse.jpg)";
									}
									
		if(atitle.value == "night"){background.style.backgroundImage = "url(imgs/night.jpg)";
									background1.style.backgroundImage = "url(imgs/night.jpg)";
									background2.style.backgroundImage = "url(imgs/night.jpg)";
									background3.style.backgroundImage = "url(imgs/night.jpg)";
									}
									
		if(atitle.value == "mountain"){background.style.backgroundImage = "url(imgs/mountain.jpg)";
									   background1.style.backgroundImage = "url(imgs/mountain.jpg)";
									   background2.style.backgroundImage = "url(imgs/mountain.jpg)";
									   background3.style.backgroundImage = "url(imgs/mountain.jpg)";
									  }
		if(atitle.value.indexOf("epic") > -1){background.style.backgroundImage = "url(imgs/epic.jpg)";
											 background1.style.backgroundImage = "url(imgs/epic.jpg)";
											 background2.style.backgroundImage = "url(imgs/epic.jpg)";
											 background3.style.backgroundImage = "url(imgs/epic.jpg)";
											}
		}
	}
document.getElementById("atitle").addEventListener("keyup",function(ev){
	changeTitle(ev);
	});
// change description
function changeDescription(ev){
	if(ev.keyCode == 13)
	{
		description.innerText = describe.value;	
		description1.innerText = describe.value;
		description2.innerText = describe.value;
		description3.innerText = describe.value;
	}
}
document.getElementById("describe").addEventListener("keyup",function(ev){
	changeDescription(ev);
});
//level 6: change the inner text of other description and title too!


//change color
function changeColor(){
	title.style.color = color.value;
	title1.style.color = color.value;
	title2.style.color = color.value;
	title3.style.color = color.value;
	
	description.style.color = color.value;
	description1.style.color = color.value;
	description2.style.color = color.value;
	description3.style.color = color.value;
		
	}
document.getElementById("color").addEventListener("change",function()
{
	changeColor();
});

// move BG
function moveBG(ev)
{
	if(ev.keyCode == 37)
	{	
		num = num + 10
		background.style.right = num + "px";
		background1.style.right = num + "px";
		background2.style.right = num + "px";
		background3.style.right = num + "px";
		
	};
	if(ev.keyCode == 38)
	{
		num = num + 10
		background.style.bottom = num + "px";
		background1.style.right = num + "px";	
		background2.style.right = num + "px";
		background3.style.right = num + "px";
	};
	
	if(ev.keyCode == 39)
	{
		num = num + 10
		background.style.left= num + "px";
		background1.style.right = num + "px";
		background2.style.right = num + "px";
		background3.style.right = num + "px";
	};
	if(ev.keyCode == 40)
	{
		num = num + 10
		background.style.top = num + "px";
		background1.style.right = num + "px";
		background2.style.right = num + "px";
		background3.style.right = num + "px";
	};
}

filename.addEventListener("keydown",function(ev){
	moveBG(ev);
});


plus.addEventListener("click",function(){
	num1 = num1 + 10;
	background.style.height = num1 + "px";
	background1.style.right = num + "px"; 
	background2.style.right = num + "px";
	background3.style.right = num + "px";
});

minus.addEventListener("click",function(){
	num1 = num1 - 10;
	background.style.height = num1 + "px";
	background1.style.right = num + "px";
	background2.style.right = num + "px";
	background3.style.right = num + "px";
});

//Assign the newly created <div>'s style with the current background <div>'s, title <div> by using something call style.cssText

background1.style.cssText="position: relative; width: 100%;height: 300px;"
background2.style.cssText="position: relative; width: 100%;height: 300px;"
background3.style.cssText="position: relative; width: 100%;height: 300px;"


title1.style.cssText= "position: absolute;left: 10%;top: 10%;font-size: 1.5em;border-bottom: 1px solid grey;"
title2.style.cssText= "position: absolute;left: 10%;top: 10%;font-size: 1.5em;border-bottom: 1px solid grey;"
title3.style.cssText= "position: absolute;left: 10%;top: 10%;font-size: 1.5em;border-bottom: 1px solid grey;"

description1.style.cssText="position: absolute;left: 10%;top: 20%;"
description2.style.cssText="position: absolute;left: 10%;top: 20%;"
description3.style.cssText="position: absolute;left: 10%;top: 20%;"

//Also the same inner text 


