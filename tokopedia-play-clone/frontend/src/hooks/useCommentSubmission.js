import { useState } from 'react';

// Custom hook: useCommentSubmission
function useCommentSubmission() {
  const [comments, setComments] = useState([]);

  const submitComment = async (commentData) => {
    try {
      const response = await fetch(`http://localhost:3000/comment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData),
      });

      if (!response.ok) {
        throw new Error('Comment submission failed');
      }

      setComments((prevComments) => [...prevComments, commentData]);
    } catch (error) {
      console.error(error);
    }
  };

  const pushInitialComments = (initialComments) => {
    setComments(initialComments);
  };

  return {
    comments,
    pushInitialComments,
    submitComment,
  };
}

export default useCommentSubmission;
