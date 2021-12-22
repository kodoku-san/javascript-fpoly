var listImg = [], totalImg = 55, index = 1;
var auto = null;
var listIdBtn = ['btnFirst', 'btnFinal', 'btnPrevious', 'btnNext'];
app= angular.module("ASM2_B1",[]);
app.controller("kodoku",main);

function main($scope){
	load();

	$scope.img = listImg[index];

	$scope.First = function(){
		index = 1;
		mainLoad(0);

		setTimeout(function(){
			mainLoad(index);
		}, randomNumber());

		loadTotalText();
	}
	$scope.Final = function(){
		index = totalImg;

		mainLoad(0);

		setTimeout(function(){
			mainLoad(index);
		}, randomNumber());

		loadTotalText();
	}
	$scope.Next = function(){
		index++;

		if (index > totalImg) index = 1;

		mainLoad(0);

		setTimeout(function(){
			mainLoad(index);
		}, randomNumber());

		loadTotalText();
	}
	$scope.Previous = function(){
		index--;

		if (index < 1) index = totalImg;

		mainLoad(0);

		setTimeout(function(){
			mainLoad(index);
		}, randomNumber());

		loadTotalText();
	}

	$scope.autoLoadImg = function() {
		if (auto == null) {
			disabledButton(listIdBtn, true);
			auto = setInterval(function(){
				$scope.Next();
			}, 2000);
		} else {
			disabledButton(listIdBtn, false);
			clearInterval(auto);
			auto = null;
		}
	}

	function randomNumber(){
		var max = 1000;
		var min = 100;
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	function mainLoad(index){
		document.getElementById('image').src = listImg[index];
	}

	function disabledButton(listIdBtn, bol){
		for (var i = 0; i < listIdBtn.length; i++) {
			document.getElementById(listIdBtn[i]).disabled = bol;		
		}
	}

	function loadTotalText(){
		document.getElementById('totalText').innerHTML = "Ảnh " + index;
	}

	function load(){
		listImg[0] = "img/loading.gif";
		for (var i = 1; i <= totalImg; i++) {
			listImg[i] = "img/ulzzang_kodoku/" + i + ".jpg";
		}
	}
}


