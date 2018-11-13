import ILoanCalculation from "../Interfaces/ILoanCalculation";
import LoanBase from "./LoanBase";

export default class ConsumerLoan extends LoanBase implements ILoanCalculation {
  loanCalculation() {
    throw new Error("Method not implemented.");
  }
  
}