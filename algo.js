
var screenString=""
var screen=document.getElementById("screen_1");
var screen_main=document.getElementById("screen_main");
function button_Click(txt)
{
    if(txt==="=")
    {
        dataProcess();
        return;
    }
    if(txt==="+"||
        txt==="-"||
        txt==="*"||
        txt==="/")
    {
        if(screenString==="")
        {
            return
        }
        if(screenString[screenString.length-1]==="+"||
        screenString[screenString.length-1]==="-"||
        screenString[screenString.length-1]==="*"||
        screenString[screenString.length-1]==="/")
        {
            del();
        }
    }
    screenString += txt+"";
    screen.innerHTML=screenString;
    screen_main.scrollTo(screen_main.scrollWidth,screen_main.scrollHeight);
}

function del()
{
    screenString=screenString.substring(0,screenString.length-1);
    document.getElementById("screen_1").innerHTML=screenString;
}

function clear()
{
    screenString="";
    document.getElementById("screen_1").innerHTML=screenString;
}



function dataProcess()
{
    equation=document.getElementById("screen_1").innerHTML.replace("\n","");
    screenString = solve(equation)
    document.getElementById("screen_1").innerHTML=screenString;

}

function solve(y)
{
    var num1=''
    var num2=''
    var op = ''
    var chk = 0
    var chk1 = 0
    for(var i=0;i<y.length;i=i+1)
    {
        if(y[i]<='9' && y[i]>='0' || y[i]===".")
        {
            if (chk===0)
            {
                num1 = num1+ '' + y[i] 
            }
            else
            {
                num2 = num2 + '' + y[i]
            }
        }
        else
        {
            chk=1
            if(chk1===0)
            {
                op = y[i]
                chk1=1
            }
            else
            {
                num1 = opre(num1,op,num2)
                num2=''
                op = y[i]
            }
        }
    }
   return opre(num1,op,num2)
}
function opre(x,op,y)
{
    if (op==='+')
    {
        var dt = parseFloat(x)+parseFloat(y);
        return dt+"";
    }
    else if (op==='-')
    {
        var dt = parseFloat(x)-parseFloat(y);
        return dt+"";
    }
    else if (op==='*')
    {
        var dt = parseFloat(x)*parseFloat(y);
        return dt+"";
    }
    else if (op==='/')
    {
        var dt = parseFloat(x)/parseFloat(y);
        return dt+"";
    }
}