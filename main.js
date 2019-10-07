$('.carousel').carousel({
  interval: 2000
})
function big(x)
{
x.style.height="1000px";
x.style.width="700px";
}
function small(x)
{
x.style.height="250px";
x.style.width="150px";
}

<!---rating bar--->
function starmark(item){
       var count=item.id[0];
       rating=count;
       var subid=item.id.substring(1);
for(var i=0;i<5;i++)
  {
	if(i<count){
		document.getElementById((i+1)+subid).style.color="orange";
	}
	else{
		document.getElementById((i+1)+subid).style.color="black";
	}
  }	
}

function showRating()
{
	alert("thank you for giving your time");
}
