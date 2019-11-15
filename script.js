$(document).ready(function(){
 $("#myform").slideUp();
$("#demo").click(function(){
	$("#myform").slideToggle();
});
$("#demo1").click(function(){
   $("#myform").slideUp();
});
});
var item=new Array();

function display()
{
	var shttp=new XMLHttpRequest();
    shttp.onreadystatechange=function(){
		if(this.readyState==4&&this.status==200)
		{
			console.log("data received");
			item=JSON.parse(this.responseText);
			getitems();
		}
	}
     shttp.open("GET","http://localhost:3000/getproduct");
     shttp.setRequestHeader("Content-Type","application/json");
     shttp.send();
}
function getitems()
{
	var text="";
	for(i=0;i<item.length;i++)
	{
		text+="<div style='position:relative' class='row'>";
		if(item[i].quantity==0)
		{
			text+="<div style='";
			if(i!=0)
			{
				text+="margin-top:35px;";
			}
			text+="background-color:rgba(255,255,0,0.6); border-radius:5px; position:absolute; z-index:10; width:100%; height:90px;'><center style='position:absolute;top:50%; left:50%; transform:translate(-50%, -50%); color:red; font-size:28px; font-weight:800'>OUT OF STOCK</center></div>"
		}
		text+="<div class='col-sm-4'style='";
		if(i!=0)
		{
			text+="margin-top:35px;";
		}
		text+="font-size:16; color:#000; height:70px; float:left;'>";
		text+=item[i].itemname+"<br>"+item[i].itemdesc+"<br>"+item[i].price+"<br>"+item[i].quantity+"<br>"+"</div>";
		text+="<div class='col-sm-4' style='";
		if(i!=0)
		{
			text+="margin-top:35px;";
		}
		text+="height:70px; float:right;'><button style='color:#fff; background-color:red; border-color:transparent; border-radius:5px;' onclick=deleteItem("+i;
		text+=")>DELETE</BUTTON><br><BUTTON id='editbu' style='color:#fff; background-color:red; border-color:transparent; border-radius:5px; margin-top:5px;' onclick='editItem("+i+");'>EDIT</button></div>";
		text+="<div class='col-sm-4'style='";
		if(i!=0)
		{
			text+="margin-top:35px;";
		}
		text+="height:70px;'><button id='cart' style='margin-top:15px; background-color:red; color:#fff; width:140px; border-radius:5px; border-color:transparent;' onclick='addtocart("+i+");'>";
		text+="<span class='glyphicon glyphicon-shopping-cart'></span>ADD TO CART</button></div></div>"
	}
	document.getElementById("div1").innerHTML=text;
	text="";
}

function add()
{
	var added={};
	added.itemname=document.getElementById("itemname").value;
    added.itemdesc=document.getElementById("itemdesc").value;
    added.price=document.getElementById("price").value;
    added.quantity=document.getElementById("quantity").value;

    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
	if(this.readyState==4&&this.status==200)
	{
		console.log(this.responseText);
	}
}
// xhttp.open("GET","/test?name=abc&age=123")
xhttp.open("POST","http://localhost:3000/add");
xhttp.setRequestHeader("Content-Type","application/json");
xhttp.send(JSON.stringify(added));
location.reload();
}

function deleteItem(t)
{

}
function editItem(t)
{

}