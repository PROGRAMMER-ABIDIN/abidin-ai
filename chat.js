export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');
  
    const apiKey = process.env.GEMINI_API_KEY;
  
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body),
      });
  
      const data = await response.json();
      res.status(200).json(data);
  
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  