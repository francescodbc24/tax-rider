export function NettoConsegna(
  priceCarburante: number,
  priceConsegna: number,
  kmConsegna: number,
  kmXlitro:number
) {
  const iva2 = 5;
  const inps2 = 26.23;
  let carburanteNetto = ((priceCarburante / kmXlitro) * kmConsegna);
  let consegnaFinal = (priceConsegna * 67) / 100;
  let I = (consegnaFinal * iva2) / 100;
  let IN = (consegnaFinal * inps2) / 100;
  let a = I + IN;
  var b = (a + carburanteNetto);
  var c = (priceConsegna - b);
  let final1 = c.toFixed(2);
  let final = parseFloat(final1);
  return {netto:final,benzina:carburanteNetto,tasse:a}
  //document.getElementById("nettoC").innerText = "Totale ricevuto netto per questa consegna:" + " €" + final
  //document.getElementById("benzi").innerText = "Totale spesso in benzina per questa corsa:"  + " €" + carburanteNetto.toFixed(2)
  //document.getElementById("tas").innerText ="Totale tasse  per questa corsa:"  +  " €" + a.toFixed(2)
}
