const showSlide=(n)=>{
  var i=0;
  var j = document.getElementsByClassName("slide");
  if (n > j.length) {index = 1};
  if (n < 1) {index = j.length};
  while(i<j.length){
  	j[i].style.display = "none";
		i++;
  }
  j[index-1].style.display = "block";
  j[index-1].style.margin = "0px auto 0px auto";
};

var index = 3;
// showSlide(index);

// button click-> next image
const next=(n)=>{
  showSlide(index += n);
}

// uncomment setTimeout for automated slideshow
const repeat=()=>{
	showSlide(index);
  index++;
	// setTimeout(repeat,3000);
} 

repeat();