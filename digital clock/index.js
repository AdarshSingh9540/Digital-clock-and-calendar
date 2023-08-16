let hrs = document.getElementById("hrs");
     let min = document.getElementById("min");
     let sec= document.getElementById("sec");
     let date = document.getElementById("date");
     let month = document.getElementById("month");
     let year = document.getElementById("year");
  

     setInterval(()=> {   
        let currentTIme = new Date();
    hrs.innerHTML = (currentTIme.getHours()<10?"0":"")+currentTIme.getHours();
    min.innerHTML = (currentTIme.getMinutes()<10?"0":"")+currentTIme.getMinutes();
    sec.innerHTML = (currentTIme.getSeconds()<10?"0":"")+currentTIme.getSeconds();
},1000)


        let currenttime = new Date();

        date.innerHTML = (currenttime.getDate()<10?"0":"")+currenttime.getDate();
        month.innerHTML = (currenttime.getMonth()<10?"0":"")+currenttime.getMonth();
        year.innerHTML = (currenttime.getFullYear()<10?"0":"")+currenttime.getFullYear();
    