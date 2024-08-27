import express from "express";
const app = express();
const port = 9000;

// Middleware für POST-Daten
app.use(express.json());

// Route für POST-Request
app.post("/message", (req, res) => {
  // Hier kannst du die Logik für den POST-Request implementieren
  res.send("POST-Request empfangen!");
});

// Route für andere Methoden (GET, PUT, DELETE, etc.)
app.all("/message", (req, res) => {
  res.status(405).send("Method Not Allowed");
});

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
