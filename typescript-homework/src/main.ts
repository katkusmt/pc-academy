import ShortTermLoan from "../classes/ShortTermLoan"

const rangeValue = document.getElementById("rangeValue");
let loanSize = document.getElementById("loanSize");
const that = this;
loanSize.addEventListener('input', function(){
  rangeValue.innerHTML = (<HTMLInputElement>loanSize).value.toString();
});




const shortLoanSubmitButton = document.getElementById("short-term-submit-button");
shortLoanSubmitButton.addEventListener("click", function(){
  let loanSize: number = parseInt((<HTMLInputElement>document.getElementById("loanSize")).value);
  let loanTerm: number = parseInt((<HTMLInputElement>document.getElementById("loanTerm")).value);
  let shortTermLoan = new ShortTermLoan(loanSize, loanTerm);
  const displayTotalReturn = document.getElementById("short-term-return-total");
  displayTotalReturn.innerHTML = shortTermLoan.loanCalculation().toString();
  displayTotalReturn.classList.remove('scale-out');
});