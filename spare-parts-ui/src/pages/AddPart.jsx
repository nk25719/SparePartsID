
// AddPart.jsx
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function AddPart() {
  const [part, setPart] = useState({
    name: "",
    partNumber: "",
    equipment: "",
    description: "",
    image_url: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPart({ ...part, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "Spare_parts"), part);
      alert("Part added successfully!");
      setPart({
        name: "",
        partNumber: "",
        equipment: "",
        description: "",
        image_url: ""
      });
    } catch (err) {
      alert("Error adding part.");
      console.error(err);
    }
  };

  return (
    <form className="add-part-form" onSubmit={handleSubmit}>
      <h2>Add New Spare Part</h2>
      <input name="name" value={part.name} onChange={handleChange} placeholder="Name" required />
      <input name="partNumber" value={part.partNumber} onChange={handleChange} placeholder="Part Number" />
      <input name="equipment" value={part.equipment} onChange={handleChange} placeholder="Equipment" />
      <textarea name="description" value={part.description} onChange={handleChange} placeholder="Description" />
      <input name="image_url" value={part.image_url} onChange={handleChange} placeholder="Image URL" />
      <button type="submit">➕ Add Part</button>
    </form>
  );
}

export default AddPart;