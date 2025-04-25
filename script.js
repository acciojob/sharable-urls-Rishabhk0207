// your code here

let nameSec = document.querySelector("#name");
let yearSec = document.querySelector("#year");
let btn = document.querySelector("#button");
let url = document.querySelector("#url");

const value = url.innerText;

btn.addEventListener("click",()=>{
	if(nameSec.value.trim() === "" && yearSec.value.trim() !== ""){
		url.innerText = `${value}?year=${yearSec.value}`;
	}else if(nameSec.value.trim() !== "" && yearSec.value.trim() === ""){
		url.innerText = `${value}?name=${nameSec.value}`;
	}else{
		url.innerText = `${value}?name=${nameSec.value}&year=${yearSec.value}`;
	}
});


















