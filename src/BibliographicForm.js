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
    bibtex: "",
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

  const handleBibTeXChange = (e) => {
    const bibtexInput = e.target.value;
    setFormData({ ...formData, bibtex: bibtexInput });

    const extractedFields = parseBibTeX(bibtexInput);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3000/bibliographic", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    alert("Submission received!");
  };

  return (
    <div className="container">
      <h1>SPEED Article Submission</h1>
      <p>Submit bibliographic details for review. No PDFs or links allowed!</p>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input name="title" value={formData.title} onChange={handleChange} required />

        <label>Authors:</label>
        <input name="authors" value={formData.authors} onChange={handleChange} required />

        <label>Journal Name:</label>
        <input name="journalName" value={formData.journalName} onChange={handleChange} required />

        <label>Year of Publication:</label>
        <input type="number" name="publicationYear" value={formData.publicationYear} onChange={handleChange} required />

        <label>Volume:</label>
        <input name="volume" value={formData.volume} onChange={handleChange} />

        <label>Issue:</label>
        <input name="issue" value={formData.issue} onChange={handleChange} />

        <label>Pages:</label>
        <input name="pages" value={formData.pages} onChange={handleChange} />

        <label>DOI:</label>
        <input name="doi" value={formData.doi} onChange={handleChange} required />

        <label>Formatted Citation:</label>
        <input name="citation" value={formData.citation} placeholder="Provide citation in APA, MLA, or another format." onChange={handleChange} />

        <label>Optional BibTeX:</label>
        <textarea name="bibtex" value={formData.bibtex} onChange={handleBibTeXChange} placeholder="Paste your BibTeX entry here"></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BibliographicForm;