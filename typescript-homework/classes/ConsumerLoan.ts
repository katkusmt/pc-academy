import ILoanCalculation from "../Interfaces/ILoanCalculation";
import LoanBase from "./LoanBase";
import ILoanLimits from "../Interfaces/ILoanLimits";

export default class ConsumerLoan extends LoanBase implements ILoanCalculation, ILoanLimits {

  maxAmount: number = 10000;
  maxTerm: number = 5;

  constructor (loanSize: number, loanTerm: number) {
    super(loanSize, loanTerm);
  }
  loanCalculation(): number {
    return this.loanSize * this.loanTerm * this.interest;
  }
  
}