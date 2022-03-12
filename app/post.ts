import axios from "axios";

export type Post = {
    _id: string;
    image: string;
    title: string;
    content: string;
    tag: string;
    author: {
        _id: string;
        name: string;
    };
    date: Date;
    slug: string;
    __v: number;
}

export async function getPosts() {
    const response = await axios.get('https://hd-blog-nodejs.herokuapp.com/posts')
    return await response.data
}

export async function getPost(slug: string) {
    const response = await axios.get(`https://hd-blog-nodejs.herokuapp.com/posts/${slug}`)
    return await response.data
}