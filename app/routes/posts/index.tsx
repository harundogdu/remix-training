import React from 'react';
import {Link} from "@remix-run/react";
// @ts-ignore
import {json, useLoaderData} from "remix";
import styles from "../../styles/post.css";
import type {Post} from "~/post";
import {getPosts} from "~/post";

export function links() {
    return [{rel: "stylesheet", href: styles}];
}

export const loader = async () => {
    return json(await getPosts())
};

function Index() {
    const posts = useLoaderData<Post[]>();
    return (
        <div>
            <div className="container">
                {posts.map((post) => {
                    return (
                        <div key={post._id} className="inner_container">
                            <Link to={`/posts/${post.slug}`}>
                                <div className="">
                                    {
                                        post.image &&
                                        <img src={post.image} alt={`Post ${post.title}`}/>
                                    }
                                    <h5>{post.title}</h5>
                                    <p>
                                        {post.content}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
            <Link to={'/'}>
                <div className="button_container">
                    <button>
                        Ana Sayfaya Dön
                    </button>
                </div>
            </Link>
        </div>
    );
}

export default Index;