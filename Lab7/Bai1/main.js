app= angular.module("k1",[]);
app.controller("kodoku",xuly);
function xuly($scope){
    $scope.hoten = "Hồ Hoàng Phú";
    $scope.ngaysinh = "16/09/2002";
    $scope.gender = "Nam";
    $scope.photo = "teo.jpg";
    $scope.mark = 8.5;
}