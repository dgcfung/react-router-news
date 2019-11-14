import React from 'react'

const Bitcoin = (props) => {
    const ARTICLES = props.articles.map((article, index) => (
        <div className="title" key={index}>{article.title}</div>
    ))
    return (
        <>
            {ARTICLES}
        </>
    )
}

export default Bitcoin