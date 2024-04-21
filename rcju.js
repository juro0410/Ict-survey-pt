function done() {
   
    var r1 = document.getElementById('r1').value;
    var r2 = document.getElementById('r2').value;
    var r3 = document.getElementById('r3').value;
    var r4 = document.getElementById('r4').value;
    var r5 = document.getElementById('r5').value;
    var r6 = document.getElementById('r6').value;
    var r7 = document.getElementById('r7').value;
    var r8 = document.getElementById('r8').value;
    var r9 = document.getElementById('r9').value;
    var r10 = document.getElementById('r10').value;
    var r11 = document.getElementById('r11').value;
   


   
    localStorage.setItem("r1", r1);
    localStorage.setItem("r2", r2);
    localStorage.setItem("r3", r3);
    localStorage.setItem("r4", r4);
    localStorage.setItem("r5", r5);
    localStorage.setItem("r6", r6);
    localStorage.setItem("t7", r7);
    localStorage.setItem("r8", r8);
    localStorage.setItem("r9", r9);
    localStorage.setItem("r10", r10);
    localStorage.setItem("r11", r11);
   

    
    console.log(localStorage.getItem("r1"));
    console.log(localStorage.getItem("r2"));
    console.log(localStorage.getItem("r3"));
    console.log(localStorage.getItem("r4"));
    console.log(localStorage.getItem("r5"));
    console.log(localStorage.getItem("r6"));
    console.log(localStorage.getItem("r7"));
    console.log(localStorage.getItem("r8"));
    console.log(localStorage.getItem("r9"));
    console.log(localStorage.getItem("r10"));
    console.log(localStorage.getItem("r11"));
    
}