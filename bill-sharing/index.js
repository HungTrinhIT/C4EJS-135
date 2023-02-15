function calculate() {
  const totalBill = document.getElementById("total-bill").value;
  const tipPercentage = document.getElementById("tip-percentage").value;
  const totalPeople = document.getElementById("total-people").value;
  const result = document.getElementById("result");

  if (!totalBill || !tipPercentage || !totalPeople) {
    result.innerHTML = "Vui lòng nhập đầy đủ thông tin.";
  } else {
    const tipAmount = totalBill * (tipPercentage / 100);
    const totalAmount = +totalBill + tipAmount;
    const amountPerPerson = totalAmount / totalPeople;
    result.innerHTML = `Mỗi người phải trả: ${amountPerPerson.toLocaleString()} đồng`;
  }
}

function reset() {
  document.getElementById("total-bill").value = "";
  document.getElementById("tip-percentage").value = "";
  document.getElementById("total-people").value = "";
  document.getElementById("result").innerHTML = "";
}
