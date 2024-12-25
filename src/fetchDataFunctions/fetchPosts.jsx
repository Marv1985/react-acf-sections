const fetchPosts = async () => {
    const response = await fetch('https://hlg-testing.co.uk/hush_staging/wp-json/wp/v2/pages?per_page=20');
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const posts = await response.json();
  
    return posts
    
  };

  export default fetchPosts