function showDiv() {

  let x = document.getElementById("etcDiv");
  let a = document.getElementById("coins10");
  let b = document.getElementById("coins5");
  let c = document.getElementById("coins2");
  let d = document.getElementById("coins1");

  if (x.style.display === "table-row") {
    x.style.display = "none";
    a.style.display = "table-row";
    b.style.display = "table-row";
    c.style.display = "table-row";
    d.style.display = "table-row";

  } else if (a.style.display === "table-row") {
    x.style.display = "table-row";
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
  }

  if (document.getElementById("btn").textContent === "แยกเหรียญ") {
    document.getElementById("btn").textContent = "รวมเหรียญ"
    sum();
  } else {
    document.getElementById("btn").textContent = "แยกเหรียญ"
    sum();
  }

}

let oneThousand = document.getElementById("1000");
let fiveHundred = document.getElementById("500");
let oneHundred = document.getElementById("100");
let fifty = document.getElementById("50");
let twenty = document.getElementById("20");
let etc = document.getElementById("etc");

let ten = document.getElementById("10");
let five = document.getElementById("5");
let two = document.getElementById("2");
let one = document.getElementById("1");


function sum() {
  let NumOneThousand = Number(oneThousand.value)
  let NumFiveHundred = Number(fiveHundred.value)
  let NumOneHundred = Number(oneHundred.value)
  let NumFifty = Number(fifty.value)
  let NumTwenty = Number(twenty.value)
  let NumEtc = Number(etc.value)
  //
  let NumTen = Number(ten.value)
  let NumFive = Number(five.value)
  let NumTwo = Number(two.value)
  let NumOne = Number(one.value)
  //
  document.getElementById("sum1000").innerText = " = " + (NumOneThousand * 1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  document.getElementById("sum500").innerText = " = " + (NumFiveHundred * 500).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  document.getElementById("sum100").innerText = " = " + (NumOneHundred * 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  document.getElementById("sum50").innerText = " = " + (NumFifty * 50).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  document.getElementById("sum20").innerText = " = " + (NumTwenty * 20).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  document.getElementById("sumEtc").innerText = " = " + (NumEtc).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  //
  document.getElementById("sumTen").innerText = " = " + (NumTen * 10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  document.getElementById("sumFive").innerText = " = " + (NumFive * 5).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  document.getElementById("sumTwo").innerText = " = " + (NumTwo * 2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  document.getElementById("sumOne").innerText = " = " + (NumOne).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      // console.log(document.getElementById("btn").textContent);
  if (document.getElementById("btn").textContent === "แยกเหรียญ") {
    let total = (NumOneThousand * 1000) + (NumFiveHundred * 500) + (NumOneHundred * 100) + (NumFifty * 50) + (NumTwenty * 20) + NumEtc;
    total = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("result").innerText = total;
  } else {
    let withCoins = (NumOneThousand * 1000) + (NumFiveHundred * 500) + (NumOneHundred * 100) + (NumFifty * 50) + (NumTwenty * 20) + (NumTen * 10) + (NumFive * 5) + (NumTwo * 2) + NumOne;
    withCoins = withCoins.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("result").innerText = withCoins;
  }

}
//
