
async function fetchBlogPosts() {
    try {
        const response = await fetch('https://api.webbuilder.technolitics.com/api/v1/website-builder/website/post/get-all-posts/66e2db81cb3d9f4f044cfc54');
        const data = await response.json();
        
        if (data && data.data) {
            displayBlogPosts(data.data);
        }
    } catch (error) {
        console.error('Error fetching blog posts:', error);
    }
}

// Function to display blog posts dynamically
function displayBlogPosts(posts) {
    const blogContainer = document.getElementById('blog-container');
    blogContainer.innerHTML = ''; // Clear the container

    posts.forEach(post => {
        const { title, banner, seoDetails, createdAt, description } = post;
        const bannerImage = banner.image ? `https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/websitebuilder-s3-bucket/${banner.image}` : 'default-image.jpg';
        const postDate = new Date(createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
        const author = seoDetails.tags && seoDetails.tags.length > 0 ? seoDetails.tags[0] : 'Unknown Author';

        // Create blog card HTML
        const blogCard = `
            <div class="blog-card">
                <!-- Blog Image -->
                 <div class="blog-image"> 
                <img src="${bannerImage}" alt="Blog Cover Image">
                     <span><i class="far fa-folder"></i>Blog</span>
                        </div>
                

                    <!-- Blog Title -->
                    <h2 class="blog-title">${title}</h2>

                    <!-- Blog Meta (Date and Author) -->
                    <div class="blog-meta">
                        <span><i class="far fa-calendar"></i> ${postDate}</span>||
                        <span><i class="far fa-user"></i>PAREEK COLOURS</span>
                    </div>

                    <!-- Blog Footer (Read More link) -->
                    <div class="blog-footer">
                        <a href="blog.html?id=${post._id}" class="read-more">Read More <i class="flaticon-login"></i></a>
                    </div>
                </div>
            </div>
        `;
        
        // Append blog card to container
        blogContainer.innerHTML += blogCard;
    });
}

// Fetch blog posts on page load
fetchBlogPosts();

