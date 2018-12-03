/*dom树
    document节点：只有一个
    标签节点 元素节点
    文本节点

    标签节点 元素节点：样子 样式

    1.通过id寻找
    2.标签名字寻找
    3.class寻找

*/ 
/*通过id查找*/
// var div1=document.getElementById("div1");
/*通过标签名 返回数组*/
// var p=document.getElementsByTagName("p");
/*通过calss名 返回数组*/
// var pp=document.getElementsByClassName("txt");
/*创建p标签*/
// var p3=document.createElement("p")
// 创建一个文本节点 并且赋予内容
// var ptxt=document.createTextNode("哈哈哈哈")
//给p标签 添加子的文本节点
// p3.appendChild(ptxt)
//给div添加p标签
// div1.appendChild(p3)



//对节点的属性 内容进行操作
//html定义好的属性 . 
var img1=document.getElementById("img1");
//class 
// img1.className=

// style
// img1.style.display="none"
//获取属性 
// img1.getAttribute(dat)

//修改文本内容
var p1=document.getElementById("p1");
p1.innerHTML="hahaahahahah"//里面可以加标签
p1.textContent="asdasdada"//添加纯文本
