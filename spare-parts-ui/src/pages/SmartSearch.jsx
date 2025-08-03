import { useState } from "react";
import "./../App.css";

function SmartSearch() {
  const [form, setForm] = useState({
    partNumber: "",
    equipment: "",
    description: "",
    image: null,
    enableAI: false,
    enableWeb: false,
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setForm({ ...form, [name]: checked });
    } else if (type === "file") {
      setForm({ ...form, image: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", form);

    // Simulated result
    setTimeout(() => {
      setResult({
        partNumber: form.partNumber || "123-ABC",
        equipment: form.equipment || "Oxylog 3000",
        name: "Flow Sensor",
        description: "Measures flow rate for ventilation",
        datasheet: "https://example.com/datasheet.pdf",
        notes: form.enableAI
          ? "This part is compatible with models X, Y and should not be used in high-moisture settings."
          : null,
      });
    }, 1000);
  };

  return (
    <div className="smart-search-wrapper">
      <form className="smart-search-form" onSubmit={handleSubmit}>
        <h2>Smart Spare Part Assistant</h2>

        <input
          type="text"
          name="partNumber"
          placeholder="Part Number (if known)"
          value={form.partNumber}
          onChange={handleChange}
        />
        <input
          type="text"
          name="equipment"
          placeholder="Equipment Name or Model"
          value={form.equipment}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Describe the part..."
          value={form.description}
          onChange={handleChange}
          rows={3}
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
        />

        <div className="toggles">
          <label>
            <input
              type="checkbox"
              name="enableAI"
              checked={form.enableAI}
              onChange={handleChange}
            />
            🧠 Enable AI Assistant
          </label>
          <label>
            <input
              type="checkbox"
              name="enableWeb"
              checked={form.enableWeb}
              onChange={handleChange}
            />
            🌐 Enable Web Info
          </label>
        </div>

        <button type="submit">🔍 Find Part</button>
      </form>

      {result && (
        <div className="result-panel">
          <h3>🟩 Match Found</h3>
          <p><strong>Part Number:</strong> {result.partNumber}</p>
          <p><strong>Equipment:</strong> {result.equipment}</p>
          <p><strong>Name:</strong> {result.name}</p>
          <p><strong>Description:</strong> {result.description}</p>
          <a href={result.datasheet} target="_blank" rel="noreferrer">📄 View Datasheet</a>
          {result.notes && (
            <div className="ai-notes">
              <strong>🧠 AI Notes:</strong> <p>{result.notes}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SmartSearch;
