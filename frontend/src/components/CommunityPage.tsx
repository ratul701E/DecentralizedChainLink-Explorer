'use client'
import React, { useState } from 'react';
import Post from './Post';

function CommunityPage() {
    const [posts, setPosts] = useState([
        { 
            id: 1, 
            title: "First Post", 
            content: "Content of the first post", 
            votes: 0, 
            comments: [
                { id: 1, text: "First comment" },
                { id: 2, text: "Second comment" },
            ]
        },
        { 
            id: 2, 
            title: "Second Post", 
            content: "Content of the second post", 
            votes: 0, 
            comments: [
                { id: 3, text: "Third comment" },
                { id: 4, text: "Fourth comment" },
            ]
        },
        // Add more posts as needed
    ]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-8">Community</h1>
            <div className="grid grid-cols-1 gap-4">
                {posts.map(post => (
                    <Post 
                        key={post.id} 
                        id={post.id} 
                        title={post.title} 
                        content={post.content} 
                        votes={post.votes} 
                        comments={post.comments} 
                    />
                ))}
            </div>
        </div>
    );
}

export default CommunityPage;
