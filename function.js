//   var empName=' Arun';
//   function printData()
//   {
//       console.log('innerFunction'+empName);
//     }  
//     printData();
// // //  console.log('outerFunction'+empName);
// // //  function getData()
// // //  {
// // //      console.log('AnotherFunction'+empName);
// // //  }
// // //  getData();


// // // function f1()
// // // {
// // //     var empName='Arun';
// // //     console.log('My Name is:'+empName);
// // // }
// // // f1();
// // // var data={
// // //     stuName:"Arun",
// // //     Age:21,
// // //     Degree:'MBA'
// // // };
// // // console.log(data);
// // // console.log(data.stuName);
// // // console.log(data[Age]);
// // var a=10;

// // // var a=20;
// // // var b=100;
// // // console.log(a%b);
// //  var fv=10;
// //  var sv='10';
// //  console.log(fv+sv);
// //  console.log(fv==sv);
// //  console.log(fv===sv);
// // var a=100;
// // var b='200';
// // console.log(a!=b);
// // console.log(a!==b);
// // var a=10;
// // var b=20;
// // var temp;
// // temp=a;
// // console.log(a=b);
// // console.log(b=temp);
// // var a='java';
// // a+='script';
// // console.log(a);
// // a=a+'script';
// // var userName=prompt('Enter a username');
// // var password=prompt('Enter a password');
// // console.log(userName==='kgisl'||(password==='pass@123'));
// // var a=10;
// // var b=20;
// // console.log(a>b);
// // console.log(!(a>b));


// var age=parseInt(prompt('Enter a age'));
// var result=(age>=18)?'Eligible to vote':'Not eligible to vote';
// console.log(result);
// var a=10;
// var b=25;
// console.log(a&b);
// console.log(a|b);
// console.log(!a);
// alert(5*7);
// alert(13%7);
// var x=10;
// var y=10;
// console.log(x=x+y);
// console.log(x+y);
// var data={
//     stuName:'Arun',
//     age:21,
//     degree:'MSC',
//     address:{
//         street:'Nagar',
//         pin:'641402',
//     }

// };
// console.log(data.address.street);
// var x=10;
// var y=10;
// console.log(x=x+y);
// console.log(x+=y);


// document.write('1.Add<br>2.sub');
// var input1=parseInt(prompt('Enter a value'));
// var input2=parseInt(prompt('Enter a value'));
// var choice=parseInt(prompt('Enter a choice'));
// switch(choice)
// {
//     case 1:
//         var total=input1+input2;
//         alert('Addition:'+total);
//         break;
//         case 2:
//         var total=input1-input2;
//         alert('Substraction:'+total);
//         break;
//         case 3:
//         var total=input1*input2;
//         alert('mutiply:'+total);
//         break;
//         case 4:
//         var total=input1/input2;
//         alert('division:'+total);
//         break;
//         case 5:
//         var total=input1%input2;
//         alert('modulus:'+total);
//         break;
//         case 6:
//         var total=input1==input2;
//         alert('equal:'+total);
//         break;
//         case 7:
//         var total=input1>=input2;
//         alert('greaterthan:'+total);
//         break;
//         case 8:
//         var total=input1<=input2;
//         alert('lessthan:'+total);
//         break;
//         case 9:
//         var total=input1!=input2;
//         alert('notequal:'+total);
//         break;
//         default:
//         alert('Invalid choice');
//         break;
// }

// task1
function greet()
{
    return "Hello! Have a nice day";
}
console.log(greet());
