// Sample blog posts
const blogPosts = [
    {
      title: "My First Blog Post",
      content: "This is the content of my first blog post.",
      date: "May 1, 2023",
      image: "path/to/image.jpg",
      video: "path/to/video.mp4"
    },
    // Add more blog posts here
  ];
  
  // Function to generate blog post HTML
  function generateBlogPostHTML(blogPost) {
    let html = `
      <div class="blog-post">
        <h3>${blogPost.title}</h3>
        <p>${blogPost.content}</p>
        <p>Date: ${blogPost.date}</p>
    `;
    
    if (blogPost.image) {
      html += `<img src="${blogPost.image}" alt="Blog Image">`;
    }
  
    if (blogPost.video) {
      html += `<video src="${blogPost.video}" controls></video>`;
    }
  
    html += `</div>`;
  
    return html;
  }
  
  // Function to render blog posts
  function renderBlogPosts() {
    const blogPostsContainer = document.getElementById('blog-posts');
  
    // Clear existing blog posts
    blogPostsContainer.innerHTML = '';
  
    // Generate HTML for each blog post
    blogPosts.forEach(blogPost => {
      const blogPostHTML = generateBlogPostHTML(blogPost);
      blogPostsContainer.innerHTML += blogPostHTML;
    });
  }
  
  // Function to handle form submission
  function handleFormSubmit(event) {
    event.preventDefault();
  
    // Get form inputs
    const titleInput = document.getElementById('title');
    const contentInput = document.getElementById('content');
    const dateInput = document.getElementById('date');
    const imageInput = document.getElementById('image');
    const videoInput = document.getElementById('video');
  
    // Create a new blog post object
    const newBlogPost = {
      title: titleInput.value,
      content: contentInput.value,
      date: dateInput.value,
      image: imageInput.value,
      video: videoInput.value
    };
  
    // Add the new blog post to the array
    blogPosts.push(newBlogPost);
  
    // Clear form inputs
    titleInput.value = '';
    contentInput.value = '';
    dateInput.value = '';
    imageInput.value = '';
    videoInput.value = '';
  
    // Render the updated blog posts
    renderBlogPosts();
  }
  
  // Add event listener to the form
  const blogForm = document.getElementById('blog-form');
  blogForm.addEventListener('submit', handleFormSubmit);
  
  // Render the initial blog posts
  renderBlogPosts();
  