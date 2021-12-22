app= angular.module("k2",[]);
app.controller("kodoku",xuly);
function xuly($scope){
	$scope.tinhtoan = function(){
		if (isNaN($scope.cd) || isNaN($scope.cr) || $scope.cd <= 0 || $scope.cr <= 0) {
			alert("Nhập đúng chiều dài chiều rộng của hình CHỮ NHẬT đi thím")
			return false;
		}
		var d = parseFloat($scope.cd);
		var r = parseFloat($scope.cr);
		$scope.cv = (d+r)*2;
		$scope.dt = d*r;
	}
}