function clear(){
    document.querySelector('.bizratingNav').classList.remove('active');
    document.querySelector('.futurexNav').classList.remove('active');
    document.querySelector('.ibuyerNav').classList.remove('active');
    document.querySelector('.splNav').classList.remove('active');
    document.querySelector('.vectorNav').classList.remove('active');
}

//document.getElementById("main").addEventListener('click', clear);

function showBiz(){
    document.querySelector('.bizratingNav').classList.toggle('active');
    document.querySelector('.futurexNav').classList.remove('active');
    document.querySelector('.ibuyerNav').classList.remove('active');
    document.querySelector('.splNav').classList.remove('active');
    document.querySelector('.vectorNav').classList.remove('active');
    console.log("MOBILE")
}

function showFx(){
    document.querySelector('.bizratingNav').classList.remove('active');
    document.querySelector('.futurexNav').classList.toggle('active');
    document.querySelector('.ibuyerNav').classList.remove('active');
    document.querySelector('.splNav').classList.remove('active');
    document.querySelector('.vectorNav').classList.remove('active');
    
}

function showIb(){
    document.querySelector('.bizratingNav').classList.remove('active');
    document.querySelector('.futurexNav').classList.remove('active');
    document.querySelector('.ibuyerNav').classList.toggle('active');
    document.querySelector('.splNav').classList.remove('active');
    document.querySelector('.vectorNav').classList.remove('active');
    
}

function showSpl(){
    document.querySelector('.bizratingNav').classList.remove('active');
    document.querySelector('.futurexNav').classList.remove('active');
    document.querySelector('.ibuyerNav').classList.remove('active');
    document.querySelector('.splNav').classList.toggle('active');
    document.querySelector('.vectorNav').classList.remove('active');
    
}

function showVector(){
    document.querySelector('.bizratingNav').classList.remove('active');
    document.querySelector('.futurexNav').classList.remove('active');
    document.querySelector('.ibuyerNav').classList.remove('active');
    document.querySelector('.splNav').classList.remove('active');
    document.querySelector('.vectorNav').classList.toggle('active');
    
}
