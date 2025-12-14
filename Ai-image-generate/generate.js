export default async function handler(req, res) {
  const { prompt, image = 2 } = req.query

  if (!prompt) {
    return res.status(400).json({
      error: "Prompt required"
    })
  }

  const count = parseInt(image, 10)

  // Demo images (replace with real AI later)
  const images = Array.from({ length: count }, (_, i) =>
    `https://picsum.photos/seed/${prompt}${i}/512/768`
  )

  res.status(200).json({
    success: true,
    prompt,
    images,
    developer: "Dev | AnshApi"
  })
}
