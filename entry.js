document.getElementById('app').innerHTML = "这是我第一个打包成功的程序";
// 添加
require("./first.js");
// !style-loader!css-loader!是指定loader
require("!style-loader!css-loader!./style.css");
// require("./style.css")