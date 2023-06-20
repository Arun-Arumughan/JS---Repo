// function addproduct()
// {
//     let stockitem=document.getElementById('item').value;
//     document.getElementById('tbodyid').innerHTML='<tr><td>'+stockitem+'</td></tr>';
//     document.getElementById('item').value="";
// }
// function checkId()
// {
//     var employeeId=document.getElementById('empid').value;
//     var span1=document.getElementById('sp1');
//     if(employeeId!="")
//     {
//         span1.innerHTML='OK';
//         span1.className='text-success';
//     }
//     else{
//         span1.innerHTML='Enter a employee id';
//         span1.className='text-danger';
//     }

// }
// function checkUser()
// {
//     var employeeName=document.getElementById('empname').value;
//     var span2=document.getElementById('sp2');
//     var storeData;
//     if (employeeName.length>5)
//     {
//         storeData='valid';
//         span2.className='text-success';
//     }
//     else{
//         storeData='invalid';
//         span2.className='text-danger';
//     }
//     span2.innerHTML=storeData;
// }
// function checkRoll()
// {
//     var employeeRoll=document.getElementById('emproll').value;
//     var span3=document.getElementById('sp3');
//     if (employeeRoll!='')
//     {
//         span3.innerHTML='Ok';
//         span3.className='text-success';
//     }
//     else{
//         span3.innerHTML='please fill the employee roll';
//         span3.className='text-danger';
//     }
// }
// function payRoll()
// {
//     var basicpay=parseInt(document.getElementById('basic').value);
//     var HRA=document.getElementById('hra').value=basicpay*(15/100);
//     var DA=document.getElementById('da').value=basicpay*(10/100);
//     var PF=document.getElementById('pf').value=basicpay*(5/100);
//     hra1=parseInt(HRA);
//     da1=parseInt(DA);
//     pf1=parseInt(PF);
// }


// var counter=document.getElementById('number');

// function increment()
// {
//   let pv=counter.textContent;
//   let uv=parseInt(pv)+1;
//   if(uv>0){
//     counter.style.color='green';
//   }
//   else if(uv<0){
//     counter.style.color='red';
//   }
//   else{
//     counter.style.color='black';
//   }
//   counter.textContent=uv;
// }
// function decrement()
// {
//     let pv=counter.textContent;
//     let uv=parseInt(pv)-1;
//     if(uv<0){
//         counter.style.color='red';
//     }
//     else if(uv>0){
//         counter.style.color='green';
//     }
//     else{
//         counter.style.color='black';
//     }
//     counter.textContent=uv;
// }
// function reset()
// {
//     let counterValue=0;
//     document.getElementById('number').textContent=counterValue;
// }


// dom manipulation task 1

// let create=document.createElement('p');
// let login=document.createTextNode('Login page');
// let inp=document.createElement('input');
// let button=document.createElement('button');
// let click=document.createTextNode('click');
// button.appendChild(click);
// create.appendChild(login);
// create.appendChild(inp);
// create.appendChild(button);
// document.body.appendChild(create);

// dom taskk 2

