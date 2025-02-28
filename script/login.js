const loginButton = document.getElementById("btn-login");

loginButton.addEventListener("click", function (event) {
  event.preventDefault();
  const accountNumber = document.getElementById("account-number").value;
  const password = document.getElementById("password").value;
  console.log(accountNumber, password);
  if (accountNumber === "0987654" && password === "1234") {
    window.location.href = "main.html";
  } else {
    alert("account number or password is not correct, try again later!");
  }
});
