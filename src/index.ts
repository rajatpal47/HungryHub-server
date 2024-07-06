import express, { Request, Response} from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';
import userRoutes from "./routes/user.route";

mongoose
.connect(process.env.MONGODB_URI as string)
.then(() =>console.log("Connected to Mongo"))

const app = express();
app.use(express.json());
app.use(cors());

app.get("/health", async (req: Request, res: Response) => {
    res.send({message: "health ok!"})
})

app.use("/api/my/user", userRoutes)

app.listen(7000, () => {
    console.log("Server is running on port 7000");
});

