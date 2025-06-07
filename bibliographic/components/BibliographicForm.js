import { useState } from "react";
import "./style.css";

function BibliographicForm() {
  const [formData, setFormData] = useState({
    title: "",
    authors: "",
    journalName: "",
    publicationYear: "",
    volume: "",
    issue: "",
    pages: "",
    doi: "",
    citation: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const parseBibTeX = (bibtex) => {
    const fields = {};
    const matches = bibtex.match(/(\w+)\s*=\s*{([^}]*)}/g);
    if (matches) {
      matches.forEach((match) => {
        const [key, value] = match.split("=").map((s) => s.replace(/[{}]/g, "").trim());
        fields[key.toLowerCase()] = value;
      });
    }
    return fields;
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const bibtexContent = e.target.result;
        const extractedFields = parseBibTeX(bibtexContent);
        setFormData((prev) => ({
          ...prev,
          title: extractedFields.title || prev.title,
          authors: extractedFields.author || prev.authors,
          journalName: extractedFields.journal || prev.journalName,
          publicationYear: extractedFields.year || prev.publicationYear,
          volume: extractedFields.volume || prev.volume,
          issue: extractedFields.number || prev.issue,
          pages: extractedFields.pages || prev.pages,
          doi: extractedFields.doi || prev.doi,
          citation: extractedFields.title ? `${extractedFields.author} (${extractedFields.year}). ${extractedFields.title}.` : prev.citation,
        }));
      };
      reader.readAsText(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/bibliographic", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    alert(`🎉 Submission received!\n\nYour entry for "${formData.title}" has been successfully sent.`);
  };

  return (
    <div className="container">
      <h1>SPEED Article Submission</h1>
      <form onSubmit={handleSubmit}>
        <input name="title" value={formData.title} onChange={handleChange} required />
        <input name="authors" value={formData.authors} onChange={handleChange} required />
        <input type="file" accept=".bib" onChange={handleFileUpload} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BibliographicForm;