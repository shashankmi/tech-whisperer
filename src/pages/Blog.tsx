import { useEffect, useState } from "react";

interface BlogPost {
  id: string;
  title: string;
  date: string;
  tags: string[];
  url: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch("/content/posts.json")
      .then((res) => res.json())
      .then(setPosts)
      .catch(() => console.error("Failed to load posts.json"));
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">📝 Blog</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.id} className="border-b pb-4">
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-blue-600 hover:underline"
            >
              {post.title}
            </a>
            <div className="text-sm text-gray-500">{new Date(post.date).toDateString()}</div>
            <div className="mt-1 text-xs text-gray-700">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-gray-200 px-2 py-0.5 mr-2 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
