import express, { Application, Request, Response } from "express";
import mhsRouter from "./routes/mhs";

const app: Application = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send(" jalan cuy");
});

app.use("/", mhsRouter);

app.use((req: Request, res: Response) => {
  res.status(404).json({
    status: "error",
    message: "salah endpoint",
  });
});

app.listen(PORT, () => {
  console.log(`jalan disini bre http://localhost:${PORT}`);
});
