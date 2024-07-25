TrailHive

Overview
TrailHive is a modern, responsive website built with Next.js, Tailwind CSS, and Framer Motion. It features dynamic animations and a sleek design. The site collects user information through a modal and stores it in a Notion database.

Live Demo
Check out the live demo: TrailHive

Background
I started this project with a Figma file I found in the Figma community: SaaS, Nature Company — Webflow Landing Page Design. My goal was to recreate the desktop design pixel perfect to the existing design. Since the Figma file did not include tablet and mobile versions, I developed the adaptive versions myself. I also added animations to my taste and implemented a modal to collect user information, which is then sent to Notion.

Features
Next.js: Server-side rendering and static site generation.
Tailwind CSS: Utility-first CSS framework for rapid UI development.
Framer Motion: Powerful animations and transitions.
Notion: Store and manage user information collected from the modal.
Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
Node.js (v14 or higher)
npm or yarn
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/trailhive.git
cd trailhive
Install dependencies:

bash
Copy code
npm install
# or
yarn install
Set up Notion integration:

Create a Notion database to store user information.

Obtain Notion API credentials and database ID.

Create a .env.local file in the root directory and add the following environment variables:

env
Copy code
NOTION_API_KEY=your_notion_api_key
NOTION_DATABASE_ID=your_notion_database_id
Run the development server:

bash
Copy code
npm run dev
# or
yarn dev
Open http://localhost:3000 with your browser to see the result.
