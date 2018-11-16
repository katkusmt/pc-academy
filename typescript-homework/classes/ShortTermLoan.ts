import ILoanCalculation from "../Interfaces/ILoanCalculation";
import LoanBase from "./LoanBase";

export default class ShortTermLoan extends LoanBase implements ILoanCalculation {

  constructor (loanSize: number, loanTerm: number) {
    super(loanSize, loanTerm, 5000, 2);
    this.interest = 0.2;
  }
  
  loanCalculation(): number {
    return this.loanSize * this.loanTerm * this.interest + this.loanSize;
  }

}