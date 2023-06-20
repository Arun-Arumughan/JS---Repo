function productName()
{
    var prName=document.getElementById('pname').value;
    var error1=document.getElementById('sp1');
    if (prName.length>5)
    {
        error1.innerHTML='Valid';
        error1.className='text-success';
    }
    else{
        error1.innerHTML='Invalid';
        error1.className='text-danger';
    }
}
function productId()
{
    var prId=document.getElementById('pid').value;
    var error2=document.getElementById('sp2');
    if (prId!='')
    {
        error2.innerHTML='OK';
        error2.className='text-success';
    }
    else{
        error2.innerHTML='please enter Id';
        error2.className='text-danger';
    }
}
function productPrice()
{
    var pPrice=parseInt(document.getElementById('pprice').value);
    var GST=document.getElementById('gst').value=pPrice*(10/100);
    var disCount=document.getElementById('discnt').value=pPrice-(25/100);
    var gst1=parseInt(GST);
    var disCount1=parseInt(disCount);
    var iGst=document.getElementById('Igst').value=pPrice*(5/100);
    var cGst=document.getElementById('cgst').value=pPrice*(5/100);
    var iGst1=parseInt(iGst);
    var cGst1=parseInt(cGst);
}
document.getElementById('tbodyid').innerHTML='<tr><td>'+prName+'</td><td>'+prId+'</td><td>'+pprice+'</td><td>'+gst1+'</td><td>'+disCount1+'</td><td>'+iGst1+'</td><td>'+cGst1+'</td></tr>';