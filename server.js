import express from "express";


const app = express();

const PORT = 3000;

app.use(express.json());


app.get('/', (req,res) => {
    return res.send({status:"working"});
});

// Routes
import { UserRoutes } from "./Routes/UserRoutes.js";
app.use('/user', UserRoutes);


app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${3000}`)
});