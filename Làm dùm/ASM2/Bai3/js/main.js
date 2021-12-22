app = angular.module("ph", []);
app.controller("u", main);

function main($scope) {
    $scope.filterData = 0;
    
    $scope.listRow = [{ name: 'Iphone 12', price: 1682, amount: 0, idProduct: 0, getMoney: function(){ return this.price*this.amount; }, check: 0 },{ name: 'Samsung', price: 382, amount: 0, idProduct: 1, getMoney: function(){ return this.price*this.amount; }, check: 0 },{ name: 'Nokia', price: 155, amount: 0, idProduct: 2, getMoney: function(){ return this.price*this.amount; }, check: 0 },{ name: 'Sony Xperia', price: 106, amount: 0, idProduct: 3, getMoney: function(){ return this.price*this.amount; }, check: 0 },{ name: 'Motorola', price: 41, amount: 0, idProduct: 4, getMoney: function(){ return this.price*this.amount; }, check: 0 },{ name: 'Oppo', price: 191, amount: 0, idProduct: 5, getMoney: function(){ return this.price*this.amount; }, check: 0 },{ name: 'Oppo Zeno9', price: 502, amount: 0, idProduct: 6, getMoney: function(){ return this.price*this.amount; }, check: 0 },{ name: 'bPhone', price: 14, amount: 0, idProduct: 7, getMoney: function(){ return this.price*this.amount; }, check: 0 }];

    $scope.totalMoney = 0;
    
    $scope.checkAll = function(){
    	var checkBox = document.getElementsByName("product");
    	if (checkBox.item(0).checked) {
		    for (var index = 0; index < 8; index++) {
		        if($scope.listRow[index]['check'] == 0) {
                    if (document.getElementById(index)) document.getElementById(index).checked = true;
                    $scope.boxCheck(index);
                }
		    }
	  	} else {
		    for (var index = 0; index < 8; index++) {
		        if($scope.listRow[index]['check']  == 1) {
                    if (document.getElementById(index)) document.getElementById(index).checked = false;
                    $scope.boxCheck(index);
                }
		    }
	  	}
	  	reMath();
    }

    $scope.boxCheck = function(id){
	    if ($scope.listRow[id]['check'] == 0) {
	        if (document.getElementById('amount' + id)) document.getElementById('amount' + id).disabled = false;
            $scope.listRow[id]['check'] = 1;
	        reMath();
	    } else {
	        if (document.getElementById('amount' + id)) {
                document.getElementById('amount' + id).disabled = true;
                document.getElementById('amount' + id).value = 0;
            }
	        $scope.listRow[id]['amount'] = 0;
            $scope.listRow[id]['check'] = 0;
	        reMath();
	    }
    }

    $scope.calculateMoney = function(amount, id){
    	if (isNaN(amount) || amount < 0) {
    		alert('Nhập đúng đi thím ơi!!');
    		document.getElementById('amount' + id).value = 0;
    		$scope.listRow[id]['amount'] = 0;
    		return false;
    	}
    	$scope.listRow[id]['amount'] = amount;
		reMath();
    }

    function reMath(){
    	$scope.totalMoney = 0;
    	for (var i = 0; i < 8; i++) {
	    	$scope.totalMoney += $scope.listRow[i]['price'] * $scope.listRow[i]['amount'];
	    }
    }
}

app.filter('filterTest', function(){
    return function(input, filterData){        
        if(filterData == 1) var output = Under300(input);
        if(filterData == 2) var output = between300And600(input);
        if(filterData == 3) var output = Than600(input);
        if(filterData == 0) var output = allData(input);   

        checkOrNotCheck(input);
        
        return output;
    };
});

function Under300(input) {
    var output = [];
    for (var i = 0; i < input.length; i++) {
        if (input[i]['price'] <= 300) {                                                 
            output.push(input[i]);
        }
    }
    return output;
}

function between300And600(input) {
    var output = [];
    for (var i = 0; i < input.length; i++) {
        if (input[i]['price'] >= 300 && input[i]['price'] <= 600) {
            output.push(input[i]);
        }
    }
    return output;
}

function Than600(input) {
    var output = [];
    for (var i = 0; i < input.length; i++) {
        if (input[i]['price'] > 600) {
            output.push(input[i]);
        }
    }
    return output;
}

function allData(input) {
    var output = [];
    for (var i = 0; i < input.length; i++) {
        output.push(input[i]);
    }
    return output;
}

function checkOrNotCheck(input){
    for (var i = 0; i < input.length; i++) {
        if (input[i]['check'] == 1) {
            if (document.getElementById(i)) document.getElementById(i).checked = true;
            if (document.getElementById('amount' + i)) {
                document.getElementById('amount' + i).disabled = false;
                document.getElementById('amount' + i).value = input[i]['amount'];
            }
        } 
    }
}