// experience.js
document.addEventListener("DOMContentLoaded", function() {
  const startDate = new Date(2024, 4, 1); // January 1, 2024
  const currentDate = new Date();

  let totalMonths = (currentDate.getFullYear() - startDate.getFullYear()) * 12;
  totalMonths += currentDate.getMonth() - startDate.getMonth();

  if (currentDate.getDate() < startDate.getDate()) {
    totalMonths--;
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  let resultText = "";
  if (years > 0) resultText += `${years} ${years === 1 ? 'Year' : 'Years'}`;
  if (months > 0) {
    if (years > 0) resultText += ", ";
    resultText += `${months} ${months === 1 ? 'Month' : 'Months'}`;
  }
  if (totalMonths <= 0) resultText = "Less than a month";

  const expSpan = document.getElementById("exp-text");
  if (expSpan) {
    expSpan.innerHTML = `2024 — PRESENT · ${resultText.toUpperCase()} OF EXPERIENCE`;
  }
});
