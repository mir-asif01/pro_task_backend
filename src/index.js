import express from "express"
import cors from "cors"
import dotenv from "dotenv"
const app = express()
const port = process.env.PORT ?? 4000

app.use(express.json())
app.use(cors())
dotenv.config()

app.get("/", (req, res) => {
    res.send("server running")
})

async function main() {
    try {

    } catch (error) {
        if (error) {
            console.log("db connection error");
        }
    }
}

main().catch(err => console.log(err))

app.listen(port, () => {
    console.log(`running on http://localhost:${port}`);
})