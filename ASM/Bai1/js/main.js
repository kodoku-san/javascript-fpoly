var images = ["img/ulzzang/1.jpg", "img/ulzzang/2.jpg", "img/ulzzang/3.jpg", "img/ulzzang/4.jpg", "img/ulzzang/5.jpg", "img/ulzzang/6.jpg", "img/ulzzang/7.jpg", "img/ulzzang/8.jpg", "img/ulzzang/9.jpg", "img/ulzzang/10.jpg", "img/ulzzang/11.jpg", "img/ulzzang/12.jpg", "img/ulzzang/13.jpg", "img/ulzzang/14.jpg", "img/ulzzang/15.jpg", "img/ulzzang/16.jpg", "img/ulzzang/17.jpg", "img/ulzzang/18.jpg", "img/ulzzang/19.jpg", "img/ulzzang/20.jpg", "img/ulzzang/21.jpg", "img/ulzzang/22.jpg", "img/ulzzang/23.jpg", "img/ulzzang/24.jpg", "img/ulzzang/25.jpg", "img/ulzzang/26.jpg", "img/ulzzang/27.jpg", "img/ulzzang/28.jpg", "img/ulzzang/29.jpg", "img/ulzzang/30.jpg", "img/ulzzang/31.jpg", "img/ulzzang/32.jpg", "img/ulzzang/33.jpg", "img/ulzzang/34.jpg", "img/ulzzang/35.jpg", "img/anh/min.jpg", "img/anh/min (2).jpg", "img/anh/min (3).jpg", "img/anh/min (4).jpg", "img/anh/min (5).jpg", "img/anh/min (6).jpg", "img/anh/min (7).jpg", "img/anh/min (8).jpg", "img/anh/min (9).jpg", "img/anh/min (10).jpg", "img/anh/min (11).jpg", "img/anh/min (12).jpg", "img/anh/min (13).jpg", "img/anh/min (14).jpg", "img/anh/min (15).jpg", "img/anh/min (16).jpg", "img/anh/min (17).jpg", "img/anh/min (18).jpg", "img/anh/min (19).jpg", "img/anh/min (20).jpg"];
var imageIndex = 0;

var picIndex = document.getElementById("picIndex");

function updatePicIndex() {
  picIndex.innerHTML = "Ảnh " + (imageIndex + 1) + "/" + images.length;
}

updatePicIndex();

prev.addEventListener("click", function () {
  imageIndex = (imageIndex + images.length - 1) % images.length;
  img.setAttribute("src", images[imageIndex]);
  updatePicIndex();
});

next.addEventListener("click", function () {
  imageIndex = (imageIndex + 1) % images.length;
  img.setAttribute("src", images[imageIndex]);
  updatePicIndex();
});

first.addEventListener("click", function () {
  imageIndex = 0;
  img.setAttribute("src", images[imageIndex]);
  updatePicIndex();
});

final.addEventListener("click", function () {
  imageIndex = images.length -1;
  img.setAttribute("src", images[imageIndex]);
  updatePicIndex();
});
