/*setInterval(
    ()=>console.log('\n hello  every  2  seconds \n'),
    2*1000
)*/

var n=0;
const fun=setInterval(()=>
{
    console.log('helo world');
    n++;
    if(n===5)
    {
    console.log('DONE...');
    clearInterval(fun);
}

},1000);
     


