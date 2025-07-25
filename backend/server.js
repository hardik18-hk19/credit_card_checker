import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import CardRoutes from "./route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4001;

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://credit-card-checker-psi.vercel.app",
    ],
    methods: ["POST", "OPTIONS"],
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Express App is Running");
});

app.use("/api", CardRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
