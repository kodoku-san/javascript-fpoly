var listID = [
  "iphone9-price",
  "samsung-price",
  "nokia-price",
  "sony-price",
  "motorola-price",
  "oppo-price",
  "bphone-price"
];
var checkBox = document.getElementsByName("product");
var listMoney = document.getElementsByClassName("money");

function checkString(str, x) {
  var flag = false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == x) {
      flag = true;
      break;
    }
  }
  return flag;
}

function calculateMoney(id) {
  var price = document.getElementById(id + "-price");
  var amount = document.getElementById(id + "-Nr");
  if (isNaN(amount.value) || checkString(amount.value, ".") || amount.value < 0) {
    alert("Nhập sai rùi nha");
    amount.value = "";
  }
  document.getElementById(id + "-Money").innerHTML =
    amount.value * price.innerHTML;
  sumMoney();
}

function sumMoney() {
  var sum = 0;

  for (let i = 1; i < listMoney.length - 1; i++) {
    sum += Number(listMoney.item(i).innerHTML);
  }
  listMoney.item(listMoney.length - 1).innerHTML = sum;
}

function boxCheck(id) {
  var check = document.getElementById(id);

  if (check.checked) {
    document.getElementById(id + "-Nr").disabled = false;
    calculateMoney(id);
  } else {
    document.getElementById(id + "-Nr").disabled = true;
    document.getElementById(id + "-Money").innerHTML = "";
  }
  sumMoney();
  visibleSumMoney();
}

function visibleSumMoney() {
  var flag = false;
  for (let i = 0; i < checkBox.length; i++) {
    if (checkBox.item(i).checked) {
      flag = true;
      break;
    }
  }
  if (!flag) listMoney.item(listMoney.length - 1).innerHTML = "";
}

function checkAll() {
  if (checkBox.item(0).checked) {
    for (let index = 1; index < checkBox.length; index++) {
      checkBox.item(index).checked = true;
      boxCheck(checkBox.item(index).getAttribute("id"));
    }
  } else {
    for (let index = 1; index < checkBox.length; index++) {
      checkBox.item(index).checked = false;
      boxCheck(checkBox.item(index).getAttribute("id"));
    }
    listMoney.item(listMoney.length - 1).innerHTML = "";
  }
}

function checkFilterUnder300(id) {
  var element = document.getElementById(id).innerHTML;
  if (element >= 0 && element <= 300) return true;
  return false;
}

function checkFilterUnder600(id) {
  var element = document.getElementById(id).innerHTML;
  if (element >= 300 && element <= 600) return true;
  return false;
}

function checkFilterOver600(id) {
  var element = document.getElementById(id).innerHTML;
  if (element > 600) return true;
  return false;
}

function filter() {
  var a = document.getElementById("option");

  if (a.options[a.selectedIndex].value == 300) {
    for (let i = 0; i < listID.length; i++) {
      if (checkFilterUnder300(listID[i]))
        document.getElementById("row" + (i + 1)).style.display = "table-row";
      else {
        document.getElementById("row" + (i + 1)).style.display = "none";
        // document.getElementById(
        //   listID[i].substring(0, listID[i].length - 6)
        // ).checked = false;
        boxCheck(listID[i].substring(0, listID[i].length - 6));
      }
    }
  }
  if (a.options[a.selectedIndex].value == 600) {
    for (let i = 0; i < listID.length; i++) {
      if (checkFilterUnder600(listID[i]))
        document.getElementById("row" + (i + 1)).style.display = "table-row";
      else {
        document.getElementById("row" + (i + 1)).style.display = "none";
        // document.getElementById(
        //   listID[i].substring(0, listID[i].length - 6)
        // ).checked = false;
        boxCheck(listID[i].substring(0, listID[i].length - 6));
      }
    }
  }
  if (a.options[a.selectedIndex].value == 900) {
    for (let i = 0; i < listID.length; i++) {
      if (checkFilterOver600(listID[i]))
        document.getElementById("row" + (i + 1)).style.display = "table-row";
      else {
        document.getElementById("row" + (i + 1)).style.display = "none";
        boxCheck(listID[i].substring(0, listID[i].length - 6));
      }
    }
  }
  if (a.options[a.selectedIndex].value == "all") {
    for (let i = 0; i < listID.length; i++) {
      document.getElementById("row" + (i + 1)).style.display = "table-row";
    }
  }
}
