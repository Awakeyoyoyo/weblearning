// alert("hello world1");
// console.log("xx");
// 语法=。=
/*
  区分大小写
  行区分 结尾加分号;
  调试： 
  输出 
  alert
  控制台输出
  console.log(“xx”)
*/ 
// ----------------------------------------------------------

// 函数：代码的服用
// function 名字(参数){
//     内容
// }
// 作用域：可访问变量的集合

/*
闭包
实现变量的私有化
两种方式
*/

// 一一一

// function add(){
//     var count=0;
//     plus=function(){
//         count++;
//         console.log("conut="+ count);
//     }
// }

// 二二二
// 标准闭包

var plus=(function(){
      var count=0;
      return function(){
        count++;
        console.log("conut="+count);
    }
})();
plus();
plus();