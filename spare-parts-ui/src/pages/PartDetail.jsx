// PartDetail.jsx
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import "../styles/PartDetail.css";

function PartDetail() {
  const { id } = useParams();
  const [part, setPart] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPart = async () => {
      try {
        const docRef = doc(db, "Spare_parts", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setPart(docSnap.data());
        } else {
          setPart(null);
        }
      } catch (error) {
        console.error("Error fetching part:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPart();
  }, [id]);

  if (loading) return <div className="spinner"></div>;
  if (!part) return <p>Part not found.</p>;

  return (
    <div className="detail-card">
      <h2>{part.name}</h2>
      <div className="detail-row"><span className="field-label">Part Number:</span> {part.partNumber}</div>
      <div className="detail-row"><span className="field-label">Equipment:</span> {part.equipment}</div>
      <div className="detail-row"><span className="field-label">Description:</span> {part.description}</div>
      {part.image_url && (
        <div className="detail-image">
          <img src={part.image_url} alt={part.name} />
        </div>
      )}
    </div>
  );
}

export default PartDetail;
