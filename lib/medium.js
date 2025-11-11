// Fetch Medium articles via RSS feed
export async function getMediumArticles(username = 'chiragnahata05') {
  try {
    // Medium RSS feed URL
    const rssUrl = `https://medium.com/feed/@${username}`;
    
    // Use RSS2JSON service to convert RSS to JSON with API key
    const apiKey = 'your-api-key-here'; // Get free API key from https://rss2json.com
    const apiUrl = apiKey && apiKey !== 'your-api-key-here' 
      ? `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}&api_key=${apiKey}`
      : `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
    
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      console.warn('RSS2JSON API failed, returning mock data');
      return getMockArticles();
    }
    
    const data = await response.json();
    
    if (data.status !== 'ok' || !data.items || data.items.length === 0) {
      console.warn('No articles found, returning mock data');
      return getMockArticles();
    }
    
    // Transform the articles to our format
    const articles = data.items.map(item => ({
      id: item.guid,
      title: item.title,
      excerpt: stripHtml(item.description || item.content).substring(0, 200) + '...',
      date: formatDate(item.pubDate),
      readTime: calculateReadTime(item.content),
      category: item.categories?.[0] || 'Article',
      slug: extractSlug(item.link),
      link: item.link,
      image: extractImage(item.content) || '/blog/default.jpg',
      tags: item.categories || [],
      author: item.author,
    }));
    
    return articles;
  } catch (error) {
    console.error('Error fetching Medium articles:', error);
    return getMockArticles();
  }
}

// Mock articles for fallback
function getMockArticles() {
  return [
    {
      id: '1',
      title: 'Building AI-Powered Applications with Modern Stack',
      excerpt: 'Exploring how to integrate AI/ML models into full-stack applications using React, Next.js, and TensorFlow...',
      date: 'November 1, 2024',
      readTime: 8,
      category: 'AI/ML',
      slug: 'building-ai-powered-applications',
      link: 'https://medium.com/@chiragnahata05',
      image: '/blog/default.jpg',
      tags: ['AI', 'Machine Learning', 'React', 'Next.js'],
      author: 'Chirag Nahata',
    },
    {
      id: '2',
      title: 'Cybersecurity Best Practices for Web Developers',
      excerpt: 'Essential security measures every developer should implement to protect their applications and users...',
      date: 'October 15, 2024',
      readTime: 10,
      category: 'Cybersecurity',
      slug: 'cybersecurity-best-practices',
      link: 'https://medium.com/@chiragnahata05',
      image: '/blog/default.jpg',
      tags: ['Security', 'Web Development', 'Best Practices'],
      author: 'Chirag Nahata',
    },
    {
      id: '3',
      title: 'From Idea to Patent: My Journey in Innovation',
      excerpt: 'Sharing my experience of filing 6 patents and the process of turning innovative ideas into intellectual property...',
      date: 'September 20, 2024',
      readTime: 12,
      category: 'Innovation',
      slug: 'idea-to-patent-journey',
      link: 'https://medium.com/@chiragnahata05',
      image: '/blog/default.jpg',
      tags: ['Patents', 'Innovation', 'Entrepreneurship'],
      author: 'Chirag Nahata',
    },
    {
      id: '4',
      title: 'Leading a Tech Startup: Lessons from Digidenone',
      excerpt: 'Key learnings and challenges faced while building and scaling an AI-powered digital solutions startup...',
      date: 'August 10, 2024',
      readTime: 15,
      category: 'Entrepreneurship',
      slug: 'leading-tech-startup',
      link: 'https://medium.com/@chiragnahata05',
      image: '/blog/default.jpg',
      tags: ['Startup', 'Leadership', 'Entrepreneurship'],
      author: 'Chirag Nahata',
    },
    {
      id: '5',
      title: 'Full Stack Development in 2024: Technologies & Trends',
      excerpt: 'A comprehensive guide to modern full-stack development tools, frameworks, and industry trends...',
      date: 'July 25, 2024',
      readTime: 9,
      category: 'Development',
      slug: 'full-stack-development-2024',
      link: 'https://medium.com/@chiragnahata05',
      image: '/blog/default.jpg',
      tags: ['Full Stack', 'Web Development', 'Trends'],
      author: 'Chirag Nahata',
    },
    {
      id: '6',
      title: 'Machine Learning Project Portfolio: Case Studies',
      excerpt: 'Detailed walkthroughs of real-world ML projects including computer vision and NLP applications...',
      date: 'June 15, 2024',
      readTime: 20,
      category: 'AI/ML',
      slug: 'ml-project-portfolio',
      link: 'https://medium.com/@chiragnahata05',
      image: '/blog/default.jpg',
      tags: ['Machine Learning', 'Computer Vision', 'NLP'],
      author: 'Chirag Nahata',
    },
  ];
}

// Helper function to strip HTML tags
function stripHtml(html) {
  if (!html) return '';
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .trim();
}

// Helper function to format date
function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

// Helper function to calculate read time
function calculateReadTime(content) {
  const text = stripHtml(content);
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / wordsPerMinute);
  return readTime;
}

// Helper function to extract slug from Medium URL
function extractSlug(url) {
  const parts = url.split('/');
  return parts[parts.length - 1] || 'article';
}

// Helper function to extract first image from content
function extractImage(content) {
  if (!content) return null;
  
  const imgRegex = /<img[^>]+src="([^">]+)"/;
  const match = content.match(imgRegex);
  
  return match ? match[1] : null;
}

// Get unique categories from articles
export function getCategories(articles) {
  const categories = new Set(['All']);
  articles.forEach(article => {
    if (article.category) {
      categories.add(article.category);
    }
  });
  return Array.from(categories);
}
