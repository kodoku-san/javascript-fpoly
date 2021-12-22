app = angular.module("ASM2_B2", []);
app.controller("kodoku", main);

function main($scope){
    $scope.styleInfo = "display: none;";
    $scope.erStyle = 'display: none';
    $scope.styleRes = "";
    $scope.checkValidate = function(){
        if (checkMsv() && 
            checkHoTen() && 
            checkEmail() && 
            checkgender() && 
            checkFavor() && 
            checkCountry() && 
            checkNote()) {
                $scope.hotenInfo = $scope.hoten;
                $scope.msvInfo = $scope.msv;
                $scope.mailInfo = $scope.email;
                $scope.genderInfo = $scope.gender;
                $scope.favorInfo =  getFavor();
                $scope.counInfo = $scope.country;
                $scope.noteInfo = $scope.note;                
                $scope.styleInfo = "";
                $scope.styleRes = "display: none;";
                setTimeout(function(){
                    alert("Đăng ký thành công!");
                }, 1000);
        } else {
            alert("Nhập đúng thông tin theo hướng dẫn kìa bác!");
        }
    }
    function getFavor(){
        var rs = '';
        if ($scope.read) rs += 'Đọc sách, ';
        if ($scope.travel) rs += 'Du lịch, ';
        if ($scope.music) rs += 'Âm nhạc, ';
        if ($scope.cook) rs += 'Nấu ăn, ';
        if ($scope.other) rs += 'Khác';
        rs = (rs+'hohoangphu').replace(', hohoangphu', '').replace('hohoangphu', '');
        return rs;
    }

    function checkMsv(){
        if ($scope.msv == undefined) {
            $scope.erMsv = '';
            return false;
        }
        return true;
    }
    function checkHoTen(){
        if ($scope.hoten == undefined) {
            $scope.erHoTen = '';
            return false;
        }
        return true;
    }
    function checkEmail(){
        if ($scope.email == undefined) {
            $scope.erEmail = '';
            return false;
        }
        return true;
    }
    function checkgender(){
        if (!$scope.gender) {
            $scope.erStyle = '';
            return false;
        }
        return true;
    }
    function checkFavor(){
        if ((!$scope.read && !$scope.travel && !$scope.music && !$scope.cook && !$scope.other)) {
            $scope.erFavor = '';
            return false;
        }
        return true;
    }
    function checkCountry(){
        if (!$scope.country) {
            $scope.erCountry = '';
            return false;
        }
        return true;
    }
    function checkNote(){
        $scope.note = $scope.note || '';
        if ($scope.note.length > 200) {
            $scope.erStyle = '';
            return false;
        }
        return true;
    }
}

