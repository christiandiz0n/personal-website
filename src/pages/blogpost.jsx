import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import InteractiveDots from '../components/dots';
import Footer from '../components/footer';
import { marked } from 'marked';

function BlogPost() {
  const { slug } = useParams();
  
  const blogPosts = {
    "hello-world": {
      title: "Hello, World!",
      date: "March 25, 2025",
      content: `
Over the past couple of weeks, I've been gathering inspiration, designing, and building my personal website. After numerous iterations and commits, I'm finally satisfied with its current state to write about it.

My goal is for this website is to illustrate personality and document my progression as a software developer, and I cannot wait to see how my development style changes over time.

As of right now, I specialize in creating seamless and memorable user experiences through my work. Furthermore, I want to take steps in leveraging AI to better society. Check out my projects to learn a bit more.

`
    }
};
  
  const post = blogPosts[slug];
  
  if (!post) {
    return (
      <>
        <div>
          <InteractiveDots />
          <Navbar />
        </div>
        <main className="main-content">
          <div className="profile-section">
            <h1 className="main-header">Post Not Found</h1>
            <p className="main-desc">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog" className="more-posts-link">← Back to Blog</Link>
          </div>
        </main>
        <FooternoBlog />
      </>
    );
  }
  
  return (
    <>
      <div>
        <InteractiveDots />
        <Navbar />
      </div>
      <main className="main-content">
        <div className="blog-post-container">
            <br></br>
          <Link to="/blog" className="back-link" style={{
            display: 'block',
            marginBottom: '1.5rem',
            color: '#6b7280',
            textDecoration: 'none'
          }}>
            ← Back to Blog
          </Link>
          
          <div className="blog-post-header">
            <h1 className="main-header">{post.title}</h1>
            <p className="post-date">{post.date}</p>
          </div>
          
          <div className="blog-post-content" 
            dangerouslySetInnerHTML={{ 
              __html: marked.parse(post.content) 
            }} 
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default BlogPost;