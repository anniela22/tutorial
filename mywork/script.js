let nav1 = document.querySelector('#nav1');
let nav2 = document.querySelector('#nav2');
nav1.onmouseover = function(){
    this.innerText = "關於我";
}
nav1.onmouseout = function(){
    this.innerText = "About";
}
nav2.onmouseover = function(){
    this.innerText = "作品集";
}
nav2.onmouseout = function(){
    this.innerText = "Portfolio";
}

let hi = document.querySelector('#hi');
let day = new Date(); let time = day.getHours();
if((time>=5) && (time<=10)){
    hi.innerHTML = "早安";
}else if((time>=11) && (time<=17)){
    hi.innerHTML = "午安";
}else{
    hi.innerHTML = "晚安";
}

let course1 = document.querySelector('#course1');
let cou1h = document.querySelector('#cou1h');
let cou1p = document.querySelector('#cou1p');
course1.onmouseover = function(){
    this.style.background = "#0080FF";
    cou1h.style.display = "none";
    cou1p.innerHTML = "目前已經學習完，大致掌握語法了。但還在持續練習，希望能夠更加熟悉。";
    cou1p.style.margin = "15px";
}
course1.onmouseout = function(){
    this.style.background = "#005AB5"
    cou1h.style.display = "flex";
    cou1p.innerHTML = "90%";
    cou1p.style.margin = "10px 0 0 0";
}
let course2 = document.querySelector('#course2');
let cou2h = document.querySelector('#cou2h');
let cou2p = document.querySelector('#cou2p');
course2.onmouseover = function(){
    this.style.background = "#02C874";
    cou2h.style.display = "none";
    cou2p.innerHTML = "目前大致上已經學習完，不過因為實作經驗還不夠多不夠熟悉，所以還需要持續多加練習。";
    cou2p.style.margin = "15px";
}
course2.onmouseout = function(){
    this.style.background = "#01B468"
    cou2h.style.display = "flex";
    cou2p.innerHTML = "80%";
    cou2p.style.margin = "10px 0 0 0";   
}
let course3 = document.querySelector('#course3');
let cou3h = document.querySelector('#cou3h');
let cou3p = document.querySelector('#cou3p');
course3.onmouseover = function(){
    this.style.background = "#FF9224";
    cou3h.style.display = "none";
    cou3p.innerHTML = "剛開始學習不久，平時除了練習之前學習的語言外，也希望能盡快了解熟悉。";
    cou3p.style.margin = "15px";
}
course3.onmouseout = function(){
    this.style.background = "#EA7500"
    cou3h.style.display = "flex";
    cou3p.innerHTML = "15%";
    cou3p.style.margin = "10px 0 0 0"; 
}
let course4 = document.querySelector('#course4');
let cou4h = document.querySelector('#cou4h');
let cou4p = document.querySelector('#cou4p');
course4.onmouseover = function(){
    this.style.background = "#EA0000";
    cou4h.style.display = "none";
    cou4p.innerHTML = "目前剛開始接觸，還在了解基本概念的階段，希望能盡快熟悉。";
    cou4p.style.margin = "15px";
}
course4.onmouseout = function(){
    this.style.background = "#AE0000"
    cou4h.style.display = "flex";
    cou4p.innerHTML = "5%";
    cou4p.style.margin = "10px 0 0 0"; 
}

let btn = document.querySelector('#btn');
btn.onmouseover = function(){
    this.innerHTML = '我的作品集';
}
btn.onmouseout = function(){
    this.innerHTML = '點擊前往';
}
let iconImgs = document.querySelectorAll('.icon'); 
iconImgs.forEach(function(img){
    img.onmouseover = function() {
        this.style.width = '100px'; 
        this.style.height = '100px';  
    }
    img.onmouseout = function() {
        this.style.width = '90px'; 
        this.style.height = '90px';  
    }
})
