app = angular.module("ph", []);
app.controller("u", main);

function main($scope){
    $scope.checkValidate = function(){
        if (checkMsv() && 
            checkMsv() && 
            checkEmail() && 
            checkgender() && 
            checkFavor() && 
            checkCountry() && 
            checkNote()) {
                alert("Đăng ký thành công!");
        } else {
            alert("Nhập đúng thông tin đi!");
        }
    }

    function checkMsv(){
        if ($scope.msv == undefined) {
            return false;
        }
        return true;
    }
    function checkHoTen(){
        if ($scope.hoten == undefined) {
            return false;
        }
        return true;
    }
    function checkEmail(){
        if ($scope.email == undefined) {
            return false;
        }
        return true;
    }
    function checkgender(){
        if (!$scope.gender) {
            return false;
        }
        return true;
    }
    function checkFavor(){
        if ((!$scope.read && !$scope.travel && !$scope.music && !$scope.cook && !$scope.other)) {
            return false;
        }
        return true;
    }
    function checkCountry(){
        if (!$scope.country) {
            return false;
        }
        return true;
    }
    function checkNote(){
        if ($scope.note.length > 200) {
            return false;
        }
        return true;
    }
}

