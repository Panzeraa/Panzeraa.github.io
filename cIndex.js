var btnp = document.getElementById('btnprev');
var btnn = document.getElementById('btnnext');
var imgEr, lbImg;
var nImg = 0;

// btnp.addEventListener('click', updateImg(1));
// btnp.addEventListener('click', updateImg(2));

function updateImg(i) {
imgEr = document.getElementById('imgEr');
lbImg = document.getElementById('image1');
// console.log(lbImg);
// imgEr.style.position = "relative";
// console.log(i);
// console.log(imgEr);
// console.log("avant :" + nImg);

if(i == 1){
	if (nImg == 0) {
		nImg = 2;	
	}
	else{
		nImg = nImg-1;
	}
	
}

else if(i == 2){
	nImg = (nImg+1)%3;	
}

switch (Math.abs(nImg)) {
	case 0:
	imgEr.setAttribute("src", "res/image/ER4_1.png");
	lbImg.innerHTML = '1/3';
	break;
	case 1:
	imgEr.setAttribute("src", "res/image/ER4_2.png");
	lbImg.innerHTML = '2/3';
	// imgEr.style.left = "0px";
	break;
	case 2:
	imgEr.setAttribute("src", "res/image/ER4_3.png");
	lbImg.innerHTML = '3/3';
	break;
	default:
	imgEr.setAttribute("src", "res/image/ER4_3.png");
	break;
}

// console.log("après :" + nImg);
}