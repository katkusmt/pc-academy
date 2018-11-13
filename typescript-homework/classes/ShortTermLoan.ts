import ILoanCalculation from "../Interfaces/ILoanCalculation";
import LoanBase from "./LoanBase";

export default class ShortTermLoan extends LoanBase implements ILoanCalculation {
  loanCalculation() {
    throw new Error("Method not implemented.");
  }

}