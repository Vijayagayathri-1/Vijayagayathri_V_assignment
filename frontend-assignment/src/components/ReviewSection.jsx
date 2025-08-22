import React, { useState } from 'react';
import './reviewSection.css'; 

const reviewsPerPage = 3;

const ReviewSection = ({ reviews }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * reviewsPerPage;
  const endIndex = startIndex + reviewsPerPage;
  const currentReviews = reviews.slice(startIndex, endIndex);

  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="reviews-section">
      <h3>Customer Reviews</h3>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        <>
          <div className="reviews-list">
            {currentReviews.map((review) => (
              <div key={review.id} className="review-item">
                <p className="review-author"><strong>{review.author}</strong> - {review.rating} ⭐</p>
                <p className="review-comment">"{review.comment}"</p>
              </div>
            ))}
          </div>
          {totalPages > 1 && (
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`pagination-btn ${currentPage === index + 1 ? 'active' : ''}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ReviewSection;