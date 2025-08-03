import { useState } from "react";
import "./AISearchForm.css";

function AISearchForm({ onSubmit }) {
  const [imageFile, setImageFile] = useState(null);
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!imageFile && !description.trim()) {
      alert("Please provide an image or a description.");
      return;
    }

    const formData = {
      image: imageFile,
      description,
    };

    // For now, pass to parent
    onSubmit(formData);
  };

  return (
    <form className="ai-search-form" onSubmit={handleSubmit}>
      <h2>AI-Based Spare Part Search</h2>
      
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImageFile(e.target.files[0])}
      />

      <textarea
        placeholder="Describe the part (optional)..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={4}
      />

      <button type="submit">🔎 Search with AI</button>
    </form>
  );
}

export default AISearchForm;
