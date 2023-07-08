function IMT() {
  let m = document.getElementById("m").value;
  let h = document.getElementById("h").value;
  let i =0;
  i = Number(m).toFixed(4) / (Number(h).toFixed(4) * Number(h).toFixed(4) / 10000);
  document.querySelector('.i').innerHTML = i.toFixed(2);
  if (i <= 16){
    document.querySelector('.IMT_char').innerHTML = "Выраженный дефицит массы тела";
  } else if (i > 16 && i <= 18.5){
    document.querySelector('.IMT_char').innerHTML = "Недостаточная (дефицит) масса тела";
  } else if (i > 18.5 && i <= 25){
    document.querySelector('.IMT_char').innerHTML = "Норма";
  } else if (i > 25 && i <= 30){
    document.querySelector('.IMT_char').innerHTML = "Избыточная масса тела (предожирение)";
  } else if (i > 30 && i <= 35){
    document.querySelector('.IMT_char').innerHTML = "Ожирение 1 степени";
  } else if (i > 35 && i <= 40){
    document.querySelector('.IMT_char').innerHTML = "Ожирение 2 степени";
  } else if (i > 40){
    document.querySelector('.IMT_char').innerHTML = "Ожирение 3 степени";
  }
}
