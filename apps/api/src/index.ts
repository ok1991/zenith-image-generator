import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

// Enable CORS for frontend
app.use('/*', cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'],
  allowMethods: ['GET', 'POST', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'X-API-Key'],
}))

app.get('/', (c) => {
  return c.json({ message: 'Z-Image API is running' })
})

// Placeholder for image generation endpoint
app.post('/generate', async (c) => {
  return c.json({ message: 'Generate endpoint - to be implemented' })
})

export default app
