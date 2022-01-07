import React from 'react'
import css from "./css/PostItem.module.css"

export default function PostItemAPI(props) {
    return (
        props.savedPosts.map(post => {
            const {id, type, user, webformatURL, tags} = post;
            return (
                <div key={id} className={css.SearchItem}>
                    <p>Artwork type: {type}</p>
                    <p>Artist: {user}</p>
                    <img src={webformatURL} alt={user} />
                    <p>Tags: {tags}</p>
                </div>
            )
        })
    )
}
