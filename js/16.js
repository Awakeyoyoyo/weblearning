/*
事件
js-->交互 人可以操作页面
js---->事件驱动的方式

用户->操作html元素->产生一个事件->
事件主动调用设定 方法 函数
事件源：产生事件的地方
事件的类型：点击 键盘
事件对象：记录好 信息
事情的处理程序:函数

注册：把以后会发生的事
两种方式
1.html的属性：
属性名：on+事件名字
（onclick）
属性值：方法
    直接html设定
    通过js的对象来设定
2.通过调用系统提供的方法 
div1.addEventListener(事件名,函数名,事件处理方式（冒泡捕获）布尔值)
false-》冒牌 true捕获
*/
// var num=0;
// function add(){
//    div1.innerText=num++;
// }
// var div1=document.getElementById("div1");
// div1.onclick=add;
// div1.addEventListener("click",add,false);





// --------------------------------------------
// var div1 =document.getElementById("div1");
// div1.addEventListener("click",add);
// 时间对象 event：提高了事件的详细信息
// 具体发生事件的元素，鼠标位置、点击状态、键盘按键等
// function add(event){
//     console.log(event);
// }

// ---------捕获和冒泡
//// div1.addEventListener("click",add,false);
// false->冒泡节点执行
// true->捕获阶段执行

// 捕获：html->body->div1->div2 -> 冒泡->div1->body->hmtl
var div1=document.getElementById("div1");
var div2=document.getElementById("div2");
div1.addEventListener("click",div1Click);
div2.addEventListener("click",div2Click);
div1.addEventListener("click",div1ClickT,true);
div2.addEventListener("click",div2ClickT,true);
function div1Click(){
    console.log("冒泡阶段div1 click")
}
function div2Click(){
    console.log("冒泡阶段div2 click")
}

function div1ClickT(){
    console.log("捕获阶段div1 click")
}
function div2ClickT(){
    console.log("捕获阶段div2 click")
}