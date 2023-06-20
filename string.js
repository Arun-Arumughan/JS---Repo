// task 1

// var name1="chitra devi";
// console.log(name1.split(' '));

function userName()
{
    var pat=/[A-Za-z][\w][4,15$/;
    var get=document.getElementById('user').value;
    if(pat.test(get))
    {
        alert('user created')
    }
    else{
        alert('user creation unsuccessful')
    }
}
