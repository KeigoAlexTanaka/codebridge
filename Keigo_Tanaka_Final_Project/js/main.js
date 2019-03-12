// modal
var modalBG = document.getElementById('modal-bg');
var thumb = document.getElementById('thumb01');
// check if modal exists on page
if (document.getElementById("img01")){
	var modalImg = document.getElementById("img01");
	modalImg.src = "../images/iphone.png";
	const open = () => modalBG.style.display = ('block');
	const close = () => modalBG.style.display = ('none');
	thumb.onclick = function(){open()};
	modalBG.onclick = function(){close()};
}

// contact form
var message=()=>{
// will check for empty forms
	if (!document.getElementById("name").value||!document.getElementById("email").value||!document.getElementById("msg").value){
		alert(`Please enter all values.`)
	}
// thank user 
	else {
	  alert(`Thanks ${document.getElementById("name").value}, our intern will be in touch shortly!`);
	}
}