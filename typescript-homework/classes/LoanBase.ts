export default abstract class LoanBase {
  loanSize: number;
  loanTerm: number;
  interest: number;
  maxAmount: number;
  maxTerm: number;

  constructor (loanSize: number, loanTerm: number, maxAmount: number, maxTerm: number) {
    this.loanSize = loanSize;
    this.loanTerm = loanTerm;
    this.maxAmount = maxAmount;
    this.maxTerm = maxTerm;
  }
}