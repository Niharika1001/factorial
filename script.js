function fact(){
    var num=document.getElementById("num").value;
    if(num=="")
    {
        alert("please enter a number");
        return
    }
 
    if(num<0)
    {
        document.getElementById("demo").innerHTML="Factorial can't be found for negative number";
    }
    else if(num===0||num===1)
    {
        document.getElementById("demo").innerHTML="The factorial of given number is 1";
    }
    else{
           var result=1;
        for(let i=2;i<=num;i++)
        {
        
            result=result*i;
        }
        document.getElementById("demo").innerHTML=`the factorial of given number is ${result}`;
}
console.log(result);
}