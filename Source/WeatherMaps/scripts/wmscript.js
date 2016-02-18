/**
 * Created by rapar on 2/17/2016.
 */

function regDirect(){

    document.forms.LogForm.action = "regForm.html";
    document.forms.LogForm.method = "POST";
    document.forms.LogForm.submit();
}

function loginDirect(){
    var uname = document.forms.LogForm.name.value;
    var upswd = document.forms.LogForm.pswd.value;

    if(uname!="admin" || upswd!="admin"){
        alert("Please fill the details correctly to login");
        return false;
    }
    if(uname=="admin" && upswd=="admin") {

        document.forms.LogForm.action = "weatherMaps.html";
        document.forms.LogForm.method = "POST";
        document.forms.LogForm.submit();
    }
}

function regReDirect(){
    var fname = document.forms.RegForm.fname.value;
    var lname = document.forms.RegForm.lname.value;
    var name = document.forms.RegForm.uname.value;
    var pswd = document.forms.RegForm.upswd.value;

    if(fname=="" || fname==null){
        alert("Please fill First name");
        return false;
    }
    if(lname=="" || lname==null){
        alert("Please fill Last name");
        return false;
    }
    if(name=="" || name==null){
        alert("Please fill User name");
        return false;
    }
    if(pswd=="" || pswd==null){
        alert("Please fill password");
        return false;
    }

    document.forms.RegForm.action = "weatherMaps.html";
    document.forms.RegForm.method = "POST";
    document.forms.RegForm.submit();
}
