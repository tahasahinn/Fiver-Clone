import express from "express";s
const app = express();s
const port = 3000;s
app.get("/", (req, res) => {s
    res.send("Serverdan MerhabalarR");s
    
});
app.listen(port, () => {
    console.log(`🎾 Server ${port}. portu dinlemeye başladı`);
});
