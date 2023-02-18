
function setelement(elementId,value){
   const tottal = document.getelementbyid(elementId);
   tottal.innertext = value;
}

function getelemenstbyid(element){
    const element = document.getelementbyid(element);
    const elementstring = element.innertext;
    const tottal = parseInt(elementstring);
    return tottal;
}

function getinputelementbyid(inputelement){
    const tottal = document.getelementbyid(inputelement);
    const tottalstring = tottal.value;
    const balance = parseInt(tottalstring)
    return balance;
}

// document.getElementById('calculate-btn').addEventListener('click',function(){
    // const income = document.getinputelementbyid('income');
    // const food = document.getinputelementbyid('food');
    // const rent = document.getinputelementbyid('rent');
    // const clothes = document.getinputelementbyid('clothes');

   

    // const expance = food + rent + clothes ;

    
   




// })

document.getelementbyid('calculate-btn').adde

