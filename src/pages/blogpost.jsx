import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import InteractiveDots from '../components/dots';
import FooternoBlog from '../components/footernoblog';
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
    },
    "my-first-hackathon-win": {
      title: "My first Hackathon win!",
      date: "April 19, 2025",
      content: `
When I first started my journey within software development, I quite honestly did not know if it was for me. I was unsure if I would fit into the field of tech, and I definitely did not know if this was my passion, something that I would be pursing for the rest of my life.

But as days went on, I grew more and more comfortable with the problem-solving aspect of development, and most importantly, the creative aspect.

I found that I loved taking an idea and bringing it to life through code, and whether it was addressing a small problem or building a full-scale application, I learned to love the process.

I was able to showcase my skills and work with a team of talented engineers to build Algora, the only job-application tool that you will ever need.

Algora is a web application designed to simplify and automate the job application process through intelligent matching and seamless data integration. It leverages a frontend built with React and Next.js, automation tools like Selenium and Puppeteer for scraping user data, and databases such as Postgres and NoSQL, secured by Auth0 authentication. Algora creates personalized job recommendations and tailored applications by extracting and analyzing data from GitHub, Devpost, LinkedIn, and local code directories, effectively transforming tedious job hunting into a streamlined, empowering experience.

Some key development challenges included overcoming dynamic content scraping issues, ensuring robust security for user credentials, handling inconsistent local data formats, and scaling automation to bypass rate limits and IP restrictions.

Ultimately, Algora enables job seekers to effortlessly apply at scale, confidently presenting their strongest skills and projects.

Thank you to the HOF Captial and Tech @ NYU teams for the opportunity.

I cannot wait to see what the future holds for Algora, and I cannot wait to continue to grow as an engineer, problem solver, and creator.
`
    }
  }
  
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
      <FooternoBlog />
    </>
  );
}

export default BlogPost;