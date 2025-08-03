import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import { getEmbedding } from "../utils/openai";
import cosineSimilarity from "compute-cosine-similarity";

function PartLibrary() {
  const [parts, setParts] = useState([]);
  const [filteredParts, setFilteredParts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchParts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Spare_parts"));
        const results = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setParts(results);
        setFilteredParts(results); // Show all initially
      } catch (error) {
        console.error("Error loading parts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchParts();
  }, []);

  const semanticSearch = async (query) => {
    if (!query) {
      setFilteredParts(parts);
      return;
    }

    try {
      const queryEmbedding = await getEmbedding(query);
      const scored = parts
        .filter(p => Array.isArray(p.embedding)) // Ensure embedding exists
        .map(p => ({
          ...p,
          score: cosineSimilarity(queryEmbedding, p.embedding),
        }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 10); // Top 10 results

      setFilteredParts(scored);
    } catch (err) {
      console.error("Semantic search failed:", err);
    }
  };

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      semanticSearch(searchTerm);
    }, 400); // debounce input

    return () => clearTimeout(delaySearch);
  }, [searchTerm, parts]);

  if (loading) return <div className="spinner"></div>;

  return (
    <section className="section">
      <h1>Part Library</h1>
      <input
        type="text"
        placeholder="Ask naturally… e.g. 'filter for infant ventilator'"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {filteredParts.length === 0 ? (
        <p>No relevant parts found.</p>
      ) : (
        <div className="parts-grid">
          {filteredParts.map((part) => (
            <Link
              to={`/part/${part.id}`}
              key={part.id}
              className="part-card"
              style={{ textDecoration: 'none' }}
            >
              <h2>{part.name}</h2>
              <p>{part.description}</p>
              {part.image_url && <img src={part.image_url} alt={part.name} />}
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

export default PartLibrary;
