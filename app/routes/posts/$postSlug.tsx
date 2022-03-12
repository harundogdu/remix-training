import React from 'react';
import type {LoaderFunction} from "remix";
import {json, useLoaderData} from "remix";
import invariant from "@remix-run/dev/invariant";
import type {Post} from "~/post";
import {getPost} from "~/post";
import moment from "moment";
import styles from "~/styles/post.css";
import {Link} from "@remix-run/react";

export function links() {
    return [{rel: "stylesheet", href: styles}];
}

export const loader: LoaderFunction = async ({params}) => {
    invariant(params.postSlug, "postSlug is required");
    return json(await getPost(params.postSlug));
};

function $PostSlug() {
    const post = useLoaderData<Post>();
    return (
        <div>
            <img src={post.image} alt={post.image}/>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <div className="info-container">
                {post.tag && <p className="tag">{post.tag}</p>}
                <p>{post.author.name}</p>
                <p>{moment(post.date).format("LLL")}</p>
            </div>
            <Link to={"/posts"}>
                <button>Back</button>
            </Link>
        </div>
    );
}

export default $PostSlug;