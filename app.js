// range sliderin değeri başlangıçta olacak şekilde global değişkenler oluşturulur

let tipAmount = document.getElementById("tipAmount");
const slider = document.getElementById("sliderRange");
tipAmount.innerHTML = slider.value + "%";

// oninput ile inputa bağlı olarak fonksiyon hemen çalıştırılır ve değerler değiştirilir
document.getElementById("tip_form").oninput = function () {
  let bill = document.getElementById("billingAmount").value;

  const tipInEuros = document.getElementById("tipInEuros");
  const totalBilling = document.getElementById("totalBill");

 // bu, sliderin yüzde olarak görünmesini sağlar
  slider.oninput = function () {
    tipAmount.innerHTML = this.value + "%";
  };

  // bahsis bu sekilde hesasaplanir
  var tipValue = bill * (slider.value / 100);
  tipValue = tipValue.toFixed(2); // sadece iki ondalık basamağa sahip olmamızı sağlar

// iki değeri Sayılara çevirir
  tipValue = parseFloat(tipValue);
  bill = parseFloat(bill);
// bill ve bahşiş eklenir
  var finalBill = bill + tipValue;

  // sonuc bu sekilde yazdırılır
  tipInEuros.innerHTML = tipValue + "€";
  totalBilling.innerHTML = finalBill + "€";
};
