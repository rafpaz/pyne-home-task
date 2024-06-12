import express from "express";
import cors from "cors";
import ViteExpress from "vite-express";
import { summaryQueryValidator } from "./validators/summaryQueryValidator";
import tripSummary from "./interactors/trip/summary";

const app = express();

app.use(cors());

app.get("/hello", async (_, res) => {
  res.json({ message: "Hello world!" });
});

app.get("/summary", async (req, res) => {
  try {
    const query = summaryQueryValidator.parse(req.query);

    const summary = await tripSummary(query);

    res.json(summary);
  } catch (e) {
    if (e instanceof Error && "errors" in e) {
      res.status(400).json({ message: e.errors });
    }
  }
});

ViteExpress.listen(app, 3008, () =>
  console.log("Server is listening on port 3008...")
);
