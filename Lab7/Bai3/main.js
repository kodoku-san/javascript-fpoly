app= angular.module("k3",[]);
app.controller("kodoku",xuly);
function xuly($scope){
	$scope.nhapsp = function(){
		if (($scope.maudo || $scope.mauden || $scope.mautrang) && 
			$scope.tinhtrang && 
			($scope.nsx && $scope.nsx!=0) && 
			(!isNaN($scope.slsp) && ($scope.slsp<=100 && $scope.slsp>=1)) && 
			($scope.nsp != undefined)) {
			alert("Success! Nhập thành công SP: " + $scope.nsp);
		} else {
			alert("Nhập cho đúng mẫu đi thím! Có hướng dẫn kìa")
		}
	}	
}