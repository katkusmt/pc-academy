import LoanBase from "./LoanBase";
import ILoanCalculation from "../Interfaces/ILoanCalculation";
import ILoanLimits from "../Interfaces/ILoanLimits";

export default class MortgateLoan extends LoanBase implements ILoanCalculation, ILoanLimits {
  
  maxAmount: number;
  maxTerm: number;

  constructor (loanSize: number, loanTerm: number) {
    super(loanSize, loanTerm);
    this.interest = 0.02;
  }
  loanCalculation(): number {
    return 1;
  }

}