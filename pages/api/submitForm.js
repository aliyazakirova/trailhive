// pages/api/submitForm.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { name, phoneNumber } = req.body;
  
      const data = {
        parent: { database_id: "a6f42c17d6eb4c7eb65cf3fe29f0ad2e" },
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
          Phone: {
            rich_text: [
              {
                text: {
                  content: phoneNumber,
                },
              },
            ],
          },
        },
      };
  
      try {
        const response = await fetch("https://api.notion.com/v1/pages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer secret_K5gF4HY3ifqy6k6T9FYnPVYtYQkUSLQ1wiXfqcICFYT`,
            "Notion-Version": "2022-06-28",
          },
          body: JSON.stringify(data),
        });
  
        if (response.ok) {
          res.status(200).json({ message: 'Submission successful!' });
        } else {
          const errorData = await response.json();
          res.status(response.status).json({ error: errorData });
        }
      } catch (error) {
        res.status(500).json({ error: 'An error occurred during submission!' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  