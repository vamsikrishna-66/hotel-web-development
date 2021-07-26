function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("navbar").style.display="none"
  }
  function openNav2(){
    document.getElementById("mysidenav2").style.width="100%";
    document.getElementById("navbar").style.display="none"
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("navbar").style.display="block";  
  }
  function closeNav2(){
    document.getElementById("mysidenav2").style.width = "0"
    document.getElementById("navbar").style.display="block"

  }
  function openNav4(){
    document.getElementById("mysidenav4").style.width="100%";
    document.getElementById("navbar").style.display="none"
  }
  function closeNav4(){
    document.getElementById("mysidenav4").style.width = "0"
    document.getElementById("navbar").style.display="block"
  }
  function openNav5(){
    document.getElementById("mysidenav6").style.width = "100%"
  }
  function openNav6(){
    document.getElementById("mysidenav6").style.width = "30%"
    document.getElementById("mysidenav6").style.marginLeft = "70%";
    document.getElementById('booking').style.marginRight = '20%'
  
  }
  function closeNav6(){
    document.getElementById("mysidenav6").style.width = "0"
    document.getElementById('booking').style.marginRight = '0%'
  
  }
  function closeNav7(){
    document.getElementById("mysidenav7").style.width = "0";
    document.getElementById('booking').style.opacity=1;
    document.getElementById('nav').style.opacity=1;
    document.getElementById('subnav').style.opacity=1;
    document.getElementById('top').style.opacity=1;
    document.getElementById('top').style.pointerEvents = 'auto';
    document.getElementById('nav').style.pointerEvents = 'auto';
    document.getElementById('subnav').style.pointerEvents = 'auto';
    document.getElementById('booking').style.pointerEvents = 'auto';
  }
  function openNav8(){
    document.getElementById("mysidenav8").style.width="70%";
    document.getElementById("navbar").style.display="none"
  }
  function closeNav8(){
    document.getElementById("mysidenav8").style.width = "0"
    document.getElementById('navbar').style.display = 'block'
  
  }

  function sub(){
    if (window.confirm('Account succesfully created redirect to login page?'))
    {
    window.open('http://localhost/hotel/hsignin.php');
    } 
    }
function nosub(){
  alert('phone number is already registered');
  window.history.go(-1)
}
  function see(){
    alert("succesfully loged in")
      window.open("http://localhost/hotel/hotel1.html");
      if(!localStorage.getItem('count')){
        localStorage.setItem('count',0);
      }
    
}
  
function al(){
  if (localStorage.getItem('count')==0){
  }
  else{
    if (window.confirm('you havent loged in click okay to signin or cancel to continue as a user'))
    {
    window.open('http://localhost/hotel/hsignin.php');
    }
  }
}
function check(){
  if (localStorage.getItem('count')==0){
    
    document.getElementById('info').style.display="none";
    var peruo = $("#lname").val();
    document.getElementById('peru').innerHTML=peruo
  }
  else{
    document.getElementById('hidden').style.display="none"
  }
}
function nota(){
  alert('invalid');
  window.history.go(-1)
}
function tesey(){
  if (window.confirm('Do you want to sign out'))
    {
     localStorage.removeItem('count');
     document.getElementById('info').style.display="block";
     document.getElementById('hidden').style.display="none";
    }
}
document.addEventListener('DOMContentLoaded',()=>{
if(localStorage.getItem('count')==0){
  document.getElementById('lm').style.opacity=1;
  document.getElementById('loginv').innerHTML=""
}
else{
  document.getElementById('lm').style.opacity=0.1;
  document.getElementById('loginv').innerHTML="login to avail these offers"
}
});
document.addEventListener('DOMContentLoaded',()=>{
  document.getElementById('gp').style.opacity=0.1;
  document.getElementById('gold').innerHTML="purchase a golden pass to avail these offers"
});

function book(){

  var bname=document.getElementById('bname').value;
  var bdate=document.getElementById('txtdate').value;
  var btroom =document.getElementById('type of room');
  var btroomv = btroom.options[btroom.selectedIndex].text;
  var bad =document.getElementById('noof adults');
  var badv = bad.options[bad.selectedIndex].text;
  var bac =document.getElementById('noof child');
  var bacv = bac.options[bac.selectedIndex].text;
  var ph =document.getElementById('phno').value;
  var bbra = document.getElementById('branch');
  var bbrav = bbra.options[bbra.selectedIndex].text;
  var broom= document.getElementById('noof rooms');
  var broomv = broom.options[broom.selectedIndex].text;

  var cop = document.getElementById('coup').value;
  var cop2 = cop.toLowerCase();

  var cost=0;
  var disc=0;
  
if(btroomv=="single"){
  cost=3000*broomv;
}
if(btroomv=="double"){
  cost=4000*broomv;
}
if(btroomv=="suit"){
  cost=10000*broomv;
}
if(btroomv=="presidential suit"){
  cost=50000*broomv;
}
if(cop2=="first30"){
  disc=cost*(30/100);
}
if(cop2=="hdfc40"){
disc=cost*(40/100);
}
if(cop2=="hdfc10"){
disc=cost*(10/100);
}
if(cop2=="icic5"){
disc=cost*(5/100);
}
if(cop2=="synd15"){
disc=cost*(15/100);
}
if(cop2==""){
disc=cost;
}
console.log(disc)

 
  if (localStorage.getItem('count')==0){
      if (cop2=="first30"||cop2=="hdfc40"||cop2=="hdfc10"||cop2=="icic5"||cop2=="synd15"||cop2==""){ 
       event.returnValue=false;           
       document.getElementById("mysidenav7").style.width = "80%";
  document.getElementById("mysidenav7").style.height = "80%";
  document.getElementById("mysidenav7").style.marginBottom = "10%";
  document.getElementById("mysidenav7").style.marginTop = "10%";
  document.getElementById("mysidenav7").style.marginLeft= "10%";
  document.getElementById("mysidenav7").style.marginRight = "10%";
         document.getElementById('booking').style.opacity=0.1;
         document.getElementById('nav').style.opacity=0.1;
         document.getElementById('subnav').style.opacity=0.1;
         document.getElementById('top').style.opacity=0.1;
         document.getElementById('name').innerHTML=bname;
         document.getElementById('phno').innerHTML=ph;
         document.getElementById('bd').innerHTML=bdate;
         document.getElementById('nd').innerHTML="";
         document.getElementById('ty').innerHTML=btroomv;
         document.getElementById('noro').innerHTML=broomv;
         document.getElementById('bran').innerHTML=bbrav;
         document.getElementById('amnt').innerHTML=cost;
         document.getElementById("damnt").innerHTML=disc;
         document.getElementById('top').style.pointerEvents = 'none';
         document.getElementById('nav').style.pointerEvents = 'none';
         document.getElementById('subnav').style.pointerEvents = 'none';
         document.getElementById('booking').style.pointerEvents = 'none';

      }
      else{
        event.preventDefault();
        alert("invalid coupen");

        return false;
      }
    }
 else{
    if (cop2=="hdfc10"||cop2=="icici5"||cop2=="synd15"||cop2==""){
      event.returnValue=false;  
      document.getElementById("mysidenav7").style.width = "80%";
      document.getElementById("mysidenav7").style.height = "80%";
      document.getElementById("mysidenav7").style.marginBottom = "10%";
      document.getElementById("mysidenav7").style.marginTop = "10%";
      document.getElementById("mysidenav7").style.marginLeft= "10%";
      document.getElementById("mysidenav7").style.marginRight = "10%";
      document.getElementById('booking').style.opacity=0.1;
         document.getElementById('nav').style.opacity=0.1;
         document.getElementById('subnav').style.opacity=0.1;
         document.getElementById('top').style.opacity=0.1;
         document.getElementById('name').innerHTML=bname;
         document.getElementById('phno').innerHTML=ph;
         document.getElementById('bd').innerHTML=bdate;
         document.getElementById('nd').innerHTML="";
         document.getElementById('ty').innerHTML=btroomv;
         document.getElementById('noro').innerHTML=broomv;
         document.getElementById('bran').innerHTML=bbrav;
         document.getElementById('amnt').innerHTML=cost;
         document.getElementById("damnt").innerhtml=disc;
         document.getElementById('top').style.pointerEvents = 'none';
         document.getElementById('nav').style.pointerEvents = 'none';
         document.getElementById('subnav').style.pointerEvents = 'none';
         document.getElementById('booking').style.pointerEvents = 'none';

    }
    else{
      event.preventDefault();

      alert("invalid coupen");
      return false;
    }
  }
}

function next(){
  alert('booking succesfully done');
 return true;
}
