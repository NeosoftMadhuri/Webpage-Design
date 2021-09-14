let nameNode=document.getElementById("name");

let errNode1=document.getElementById("err1");

let MobileNode=document.getElementById("mobile");

let errNode2=document.getElementById("err2");

let mailNode=document.getElementById("e-id");

let errNode3=document.getElementById("err3");






function validate1()
{
    errNode1.innerHTML="";
    nameNode.style.border="2px pink solid";
    nameNode.style.backgroundColor='white';
    let name=nameNode.value;
    if(name==="")
    {
        errNode1.innerHTML="<b> Please Enter The Name</b>";
        nameNode.style.border="2px red solid";
        nameNode.style.backgroundColor='pink';
        return false;
    }
    else
    {
        return true;
    }
}


function validate2()
{
    errNode2.innerHTML="";
    MobileNode.style.border="2px pink solid";
    MobileNode.style.backgroundColor='white';
    let Mobile_no=MobileNode.value;
   
    if(Mobile_no==="")
    {
        errNode2.innerHTML="<b> Please Enter The Mobile No</b>";
        MobileNode.style.border="2px red solid";
        MobileNode.style.backgroundColor='pink';
        return false;
    }
    else if(Mobile_no.length<10)
    {
        errNode2.innerHTML="<b>Mobile no should be 10 digit</b>";
        MobileNode.style.border="2px red solid";
        MobileNode.style.backgroundColor='pink';
        return false;
    }
    else {
        return true;
    }
    
}




function validate3()
{
    errNode3.innerHTML="";
    mailNode.style.border="2px pink solid";
    mailNode.style.backgroundColor='White';
    let mailid=mailNode.value;
    let ss=mailid.substring(mailid.indexOf('@')+1);
    if(mailid==="")
    {
        errNode3.innerHTML="<b> Please Enter the Email-id</b>";
        mailNode.style.border="2px red solid";
        mailNode.style.backgroundColor='pink';
        return false;
    }
    else if(!mailid.includes("@")|| ss==='')
    {
        errNode3.innerHTML="<b>invalid email id</b>";
        mailNode.style.border="2px red solid";
        mailNode.style.backgroundColor='pink';
        return false;
    }
    else{

        return true;
    }
    
}

function validateForm()
{
   let str1=validate1();
   let str2=validate2();
   let str3=validate3();
   return(str1 && str2 && str3 );
}

