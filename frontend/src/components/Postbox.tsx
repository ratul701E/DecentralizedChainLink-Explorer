
import React, { useState, useEffect } from 'react';
import Comment from './Comment';
import { IComment } from './CommunityPage';



function PostBox({comments}:any) {
    const [newComment, setNewComment] = useState('');
    const [allComments, setAllComments] = useState<IComment[]>(comments);


    const handleCommentSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        
    };

    return (
        <>
            <h3 className="text-lg font-semibold mb-2">Comments</h3>
            <div>
                {allComments.map(comment => (
                    <Comment key={comment.id} text={comment.content} id={comment.id} />
                ))}
            </div>
            <form onSubmit={handleCommentSubmit} className="mt-4">
                <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a new comment..."
                    className="px-3 py-1 w-full border rounded"
                />
                <button type="submit" className="mt-2 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Add Comment</button>
            </form>
        </>
    );
}

export default PostBox;
