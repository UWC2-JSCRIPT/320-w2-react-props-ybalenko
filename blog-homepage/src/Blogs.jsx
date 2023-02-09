import React from 'react';
import yourArticles from './your-articles.json';
import missedArticles from './missed-articles.json';

const sectionList = [
    { key: 'For you', blogItem: yourArticles },
    { key: 'In case you missed it', blogItem: missedArticles },
]

function Blogs() {
    const blogs = sectionList.map((section) => {
        const blogsHtml = renderBlog(section.blogItem)
        return (
            <>
                <h2>{section.key}</h2>
                <div className='blog-container'>
                    <div class='grid-container'>{blogsHtml}</div>
                </div>
            </>
        )
    })
    return blogs

}


function renderBlog(blogItem) {
    const blogs = blogItem.map((blog, idx) => {
        return <div className='blog' key={idx}>
            <img className='blog-img' src={blog.image} alt='title' />
            {blog.hasAudioAvailable && <span>Has audio</span>}
            {blog.memberPreview && <span className='grid-item'>Memeber preview</span>}
            <h4>{blog.title}</h4>
            <p>{blog.description}</p>
            <img className='author-img' src={blog.author.image} alt='author' />
            <span>{blog.author.name}</span>
            <span className='grid-item'>{new Intl.DateTimeFormat('en-GB', { dateStyle: 'full' }).format(Date.parse(blog.postedDate))}</span>
            <span>Min to read:  {blog.minutesToRead}</span>

        </div >
    })
    return blogs
}



export default Blogs;

