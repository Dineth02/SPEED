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
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
      <input name="title" onChange={handleChange} required />

      <label>Authors:</label>
      <input name="authors" onChange={handleChange} required />

      <label>Journal Name:</label>
      <input name="journalName" onChange={handleChange} required />

      <label>Year of Publication:</label>
      <input type="number" name="publicationYear" onChange={handleChange} required />

      <label>Volume:</label>
      <input name="volume" onChange={handleChange} />

      <label>Issue:</label>
      <input name="issue" onChange={handleChange} />

      <label>Pages:</label>
      <input name="pages" onChange={handleChange} />

      <label>DOI:</label>
      <input name="doi" onChange={handleChange} required />

      <label>Formatted Citation:</label>
        <input
          name="citation"
          placeholder="Provide citation in APA, MLA, or another format."
          onChange={handleChange}
          required
        />


      <button type="submit">Submit</button>
    </form>
  </div>
);

}

export default BibliographicForm;