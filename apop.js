function openDD(){
    document.body.querySelector(".dropDownParent").classList.toggle("dropDownAnimation")
    document.body.querySelector(".navBar").style.visibility='hidden';

}

function closeNav(){
    document.body.querySelector(".dropDownParent").classList.toggle("dropDownAnimation")
    // document.body.querySelector(".dropDownParent").classList.toggle("gaeb")
    document.body.querySelector(".navBar").style.visibility='visible';   

}