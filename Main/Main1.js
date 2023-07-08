function IMT() {
  let m = document.getElementById("m").value;
  let h = document.getElementById("h").value;
  let i =0;
  i = Number(m).toFixed(4) / (Number(h).toFixed(4) * Number(h).toFixed(4) / 10000);
  document.querySelector('.i').innerHTML = i.toFixed(2);
  if (i <= 16){
    document.querySelector('.IMT_char').innerHTML = "Pronounced body weight deficiency";
  } else if (i > 16 && i <= 18.5){
    document.querySelector('.IMT_char').innerHTML = "Insufficient (deficiency) body weight";
  } else if (i > 18.5 && i <= 25){
    document.querySelector('.IMT_char').innerHTML = "Standard";
  } else if (i > 25 && i <= 30){
    document.querySelector('.IMT_char').innerHTML = "Overweight (pre-obesity)";
  } else if (i > 30 && i <= 35){
    document.querySelector('.IMT_char').innerHTML = "Obesity of the 1st degree";
  } else if (i > 35 && i <= 40){
    document.querySelector('.IMT_char').innerHTML = "Obesity of the 2nd degree";
  } else if (i > 40){
    document.querySelector('.IMT_char').innerHTML = "Obesity of the 3rd degree";
  }
}
