let btn=document.getElementById("button");
function changeColor(){
	
	const randomColor=Math.floor(Math.random()*16777215).toString(16);
  
  let colorelement= document.getElementById("canvas");
  colorelement.style.backgroundColor="#" + randomColor;

}
btn.addEventListener("click",changeColor);