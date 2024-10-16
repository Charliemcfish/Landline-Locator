const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

clearBtn.addEventListener("click", () => {
resultsDiv.textContent = "";
userInput.value = "";
});

checkBtn.addEventListener("click", () => {
const phoneNumber = userInput.value.trim();

if (!phoneNumber) {
  alert("Please provide a phone number");
} else {
  const result = validatePhoneNumber(phoneNumber);
displayResult(phoneNumber, result);
}
})


function validatePhoneNumber(number) {

const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;

return regex.test(number);
}

function displayResult(phoneNumber, isValid) {
  if (isValid) {
    resultsDiv.textContent = `Valid US number: ${phoneNumber}`;
    resultsDiv.style.color = "green";
  } else {
    resultsDiv.textContent = `Invalid US number: ${phoneNumber}`
    resultsDiv.style.color = "red";
  }
}