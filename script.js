let oneThousand = document.getElementById("1000");
let fiveHundred = document.getElementById("500");
let oneHundred = document.getElementById("100");
let fifty = document.getElementById("50");
let twenty = document.getElementById("20");
let etc = document.getElementById("etc");

function sum() {
  let NumOneThousand = Number(oneThousand.value)
  let NumFiveHundred = Number(fiveHundred.value)
  let NumOneHundred = Number(oneHundred.value)
  let NumFifty = Number(fifty.value)
  let NumTwenty = Number(twenty.value)
  let NumEtc = Number(etc.value)

  //
  document.getElementById("sum1000").innerText = " = " + (NumOneThousand * 1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  document.getElementById("sum500").innerText = " = " + (NumFiveHundred * 500).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  document.getElementById("sum100").innerText = " = " + (NumOneHundred * 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  document.getElementById("sum50").innerText = " = " + (NumFifty * 50).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  document.getElementById("sum20").innerText = " = " + (NumTwenty * 20).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  document.getElementById("sumEtc").innerText = " = " + (NumEtc).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");




  let total = (NumOneThousand * 1000) + (NumFiveHundred * 500) + (NumOneHundred * 100) + (NumFifty * 50) + (NumTwenty * 20) + NumEtc;
  total = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  document.getElementById("result").innerText = total;
}

// const d = new Date();

// function capture () {
//       html2canvas(document.body).then((canvas) => {
//         let a = document.createElement("a");
//         a.download = d + ".png";
//         a.href = canvas.toDataURL("image/png");
//         a.click(); // MAY NOT ALWAYS WORK!
//       });
//     }
