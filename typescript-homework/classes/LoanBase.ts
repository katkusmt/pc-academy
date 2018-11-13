export default abstract class LoanBase {
  loanSize: number;
  loanTerm: number;
  interest: number;

  constructor (loanSize: number, loanTerm: number) {
    this.loanSize = loanSize;
    this.loanTerm = loanTerm;
  }
}