var listImg = [], totalImg = 4, index = 1;
app= angular.module("ph",[]);
app.controller("u",main);

function main($scope){
	for (var i = 1; i <= totalImg; i++) {
		listImg[i] = "img/" + i + ".jpg";
	}

	$scope.img = listImg[index];

	$scope.First = function(){
		index = 1;

		document.getElementById('image').src = listImg[index];

		document.getElementById('totalText').innerHTML = "Ảnh " + index;
	}
	$scope.Final = function(){
		index = totalImg;

		document.getElementById('image').src = listImg[index];

		document.getElementById('totalText').innerHTML = "Ảnh " + index;
	}
	$scope.Next = function(){
		index++;

		if (index > totalImg) index = 1;

		document.getElementById('image').src = listImg[index];

		document.getElementById('totalText').innerHTML = "Ảnh " + index;
	}
	$scope.Previous = function(){
		index--;

		if (index < 1) index = totalImg;

		document.getElementById('image').src = listImg[index];

		document.getElementById('totalText').innerHTML = "Ảnh " + index;
	}
}


