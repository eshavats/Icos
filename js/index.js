var countRiders = 0;
var countRides = 0;
var countDistance = 0;


var div1 = document.getElementById('rider');
var div2 = document.getElementById('rides');
var div3 = document.getElementById('distance');

setTimeout(function(){
    var st1 = setInterval(function(){
        div1.innerHTML = ++countRiders;
        if (countRiders > 6843){
            clearInterval(st1);
        }
    },10)

    var st2 = setInterval(function(){
        div2.innerHTML = ++countRides;
        if (countRides > 3999){
            clearInterval(st2);
        }
    },10)

    var st3 = setInterval(function(){
        div3.innerHTML = ++countDistance;
        if (countDistance > 9999){
            clearInterval(st3);
        }
    },10)
},100);

function locateImg() {
    document.getElementById('icos-mobile-para').innerHTML = "Locate your nearest Icos in your campus";
    document.getElementById('pulse1').style.backgroundColor = '#4592af';
    document.getElementById('pulse2').style.backgroundColor = 'transparent';
    document.getElementById('pulse3').style.backgroundColor = 'transparent';
    document.getElementById('locate').style.display='block';
    document.getElementById('scan').style.display='none';
    document.getElementById('ride').style.display='none';
   }

   function scanImg() {
    document.getElementById('icos-mobile-para').innerHTML = "Scan the QR to get an Icos started";
    document.getElementById('pulse1').style.backgroundColor = 'transparent';
    document.getElementById('pulse2').style.backgroundColor = '#4592af';
    document.getElementById('pulse3').style.backgroundColor = 'transparent';
    document.getElementById('locate').style.display='none';
    document.getElementById('scan').style.display='block';
    document.getElementById('ride').style.display='none';
   }

   function rideImg() {
    document.getElementById('icos-mobile-para').innerHTML = "Zoom around your campus at just ₹1/min";
    document.getElementById('pulse1').style.backgroundColor = 'transparent';
    document.getElementById('pulse2').style.backgroundColor = 'transparent';
    document.getElementById('pulse3').style.backgroundColor = '#4592af';
    document.getElementById('locate').style.display='none';
    document.getElementById('scan').style.display='none';
    document.getElementById('ride').style.display='block';
  }

