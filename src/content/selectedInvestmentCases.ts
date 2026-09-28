import { publishedInvestmentCases, type InvestmentCaseRecord } from "../../shared/experience/cases";

/**
 * Owner-maintained records. Public pages receive only the filtered view below.
 * Private identity and notes stay in this module's source; the published view omits them.
 * Leave the list empty until a case is confirmed. Do not add example companies.
 */
export const investmentCaseRecords: InvestmentCaseRecord[] = [];

export function selectedInvestmentCases() {
  return publishedInvestmentCases(investmentCaseRecords);
}
