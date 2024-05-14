// CreatePostPage.js
import React, { useState } from 'react';

function CreatePostPage() {
    const [postText, setPostText] = useState('');

    const handlePostSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (postText.trim() !== '') {
            // Here you can implement the logic to create a new post with the postText
            console.log("Creating post:", postText);
            // Reset the text box
            setPostText('');
        }
    };

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-2xl font-semibold mb-4">Create a New Post</h1>
            <form onSubmit={handlePostSubmit}>
                <textarea
                    value={postText}
                    onChange={(e) => setPostText(e.target.value)}
                    className="w-full h-32 px-4 py-2 border rounded-lg mb-4"
                    placeholder="Write your post here..."
                />
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Create Post
                </button>
            </form>
            <br />
        </div>
    );
}

export default CreatePostPage;
