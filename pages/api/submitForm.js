import { config } from 'dotenv';
config();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, phoneNumber } = req.body;

    try {
      const notionToken = process.env.NOTION_TOKEN;
      const notionDatabaseId = process.env.NOTION_DATABASE_ID;

      const response = await fetch(`https://api.notion.com/v1/pages`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${notionToken}`,
          'Content-Type': 'application/json',
          'Notion-Version': '2022-06-28',
        },
        body: JSON.stringify({
          parent: { database_id: notionDatabaseId },
          properties: {
            Name: {
              title: [
                {
                  text: {
                    content: name,
                  },
                },
              ],
            },
            'Phone Number': {
              multi_select: [
                {
                  name: phoneNumber,
                },
              ],
            },
          },
        }),
      });

      if (response.ok) {
        res.status(200).json({ message: 'Submission successful!' });
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
        res.status(response.status).json({ message: 'Submission failed!' });
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'An error occurred during submission!' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
