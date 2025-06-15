import { useEffect, useState } from "react";

interface BlogPost {
  title: string;
  summary: string;
  date: string;
  slug: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}content/posts.json`)
      .then((res) => res.json())
      .then(setPosts)
      .catch((err) => console.error("Failed to load posts", err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">📝 Blog</h1>
      {posts.length === 0 && <p>No blog posts found.</p>}
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.summary}</p>
            <p className="text-sm text-gray-400">{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
