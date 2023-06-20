// var userName=prompt('Enter a username');
// var password=prompt('Enter a password');
// if ((userName=='kgisl')&&(password=='pass@123'))
// {
//     alert('valid user');
// }
// else 
// {
//     alert('invalid user');
// }
// var weight=parseInt(prompt('Enter a weight'));
// if (weight<=90)
// {
//     alert('Eligible to waterride')
// }
// else{
//     alert('not eligible to ride')
// }
// var anchoviesPizzaScore = 0;
// var  pepperoniPizzaScore = 4;
// var  hawaiianPizzaScore = 4;
// var  chickenBaconRanchPizzaScore = 6;
// console.log( anchoviesPizzaScore < pepperoniPizzaScore);
// console.log( chickenBaconRanchPizzaScore > hawaiianPizzaScore)
// console.log(hawaiianPizzaScore > pepperoniPizzaScore);
// console.log(pepperoniPizzaScore <= chickenBaconRanchPizzaScore);
// console.log( hawaiianPizzaScore >= pepperoniPizzaScore);

    // for(let i=0; i<=10; i++)
    // {
    //     console.log("js");
    // }
    // for(let i=1; i<=10; i--)
    // {
    //     console.log(i);
    // }
    // let end=10;
    // for(let st=1; st<=end; st++)
    // {
    //     if(st%2==0)
    //     {
    //         console.log(st);
    //     }
        
    // }
    // let e=10;
    // for(let st=1; st<=end; st++)
    // {
    //     if(st%2!==0)
    //     {
    //         console.log(st);
    //     }
        
    // }
    // let close=10;
    // for(let start=1; close>=start; close--)
    
    // {
    //     console.log(close);
    // } 
    // let start=10;
    // for(let close=1; start>=close; start--)
    
    // {
    //     console.log(start);
    // }
    
// var a=3;
// var b=-7;
// var c=2;
// var d=a*b*c;
// if(d<0){
//     console.log("The sign is-");
// }
// else{
//     console.log("The sign is +")
// }
// for(let i=0; i<=15; i++)
// {
//     if(i%2==0)
//     {
//         console.log(i+" is even");
//     }
//     else
//     {
//         console.log(i+" is odd")
//     }
// }


// var num1=prompt('Enter a first number');
// var num2=prompt('Enter a second number');
// if(num1>num2)
// {
//     document.write('num1 is largest');
// }
// else if(num1<num2)
// {
//     document.write('num2 is largest');
// }
// else
// {
//     document.write('num1 an num2 are equal when num1==num2');
// }

// var sum=0;
// for (i=0;i<10;i++)
// {
//     if(i%3==0 || i%5==0)
//     {
//         sum+=i
//     }
   
// }
// document.write(sum)


//  for(var x=1; x<=100; x++)
//  {
//     if(x%3==0)
//     {
//         document.write(x+"Fizz<br>");
//     }
//     else if(x%5==0)
//     {
//         document.write(x+"Buzz<br>");
//     }
//     else{
//         document.write(x+"<br>")
//     }
// }


// function getnationalbird()
// {
//     console.log('peacock');
// }
// getnationalbird();

//  function greet()
// {
//      return 'Hello! Have a nice day';
// }
//  console.log(greet())


//  function number(a,b)
//  {
//      return(a+b)
//  }
//  console.log(number(10,200));

//  function greet(name)
//  {
//      console.log('Hi '+name);
//  }
//  greet('Aravindh kumar')

//  function average(a,b)
//   {
//       return(a+b)/2
//   }
// //  console.log(average(4,2));
//  var a=5;
//  var b=60;
//  function MinutesToSeconds()
//  {
//      console.log(a*b);
//  }
//  MinutesToSeconds()


// var num1=parseInt(prompt('Enter first number'));
// var num2=parseInt(prompt('Enter second number'));
// var num3=parseInt(prompt('Enter third number'));
// function FindLargest()
// {
// if(num1>num2&&num1>num3)
// {
//     largest=num1
// }
// else if(num2>num3)
// {
//     largest=num2
// }
// else{
//     largest=num3
// }
// return + largest
// }
// console.log(FindLargest());

// var side1=50;
// var side2=50;
// var side3=50;
// function FindTriangleType(){
// if (side1==side2&&side2==side3&&side3==side1)
// {
//     console.log('Is equilateral triangle');
// }
// else if (side1==side2&&side2==side3)
// {
//     console.log('Is isoceles triangle');
// }
// else{
//     console.log('scalence triangle')
// }
// }
// FindTriangleType()

// function CheckInRange(num,start,end)
// {
// if(num>=start&&num<=end)
// {
//     console.log(num+'Between the range'+start+'and'+end);
// }
// else{
//     console.log(num+'outside the range'+start+'and'+end);
// }
// }
// CheckInRange(15,11,30)
// CheckInRange(20,34,51)

//  function evalNumber(num1, num2, num3)
//   {
//       if (num3 == "add") {
//           console.log("Sum of " + num1 + " and " + num2 + " is " + (num1 + num2))
//       }
//       else if (num3 == "subtract") {
//           console.log("Difference of " + num1 + " and " + num2 + " is " + (num1 - num2))
//       }
//       else if (num3 == "multiply") {
//           console.log("Product of " + num1 + " and " + num2 + " is " + num1 * num2)
//       }
//       else if (num3 == "divide") {
//           console.log("Divison of " + num1 + " and " + num2 + " is " + num1 / num2)
//       }
//       else if (num3 == "modules") {
//           console.log("Modules of " + num1 + " and " + num2 + " is " + num1 % num2)
//       }
//       else {
//           console.log(num3 == "is an invalid operation")
//       }
//      }
//   evalNumber(20,10, "add")
//   evalNumber(25,10,"subtract")
//   evalNumber(15,2 ,"multiply")
//   evalNumber(40,2 ,"divide")
//   evalNumber(20,2 ,"modules")
//   evalNumber(4,6,"angle")

// task-11
//   function checkLeapYear(year)
//   {
//       if((year%4 == 0)&&(year%100 != 0)||(year%400 == 0))
//       {
//           console.log("Year "+year+" is a leap year");
//       }
//       else
//       {
//           console.log("Year "+year+" is not a leap year");
//       }
//   }
//   checkLeapYear(2000)
//   checkLeapYear(2013)
//   checkLeapYear(2023)

//  function findGrade(name, marks){
//      if(marks >= 90 && marks <= 100){
//          document.write(name+"you have recevied S grade<br>")
//      }
//      else if(marks >= 80 && marks <= 90){
//         document.write(name+"you have recevied A grade<br>")
//      }
//      else if(marks >= 70 && marks <= 80){
//         document.write(name+"you have recevied B grade<br>")
//      }
//      else if(marks >= 60 && marks <= 70){
//         document.write(name+"you have recevied C grade<br>")
//      }
//      else if(marks >= 50 && marks <= 60){
//         document.write(name+"you have recevied D grade<br>")
//      }
//      else if(marks >= 40 && marks <= 50){
//         document.write(name+"you have recevied E grade<br>")
//      }
//      else if(marks >= 0 && marks <= 40){
//         document.write(name+"you have recevied a grade failed ")
//      }
//      else{
//         document.write("Invalid marks "+marks)
//      }
//  }
//  findGrade("A ",91)
//  findGrade("B ",85)
//  findGrade("C ",72)
//  findGrade("D ",63)
//  findGrade("E ",59)
//  findGrade("F ",43)
//  findGrade("G ",25)
//  findGrade("H",100)

// function findDayMonth(month,year)
// {
//     if(month>=12)
//     {
//         console.log('invalid month');
//     }
//     else if(month==2&&year%100!=0)
//     {
//         console.log('The month has 29 days');
//     }
//     else if(month==0&&year%100==0)
//     {
//         console.log('The month has 28 days');
//     }
//     else if(month==4||month==6||month==9||month==11)
//     {
//         console.log('The month has 30 days');
//     }
//      else
//      {
//         console.log('The month has 31 days');
//      }
// }
// findDayMonth(2,2012)

function check()
{
    var num=parseInt(document.getElementById('num').value);
    var opt='<option>select</option>';
    for(let i=0;i<num;i++)
    {
        opt+='<option>'+i+'</option>';
    }
    document.getElementById('sel').innerHTML=opt;
}