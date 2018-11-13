import LoanBase from "./LoanBase";
import ILoanCalculation from "../Interfaces/ILoanCalculation";

export default class MortgateLoan extends LoanBase implements ILoanCalculation {

  constructor (loanSize: number, loanTerm: number) {
    super(loanSize, loanTerm);
  }
  loanCalculation() {
    throw new Error("Method not implemented.");
  }

}