function fahrenheit(){
    var user=parseInt(document.getElementById("hello").value)
    if(user != null){
        result=user*9;
        result=result/5;
        result=result+32;
        document.getElementById("convert").innerText=result;
        if(result<32){
            document.getElementById("convert").setAttribute("class","cblue")
        }
        else if(result>=32 && result<=104){
         document.getElementById("convert").setAttribute("class","cgreen")
        }
        else{
            document.getElementById("convert").setAttribute("class","cred")
        }
        
    }
}
function cel(){
    var user=parseInt(document.getElementById("hello").value)
    if(user !=null){
        result=user-32;
        result=result*5;
        result=result/9;
        document.getElementById('convert').innerText=result;
        if(result<0){
            document.getElementById("convert").setAttribute("class","cblue")
        }
        else if(result>0 && result<40){
         document.getElementById("convert").setAttribute("class","cgreen")
        }
        else{
            document.getElementById("convert").setAttribute("class","cred")
        }
        
    }
}