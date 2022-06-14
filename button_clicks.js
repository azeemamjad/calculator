

var bt_del=document.getElementById("bt_del");
bt_del.onclick = function()
{
    del();
}

var bt_clear=document.getElementById("bt_clear");
bt_clear.onclick = function()
{
    clear();
}


var bt_1=document.getElementById("bt_1");
bt_1.onclick = function()
{
    button_Click("1")
}

var bt_2=document.getElementById("bt_2");
bt_2.onclick = function()
{
    button_Click("2")
}

var bt_3=document.getElementById("bt_3");
bt_3.onclick = function()
{
    button_Click("3")
}

var bt_4=document.getElementById("bt_4");
bt_4.onclick = function()
{
    button_Click("4")
}


var bt_5=document.getElementById("bt_5");
bt_5.onclick = function()
{
    button_Click("5")
}

var bt_6=document.getElementById("bt_6");
bt_6.onclick = function()
{
    button_Click("6")
}


var bt_7=document.getElementById("bt_7");
bt_7.onclick = function()
{
    button_Click("7")
}


var bt_8=document.getElementById("bt_8");
bt_8.onclick = function()
{
    button_Click("8")
}

var bt_9=document.getElementById("bt_9");
bt_9.onclick = function()
{
    button_Click("9")
}

var bt_0=document.getElementById("bt_0");
bt_0.onclick = function()
{
    button_Click("0")
}


var bt_plus=document.getElementById("bt_plus");
bt_plus.onclick = function()
{
    button_Click("+")
}

var bt_equal=document.getElementById("bt_equal");
bt_equal.onclick = function()
{
    button_Click("=")
}

var bt_dot=document.getElementById("bt_dot");
bt_dot.onclick = function()
{
    button_Click(".")
}


var bt_minus=document.getElementById("bt_minus");
bt_minus.onclick = function()
{
    button_Click("-")
}

var bt_mul=document.getElementById("bt_mul");
bt_mul.onclick = function()
{
    button_Click("*")
}


var bt_div=document.getElementById("bt_div");
bt_div.onclick = function()
{
    button_Click("/")
}

onkeydown=function(event)
{
    k=event.key+"";
    if(k==="0")
    {
        bt_0.click();
    }
    else if(k==="1")
    {
        bt_1.click();
    }
    else if(k==="2")
    {
        bt_2.click();
    }
    else if(k==="3")
    {
        bt_3.click();
    }
    else if(k==="4")
    {
        bt_4.click();
    }
    else if(k==="5")
    {
        bt_5.click();
    }
    else if(k==="6")
    {
        bt_6.click();
    }
    else if(k==="7")
    {
        bt_7.click();
    }
    else if(k==="8")
    {
        bt_8.click();
    }
    else if(k==="9")
    {
        bt_9.click();
    }
    else if(k===".")
    {
        bt_dot.click();
    }
    else if(k==="=")
    {
        bt_equal.click();
    }
    else if(k==="+")
    {
        bt_plus.click();
    }
    else if(k==="-")
    {
        bt_minus.click();
    }
    else if(k==="x")
    {
        bt_mul.click();
    }
    else if(k==="X")
    {
        bt_mul.click();
    }
    else if(k==="*")
    {
        bt_mul.click();
    }
    else if(k==="/")
    {
        bt_div.click();
    }
    else if(k==="Delete")
    {
        bt_del.click();
    }
}



