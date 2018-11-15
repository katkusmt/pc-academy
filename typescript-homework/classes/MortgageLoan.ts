import LoanBase from "./LoanBase";
import ILoanCalculation from "../Interfaces/ILoanCalculation";

export default class MortgateLoan extends LoanBase implements ILoanCalculation {
  
  maxAmount: number;
  maxTerm: number;

  constructor (loanSize: number, loanTerm: number, maxAmount: number, maxTerm: number) {
    super(loanSize, loanTerm, maxAmount, maxTerm);
    this.interest = 0.02;
  }
  loanCalculation(): number {
    return 1;
  }

}