// pages/post/[postId].js
'use client'
import React from 'react';
import Comment from '@/components/Comment';
import PostDetail from '@/components/PostDetails';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';

function PostPage() {
    const router = useRouter();
   // const { postId } = router.query;

    // Fetch post details based on postId
    // This is just a mock post, you should fetch it from your backend
    const post = {
        id: 1,
        title: "Post Title",
        content: "Post Content",
        votes: 0,
        comments: [
            { id: 1, text: "Comment 1" },
            { id: 2, text: "Comment 2" }
        ]
    };

    return (
        <>
        <Navbar />
        <br /><br />
        <div className="container mx-auto p-4">
            <PostDetail
                id={post.id}
                title={post.title}
                content={post.content}
                votes={post.votes}
                comments={post.comments}
            />
        </div>
        </>
    );
}

export default PostPage;