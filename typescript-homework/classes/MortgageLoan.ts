import LoanBase from "./LoanBase";
import ILoanCalculation from "../Interfaces/ILoanCalculation";

export default class MortgateLoan extends LoanBase implements ILoanCalculation {
  loanCalculation() {
    throw new Error("Method not implemented.");
  }

}