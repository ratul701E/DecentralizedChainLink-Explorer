
import React from 'react';
import Link from 'next/link';
import Comment from './Comment';
export interface Post {
    id: number;
    title: string;
    content: string;
    votes: number;
    comments: Comment[];
}



function Post({ id,title,content,votes,comments}:Post) {
    return (
            <div className="bg-white shadow-md p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2"> <Link href={`/post/${id}`}>{title}</Link></h2>
            <p className="text-gray-600 mb-4">{content}</p>
            <div className="flex items-center mb-4">
                <button className="mr-2">Upvote</button>
                <span>{votes}</span>
                <button className="ml-2">Downvote</button>
            </div>
            <h3 className="text-lg font-semibold mb-2">Comments</h3>
            <div>
                {comments.map(comment => (
                    <Comment key={comment.id} id={comment.id} text={comment.text} />
                ))}
            </div>
        </div>
    );
}

export default Post;

