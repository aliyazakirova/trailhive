# TrailHive

![TrailHive](https://trailhive.vercel.app/favicon.ico)

## Overview

Welcome to TrailHive, a modern and responsive website built using **Next.js**, **Tailwind CSS**, and **Framer Motion**. This project features smooth animations, a sleek design, and a modal for collecting user information, which is then stored in a **Notion** database.

## Live Demo

Check out the live demo: [TrailHive](https://trailhive.vercel.app/)

## Background

This project began with a Figma file I discovered in the Figma community:

[SaaS, Nature Company — Webflow Landing Page Design](<https://www.figma.com/design/1z7V1a67smsASzZWGPVpp5/SaaS%2C-Nature-Company-%E2%80%94-Webflow-Landing-Page-Design-(Community)?node-id=1-1263&t=Isdrdm2nB6NHFxbM-0>)

I aimed to recreate the desktop design as pixel-perfect as possible. Since the Figma file did not include tablet and mobile versions, I developed the responsive design myself. I also added animations to enhance the user experience and implemented a modal to collect user information, which is sent to Notion.

## Features

- **Next.js**: Server-side rendering and static site generation for improved performance.
- **Tailwind CSS**: Utility-first CSS framework for rapid and flexible UI development.
- **Framer Motion**: Advanced animations and transitions for a dynamic user experience.
- **Notion**: Database integration for storing and managing user information collected through the modal.

## Getting Started

To get a copy of the project running on your local machine, follow these steps:

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/trailhive.git
   cd trailhive

   ```

2. **Install dependencies:**
   npm install

3. **Set up Notion integration:**

Create a Notion database to store user information.

Obtain Notion API credentials and database ID.

Create a .env file in the root directory and add the following environment variables:

NOTION_API_KEY=your_notion_api_key
NOTION_DATABASE_ID=your_notion_database_id
Run the development server: npm run dev

Open http://localhost:3000 in your browser to see the project in action.

## Usage

Animations and Transitions
TrailHive uses Framer Motion for smooth animations and transitions. You can customize these animations in the respective components to match your design preferences.

## Tailwind CSS

The project is styled with Tailwind CSS. You can extend or modify existing styles in the tailwind.config.js file and add custom CSS classes in the styles directory.

## Form Submission

The site features a modal for collecting user information and storing it in a Notion database. Ensure your Notion credentials and database configuration are correctly set in the .env.local file.
