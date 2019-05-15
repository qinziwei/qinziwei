console.log('执行la01.js');

let index = 1; //通过变量指定图片
setInterval(function() {
  index = index + 1; //增加值
  //%是取模运算符,表示第一个数整除第二个数的余数
  //也就是余商,比如8%3 2 9%3 0
  index = index % 6;
  console.log(index);
  document.div.style.backgroundImage = 'url("images/' + index + '.jpg")';
}, 1000);