import ILoanCalculation from "../Interfaces/ILoanCalculation";
import LoanBase from "./LoanBase";

export default class ShortTermLoan extends LoanBase implements ILoanCalculation {
  interest = 20;

  constructor (loanSize: number, loanTerm: number) {
    super(loanSize, loanTerm);
  }
  
  loanCalculation() {
    throw new Error("Method not implemented.");
  }

}