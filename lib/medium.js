// Fetch Medium articles via RSS feed
export async function getMediumArticles(username = 'chiragnahata05') {
  try {
    // Medium RSS feed URL
    const rssUrl = `https://medium.com/feed/@${username}`;
    
    // Use RSS2JSON service to convert RSS to JSON
    const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch Medium articles');
    }
    
    const data = await response.json();
    
    if (data.status !== 'ok') {
      throw new Error('Invalid RSS feed response');
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
    return [];
  }
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
