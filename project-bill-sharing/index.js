// DOM
const totalBill = document.getElementById("total-bill");
const tipPercentage = document.getElementById("tip-percentage");
const totalPeople = document.getElementById("total-people");
const result = document.getElementById("result");

function calculate() {
  const isMissingValue =
    !totalBill.value || !tipPercentage.value || !totalPeople.value;

  // Validation
  if (isMissingValue) {
    result.innerHTML = `Vui lòng nhập đầy đủ thông tin`;
  } else {
    const totalBillValue = +totalBill.value;
    const tipValue = +tipPercentage.value;
    const people = +totalPeople.value;

    const tipAmount = (totalBillValue * tipValue) / 100;
    const totalAmount = totalBillValue + tipAmount;
    const amountPerPerson = totalAmount / people;
    const formattedPrice = amountPerPerson.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    });
    result.innerHTML = `Mỗi người phải trả ${formattedPrice}`;
  }
}

function reset() {
  totalBill.value = "";
  tipPercentage.value = "";
  totalPeople.value = "";
  result.innerHTML = "";
}
