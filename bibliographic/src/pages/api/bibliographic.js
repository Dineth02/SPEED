export default function handler(req, res) {
  if (req.method === "POST") {
    console.log("Received submission:", req.body);
    res.status(200).json({ message: "Submission received" });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}