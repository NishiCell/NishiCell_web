document.addEventListener("DOMContentLoaded",function(){

document.getElementById("inorg_chem").innerHTML="Inorganic Chemistry"
document.getElementById("org_chem").innerHTML="Organic Chemistry"

    document.getElementById("inorg_chem_btn").addEventListener("click", function(){
            document.getElementById("inorg_chem").style.visibility="visible";
            document.getElementById("org_chem").style.visibility="hidden";
            document.getElementById("org_chem").style.height="0";
    });

    document.getElementById("org_chem_btn").addEventListener("click", function(){
            document.getElementById("org_chem").style.visibility="visible";
            document.getElementById("inorg_chem").style.visibility="hidden";
            document.getElementById("inorg_chem").style.height="0";
    });

})