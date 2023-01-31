import React from 'react';
import PropTypes from 'prop-types';

function Article({ articleList }) {
    let result = []
    articleList.forEach(function (article) {
        const {
            image,
            title,
            description,
            author,
            postedDate,
            minutesToRead,
            hasAudioAvailable,
            memberPreview
        } = article;
        const imageHtml = <img src={image} alt={title} />
        const titleHtml = <h3>{title}</h3>;
        const descriptionHtml = <div>{description}</div>;
        const authorHtml = <div>{author.name}</div>;
        const authorImgHtml = <img src={author.image} alt='author' />
        const formattedDate = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full' }).format(Date.parse(postedDate));
        const dateHtml = <div>{formattedDate}</div>;
        const minutesToReadHtml = <div>Min to read:  {minutesToRead}</div>;
        const hasAudioAvailableHtml = ((hasAudioAvailable) ? <div>Audio available</div> : <div />);
        const memberPreviewHtml = ((memberPreview) ? <div>Member preview</div> : <div />);
        let cell = []
        cell.push(imageHtml);
        cell.push(titleHtml);
        cell.push(descriptionHtml);
        cell.push(authorHtml);
        cell.push(authorImgHtml)
        cell.push(dateHtml);
        cell.push(minutesToReadHtml);
        cell.push(hasAudioAvailableHtml);
        cell.push(memberPreviewHtml);
        result.push(<td>{cell}</td>)
    })
    result = [<table><tbody><tr>{result}</tr></tbody></table>]
    return result
}

Article.propTypes = {
    articleList: PropTypes.array,
}

export default Article

