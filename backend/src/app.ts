import express from "express"
import cors from "cors"

const app = express()

app.use(cors({
  origin: "*"
}));

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))



//routes import
import accountRouter from "./routes/Account.route.js";
import acvRouter from "./routes/Acv.route.js";
import customerRouter from "./routes/Customer.route.js";
import teamRouter from "./routes/Team.route.js";


//routes declaration
app.use("/api/v1/account", accountRouter);
app.use("/api/v1/acv", acvRouter);
app.use("/api/v1/customer", customerRouter);
app.use("/api/v1/team", teamRouter)


export { app }