var a;
var cal="";
var num1;
var num2;
var finalans;
var heading=document.querySelectorAll("input")


function one1()
{
    a=1;
    cal=cal.concat(a);
    heading[0].value=cal;
    
}

function two1()
{
    a=2;
   cal= cal.concat(a);
    heading[0].value=cal;
  
}

function three()
{
    a=3;
    cal= cal.concat(a);
     heading[0].value=cal;
  
}


function four()
{
    a=4;
    cal= cal.concat(a);
     heading[0].value=cal;
    
}


function five()
{
    a=5;
    cal= cal.concat(a);
     heading[0].value=cal;
    
}


function six()
{
    a=6;
    cal= cal.concat(a);
     heading[0].value=cal;
    
}


function seven()
{
    a=7;
    cal= cal.concat(a);
     heading[0].value=cal;
    
}

function eight()
{
    a=8;
    cal= cal.concat(a);
     heading[0].value=cal;
    
}

function nine()
{
    a=9;
    cal= cal.concat(a);
     heading[0].value=cal;
    
}


function zero()
{
    a=0;
    cal= cal.concat(a);
     heading[0].value=cal;
    
}



var oper1;
var oper2="";
var t=2;
var t1=2;
function add()
{
    oper1="add";
    a='+';
    cal=cal.concat(a);
    heading[0].value=cal;
    t1=2;
    performOperation();
   
    
}

function mins()
{
    oper1="min";
    a='-';
    cal=cal.concat(a);
    heading[0].value=cal;
    t1=2;
    performOperation();
  
}

function mul()
{
    oper1="mul";
    a='*';
    cal=cal.concat(a);
    heading[0].value=cal;
    t1=2;
    performOperation();
   
}

function div()
{
    oper1="div";
    a='/'
    cal=cal.concat(a);
    heading[0].value=cal;
    t1=2;
    performOperation();
}



function remove1()
{
    var call="";
    for(var i=0;i<=cal.length-2;i++)
    {
        var ch=cal.charAt(i);
            call=call.concat(ch);
    }
    cal=call;
    heading[0].value=cal;
}

var num1;
var num2;
function performOperation()
{
    if(oper2=='add')
    {
        fetchNumbers();
        addoper(num1,num2);
    }
    else if(oper2=='min')
    {
        fetchNumbers();
        minsoper(num1,num2);
    }
    else if(oper2=='mul')
    {
        fetchNumbers();
        muloper(num1,num2);
    }
    else if(oper2=='div')
    {
        fetchNumbers();
        divoper(num1,num2);
        
    }

    oper2=oper1;
}

var finalans=0;
var str1="";
var str2="";


function fetchNumbers()
{
    
    if(finalans==0)
    {
        for(var i=cal.length-t;i>=0;i--)
        {
            var ch=cal.charAt(i);
            if(ch>='0'&&ch<='9')
            {
                str1=str1.concat(ch);
              
            }
            else {

                for(var j=i+1;j>=0;j--)
                {
                    
                    var ch=cal.charAt(j);
                    str2=str2.concat(ch);
                   
                   
                   
                }
                str2=str2.split("").reverse().join().replaceAll(',',"");;
                str1=str1.split("").reverse().join().replaceAll(',',"");;

                num1=parseInt(str1);
                num2=parseInt(str2);
                str1="";
                str2="";
                break;
            }
           
        }
        console.log(num2);
        console.log(num1);
    }
    else{
        

        for(var i=cal.length-t1;i>=0;i--)
        {
            var ch=cal.charAt(i);
              if(ch>='0'&&ch<='9')
              {
                str1=str1.concat(ch);
               
               
              }
              else{
                var index= str1.length-1;
                str1=str1.split("").reverse();
                console.log(str1)
                if(str1[index]>='0'&&str1[index]<='9')
                {
        
                }
                else{
                   str1= str1.pop();
                }
                str1=str1.join().replaceAll(',',"");
                num1=parseInt(str1);
                num2=finalans;
                str1="";
                console.log("after"+num1);
                console.log("after"+num2);
           
                break;
               
              }
        }
       
    }
}



function addoper(num1,num2)
{
    finalans=num1+num2;
}

function minsoper(num1,num2)
{
    finalans=num2-num1;
}

function muloper(num1,num2)
{
    finalans=num1*num2;
}

function divoper(num1,num2)
{
    finalans=finalans/num1;
}
function fialoutput()
{
    t=1;
    t1=1;
    performOperation();
    cal="";
    cal=cal.concat(finalans);
    heading[0].value=cal;
   
   oper1="";
   oper2="";
   
    
}

function clear1()
{
    cal="";
    heading[0].value=cal;
    finalans=0;
    t=2;
    t1=2;

}

