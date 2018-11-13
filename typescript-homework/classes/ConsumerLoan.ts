import ILoanCalculation from "../Interfaces/ILoanCalculation";
import LoanBase from "./LoanBase";

export default class ConsumerLoan extends LoanBase implements ILoanCalculation {

  constructor (loanSize: number, loanTerm: number) {
    super(loanSize, loanTerm);
  }
  loanCalculation() {
    throw new Error("Method not implemented.");
  }
  
}