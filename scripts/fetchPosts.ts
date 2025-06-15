import { Client } from "@notionhq/client";
import fs from "fs";
import { NOTION_TOKEN, DATABASE_ID } from "../notion-client/config";

const notion = new Client({ auth: NOTION_TOKEN });

async function fetchPosts() {
  const response = await notion.databases.query({
    database_id: DATABASE_ID,
    filter: {
      property: "Published",
      checkbox: { equals: true },
    },
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
  });

  const posts = response.results.map((page: any) => ({
    id: page.id,
    title: page.properties.Title.title[0]?.plain_text || "Untitled",
    date: page.properties.Date.date.start,
    tags: page.properties.Tags.multi_select.map((tag: any) => tag.name),
    url: `https://notion.so/${page.id.replace(/-/g, "")}`,
  }));

  fs.mkdirSync("public/content", { recursive: true });
  fs.writeFileSync("public/content/posts.json", JSON.stringify(posts, null, 2));
  console.log("✅ Blog posts written to public/content/posts.json");
}

fetchPosts().catch(console.error);
