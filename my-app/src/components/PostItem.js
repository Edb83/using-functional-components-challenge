import React from 'react'
import css from "./css/PostItem.module.css"

export default function PostItem(props) {
    return (
        props.savedPosts.map(post => {
            const {title, sentence, description, name, image} = post;
            return (
                <div key={title} className={css.SearchItem}>
                    <p>{title}</p>
                    <p>{name}</p>
                    <img src={image} alt={sentence} />
                    <p>{description}</p>
                </div>
            )
        })
    )
}
