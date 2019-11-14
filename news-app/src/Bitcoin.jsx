import React from 'react'

const Bitcoin = (props) => {
    const ARTICLES = props.articles.map((article, index) => (
        <h1 key={index}>{article.title}</h1>
    ))
    return (
        <>
            {ARTICLES}
        </>
    )
}

export default Bitcoin