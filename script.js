let burger =document.querySelector('.burger');
let elementclose=document.querySelector('.menu');
let closebtn=document.querySelector('.close');
let list=document.querySelector('.list');
let socials=document.querySelector('.bottom ul');

burger.addEventListener('click' ,function(){
    
    elementclose.classList.add('toggle');
    closebtn.style.display='inline';
    list.style.display="flex";
    socials.style.backgroundColor='blueviolet';


})
closebtn.addEventListener('click' ,function(){

    elementclose.classList.remove('toggle');
    closebtn.style.display='none';
    list.style.display="none";
    socials.style.backgroundColor='transparent';


})
