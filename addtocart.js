// var item=[];

// function cartItem()
// {
//     var itemList=document.getElementById('cart').value;
//     item.push(itemList);
//     document.getElementById('cart').value='';
//     printData();
// }

// function printData()
// {
//     var sno=0;
//     var emptystr="";

//     item.forEach(function(value,index) {
//         sno +=1;
//         emptystr+='<tr><td>'+sno+'</td><td>'+value+'</td></tr>';
//     })
//     document.getElementById('tbodyid').innerHTML=emptystr;
// }

// function remove(id)
// {
//     itemList.splice(id,1);
//   printData();
// }emptystr+= '<tr><td>'+sno+'</td><td>'+item+'</td><td><a href="onclick="remove('+index+')">Remove</a></td></tr>';  


// events task
// task 1

// var input=alert('Hello javascript');
// var create=prompt('enter a value');
// document.write(alert(create))

// task 1.1

// var input1=parseInt(prompt('enter a value'));
// var input2=parseInt(prompt('enter a value'));
// var choice=parseInt(prompt('enter a choice'));
// switch (choice)
// {
//     case 1:
//         var total=input1+input2;
//         alert('addition'+total);
//         break;
//     case 2:
//         var total=input1-input2;
//         alert('substraction'+total);
//         break;
//     default:
//         alert('invalid choice');
//         break;            
// }

// task 2

// function add()
// {
//   var pop=document.getElementById('username').value;
//   alert(pop);

// }

// task 3
// function popup(){
// var a=document.getElementById('user1').value;
// var b=document.getElementById('user2').value;

// if(a==b)
// {
//     alert('data are equal');
// }
// else{
//     alert('not equal')
// }
// }

// task 4 
// function validate()
// {
//   let a=document.getElementById('user1').value;
//   let b=document.getElementById('pass').value;
//   if(a=='null'||b=='null'||a==''||b==''){
//     alert('one of your data is empty,Kindly fill it and try again');
//   }
//   else{
//     alert('login success');
//   }
// }

// task 5

function add()
{
    var x=document.getElementById('txt1').value;
    var y=document.getElementById('txt2').value;
    total=(x+y);
    document.getElementById('head').innerHTML='addition:'+ total;
}
function subs()
{
    var x=document.getElementById('txt1').value;
    var y=document.getElementById('txt2').value;
    document.getElementById('head').innerHTML='substraction:'+ (x - y);
}
function multiply()
{
    var x=document.getElementById('txt1').value;
    var y=document.getElementById('txt2').value;
    document.getElementById('head').innerHTML='multiply:'+(x * y);
}
function division()
{
    var x=document.getElementById('txt1').value;
    var y=document.getElementById('txt2').value;
    document.getElementById('head').innerHTML='division:'+(x / y);
}

// task 6

