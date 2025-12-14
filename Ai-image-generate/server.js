import express from "express"
import fetch from "node-fetch"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static("public"))

app.get("/api/generate", async (req, res) => {
  const { prompt, image = 1 } = req.query

  if (!prompt) {
    return res.status(400).json({ error: "Prompt required" })
  }

  // 🔴 Replace this with your real image generation logic
  const fakeImages = []
  for (let i = 0; i < image; i++) {
    fakeImages.push(
      `https://picsum.photos/seed/${Math.random()}/512/768`
    )
  }

  res.json({
    success: true,
    prompt,
    images: fakeImages,
    developer: "Dev | AnshApi"
  })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
)
