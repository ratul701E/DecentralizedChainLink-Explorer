// components/Post.js
import React, { useState } from 'react';
import Link from 'next/link';
import Comment from './Comment';
import PostBox from './Postbox';

export interface Post {
    id: number;
    title: string;
    content: string;
    votes: number;
    comments: Comment[];
}

function Post({ id, title, content, votes, comments }: Post) {
    const [allComments, setAllComments] = useState(comments);
    const [showPostBox, setShowPostBox] = useState(false);

    // const togglePostVisibility = () => {
    //     setShowPostBox(!showPostBox);
    // };

    const handlePostClick = () => {
        setShowPostBox(true);
    };

    return (
        <div className="bg-white shadow-md p-4 rounded-lg" onClick={handlePostClick}>
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-600 mb-4">{content}</p>
            <div className="flex items-center mb-4">
                <button className="mr-2">Upvote</button>
                <span>{votes}</span>
                <button className="ml-2">Downvote</button>
            </div>
            {showPostBox && <PostBox />}
        </div>
    );
}

export default Post;
