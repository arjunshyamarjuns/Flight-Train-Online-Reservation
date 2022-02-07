function loginpg()
{
    var a,b;
    a=document.form2.usernam.value;
    b=document.form2.passwor.value;
    if(a==""||b=="")
        {
            alert("Please enter valid information!");
        }
    else if(a!="abc123@xyz.com" && b!="abc123")
        {
            alert("Wrong data");
        }
    else
        {
            alert("Correct Data");
            alert("Go to Home for further booking");
        }
}