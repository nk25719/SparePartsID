import AISearchForm from "../components/AISearchForm";

function IdentifyPart() {
  return (
    <section className="section ai-section">
      <h1>Identify a Spare Part</h1>
      <p>Upload an image or describe the part to let the AI help you identify it.</p>
      <AISearchForm
        onSubmit={(data) => {
          console.log("AI search data:", data);
          alert("Feature coming soon: AI will analyze this.");
        }}
      />
    </section>
  );
}

export default IdentifyPart;
