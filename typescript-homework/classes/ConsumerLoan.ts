import ILoanCalculation from "../Interfaces/ILoanCalculation";
import LoanBase from "./LoanBase";

export default class ConsumerLoan extends LoanBase implements ILoanCalculation {

  constructor (loanSize: number, loanTerm: number) {
    super(loanSize, loanTerm, 10000, 5);
  }
  loanCalculation(): number {
    return this.loanSize * this.loanTerm * this.interest;
  }
  
}