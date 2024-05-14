
import React, { useState, useEffect } from 'react';
import Comment from './Comment';


function PostBox() {
    const [newComment, setNewComment] = useState('');
    const [allComments, setAllComments] = useState<Comment[]>([]);

   
    useEffect(() => {

        const fetchedComments = [
            { id: 1, text: "Comment 1" },
            { id: 2, text: "Comment 2" }
        ];
        setAllComments(fetchedComments);
    }, []);

    const handleCommentSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (newComment.trim() !== '') {
            const newCommentObj = { id: allComments.length + 1, text: newComment };
            setAllComments([...allComments, newCommentObj]);
            setNewComment('');
        }
    };

    return (
        <>
            <h3 className="text-lg font-semibold mb-2">Comments</h3>
            <div>
                {allComments.map(comment => (
                    <Comment key={comment.id} text={comment.text} id={comment.id} />
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
