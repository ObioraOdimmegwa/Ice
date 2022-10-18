function clear(){
    document.querySelector('.bizratingNav').classList.remove('active');
    document.querySelector('.futurexNav').classList.remove('active');
    document.querySelector('.ibuyerNav').classList.remove('active');
    document.querySelector('.splNav').classList.remove('active');
    document.querySelector('.vectorNav').classList.remove('active');
}

document.getElementById("main").addEventListener('click', clear);

function showBiz(){
    document.querySelector('.bizratingNav').classList.add('active');
    document.querySelector('.futurexNav').classList.remove('active');
    document.querySelector('.ibuyerNav').classList.remove('active');
    document.querySelector('.splNav').classList.remove('active');
    document.querySelector('.vectorNav').classList.remove('active');
}

function showFx(){
    document.querySelector('.bizratingNav').classList.remove('active');
    document.querySelector('.futurexNav').classList.add('active');
    document.querySelector('.ibuyerNav').classList.remove('active');
    document.querySelector('.splNav').classList.remove('active');
    document.querySelector('.vectorNav').classList.remove('active');
    
}

function showIb(){
    document.querySelector('.bizratingNav').classList.remove('active');
    document.querySelector('.futurexNav').classList.remove('active');
    document.querySelector('.ibuyerNav').classList.add('active');
    document.querySelector('.splNav').classList.remove('active');
    document.querySelector('.vectorNav').classList.remove('active');
    
}

function showSpl(){
    document.querySelector('.bizratingNav').classList.remove('active');
    document.querySelector('.futurexNav').classList.remove('active');
    document.querySelector('.ibuyerNav').classList.remove('active');
    document.querySelector('.splNav').classList.add('active');
    document.querySelector('.vectorNav').classList.remove('active');
    
}

function showVector(){
    document.querySelector('.bizratingNav').classList.remove('active');
    document.querySelector('.futurexNav').classList.remove('active');
    document.querySelector('.ibuyerNav').classList.remove('active');
    document.querySelector('.splNav').classList.remove('active');
    document.querySelector('.vectorNav').classList.add('active');
    
}