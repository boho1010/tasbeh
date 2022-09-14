let root = document.getElementById("root");
let al = "Alhamdulillah";
let ol = "Allohu akbar";
let la = "La ilaha illallohu vahdahu la shariyka lah. Lahul mulku va lahul hamd. Va huva ala kulli shay in qodiyr"
let h2 = document.getElementById("sub");
let su = "SubhanOlloh";
let ekran = document.querySelector(".ekran");
document.querySelector(".btn").addEventListener("click", function () {
  console.log(+ekran.value + 1);
  ekran.value = parseInt(ekran.value) + 1;

  if (ekran.value <= 33) {
    h2.innerHTML = al;
    console.log(al);
  } else if (ekran.value <= 66) {
    h2.innerHTML = ol;
    console.log(ol);
  }else if (ekran.value <= 99){
      h2.innerHTML = la;
      console.log(la);
  }
 

  
else if(ekran.value > 9)

ekran.value = 0;

  
});

document.querySelector(".nol").addEventListener("click", function () {
  document.querySelector(".ekran").value = -1;

});
