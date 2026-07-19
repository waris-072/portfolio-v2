import "./ui.css";

function SectionTitle({ title, subtitle }) {
  return (
    <div className="section-title">
      {subtitle && <span className="section-subtitle">{subtitle}</span>}
      <h2>{title}</h2>
    </div>
  );
}

export default SectionTitle;