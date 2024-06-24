import express from "express";
const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
// app.use(cookieParser());

//routes import

// routes declaration
// app.use("/api/v1/users", userRouter);

// http://localhost:8000/api/v1/users/register

export { app };
