import ILoanCalculation from "../Interfaces/ILoanCalculation";
import LoanBase from "./LoanBase";
import ILoanLimits from "../Interfaces/ILoanLimits";

export default class ShortTermLoan extends LoanBase implements ILoanCalculation, ILoanLimits {

  maxAmount: number = 5000;
  maxTerm: number = 2;

  constructor (loanSize: number, loanTerm: number) {
    super(loanSize, loanTerm);
    this.interest = 0.2;
  }
  
  loanCalculation(): number {
    return this.loanSize * this.loanTerm * this.interest;
  }

}