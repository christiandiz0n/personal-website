import React from 'react';
import Navbar from '../components/navbar';
import InteractiveDots from '../components/dots';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Hello, World!",
      date: "March 25, 2025",
      slug: "hello-world"
    },
  ];

  return (
    <>
      <div>
        <InteractiveDots />
        <Navbar />
      </div>
      <main className="main-content">
        <div className="profile-section">
          <h1 className="main-header">My Blog</h1>
          <p className="main-desc">Documenting my journey 🙂</p>
        </div>
        
        <div className="post-list">
          {blogPosts.map((post) => (
            <div className="post-item" key={post.id}>
              <Link to={`/blog/${post.slug}`} className="post-title">
                {post.title}
              </Link>
              <p className="post-date">{post.date}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Blog;