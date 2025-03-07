export default function handler(req, res) {
    if (req.method === 'POST') {
      try {
        res.status(200).json({ success: true, message: 'API endpoint is working!' });
      } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, error: error.message });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }