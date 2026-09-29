import { editorialInvestmentCases } from "../../content/selectedInvestmentCases.editorial";
import { selectedInvestmentCases } from "../../content/selectedInvestmentCases";
import { InvestmentCaseCard } from "./InvestmentCaseCard";
import "./ExperienceActivity.css";

export function SelectedInvestmentPublished() {
  const approved = selectedInvestmentCases();
  const usingEditorial = approved.length === 0;
  const cases = usingEditorial ? editorialInvestmentCases : approved;
  if (cases.length === 0) return null;

  return (
    <section className="selected-cases" id="selected-investment-experience" aria-labelledby="selected-cases-title">
      <div className="section-container">
        <p className="experience-kicker">Selected experience</p>
        <h2 id="selected-cases-title">Selected Investment Experience</h2>
        <p className="experience-summary">
          A closer look at selected investments, the businesses behind them and our specific role.
        </p>
        <p className="experience-note">Selected examples only; not a complete investment record.</p>
        <div className="case-list">
          {cases.map((item) => (
            <InvestmentCaseCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
