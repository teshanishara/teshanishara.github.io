/* ==========================================================================
   LMS RATINGS & REVIEWS MODULE
   ========================================================================== */

export const getReviews = () => {
    let reviews = JSON.parse(localStorage.getItem('lms_reviews'));
    if (!reviews) {
        reviews = [
            { name: "Suresh Perera", rating: 5, comment: "මෙම පාඨමාලාව ඉතාමත් පැහැදිලි මට්ටමකින් සකසා ඇත. QGIS මූලධර්ම ඉගෙන ගැනීමට ඉතාමත් හොඳයි.", date: "2026-06-10" },
            { name: "Sarah Jenkins", rating: 5, comment: "The detailed UTM coordinate systems slide resolved all my alignment problems. Highly recommended!", date: "2026-06-15" },
            { name: "Pradeep Kumara", rating: 4, comment: "ප්‍රායෝගික පැවරුම් සහ නිබන්ධන ඉතාමත් වටිනවා. සහතිකය ලබා ගැනීමට ලැබීම සතුටක්.", date: "2026-06-20" }
        ];
        localStorage.setItem('lms_reviews', JSON.stringify(reviews));
    }
    return reviews;
};

export const updateAggregatedRatingDisplay = () => {
    const reviews = getReviews();
    const count = reviews.length;
    const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
    const avg = count > 0 ? (sum / count).toFixed(1) : "0.0";
    
    const avgBadge = document.getElementById('course-avg-rating-badge');
    const countBadge = document.getElementById('course-review-count-badge');
    if (avgBadge) avgBadge.innerText = avg;
    if (countBadge) countBadge.innerText = count;
};

export const renderReviewsTab = (currentUser, currentLang, tabContentArea, redirectLoginCallback) => {
    const reviews = getReviews();
    const count = reviews.length;
    const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
    const avg = count > 0 ? (sum / count).toFixed(1) : "0.0";
    
    let starsHTML = '';
    const fullStars = Math.floor(avg);
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            starsHTML += '<i class="fa-solid fa-star"></i>';
        } else {
            starsHTML += '<i class="fa-regular fa-star"></i>';
        }
    }

    let formHTML = '';
    if (currentUser) {
        formHTML = `
            <div class="review-form-card">
                <h5 class="review-form-title">${currentLang === 'en' ? 'Submit Your Review' : 'ඔබේ අදහස එක් කරන්න'}</h5>
                <div class="star-rating-input" id="review-stars-select">
                    <i class="fa-solid fa-star active" data-rating="1"></i>
                    <i class="fa-solid fa-star active" data-rating="2"></i>
                    <i class="fa-solid fa-star active" data-rating="3"></i>
                    <i class="fa-solid fa-star active" data-rating="4"></i>
                    <i class="fa-solid fa-star active" data-rating="5"></i>
                </div>
                <textarea class="review-form-textarea" id="review-comment-input" rows="3" placeholder="${
                    currentLang === 'en' ? 'Write your review here...' : 'ඔබේ විචාරය මෙහි ලියන්න...'
                }" required></textarea>
                <button type="button" class="btn btn-primary btn-block" id="btn-submit-review">${
                    currentLang === 'en' ? 'Submit Review' : 'විචාරය ඉදිරිපත් කරන්න'
                }</button>
            </div>
        `;
    } else {
        formHTML = `
            <div class="review-form-card" style="text-align: center; border: 1px dashed rgba(255,255,255,0.06); padding: var(--space-4); border-radius: 8px;">
                <p style="color: var(--text-secondary); margin-bottom: 0.5rem; font-size: 0.9rem;">${
                    currentLang === 'en' ? 'Please log in to leave a review.' : 'විචාරයක් ලිවීම සඳහා කරුණාකර ලොග් වන්න.'
                }</p>
                <button type="button" class="btn btn-outline btn-mini" id="btn-redirect-login">${
                    currentLang === 'en' ? 'Login Now' : 'දැන් ලොග් වන්න'
                }</button>
            </div>
        `;
    }

    if (tabContentArea) {
        tabContentArea.innerHTML = `
            <div class="reviews-tab-container" style="display: grid; grid-template-columns: 1fr 1.3fr; gap: var(--space-6);">
                <div class="reviews-left-col" style="display: flex; flex-direction: column; gap: var(--space-4);">
                    <div class="rating-summary-card" style="background: rgba(255,255,255,0.01); border: 1px solid rgba(255,255,255,0.05); padding: var(--space-6); border-radius: 8px; text-align: center;">
                        <span class="big-rating-number" style="font-family: var(--font-heading); font-size: 3rem; font-weight: 700; color: var(--accent-mint); line-height: 1;">${avg}</span>
                        <div class="rating-stars-display" style="color: #ffb300; margin: var(--space-2) 0; font-size: 0.9rem;">${starsHTML}</div>
                        <span class="rating-count-label" style="font-size: 0.8rem; color: var(--text-secondary);">${currentLang === 'en' ? `Based on ${count} reviews` : `විචාර ${count} ක් මත පදනම්ව`}</span>
                    </div>
                    ${formHTML}
                </div>
                <div class="reviews-right-col">
                    <div class="reviews-list-container" style="display: flex; flex-direction: column; gap: var(--space-4); max-height: 380px; overflow-y: auto; padding-right: 0.5rem;">
                        ${reviews.map(r => {
                            let rStars = '';
                            for (let i = 0; i < 5; i++) {
                                rStars += i < r.rating ? '<i class="fa-solid fa-star"></i>' : '<i class="fa-regular fa-star"></i>';
                            }
                            return `
                                <div class="review-card-item" style="background: rgba(255,255,255,0.01); border: 1px solid rgba(255,255,255,0.04); border-radius: 8px; padding: var(--space-4);">
                                    <div class="review-card-header" style="display: flex; justify-content: space-between; margin-bottom: 0.25rem;">
                                        <span class="reviewer-name" style="font-family: var(--font-heading); font-weight: 600; font-size: 0.95rem;">${r.name}</span>
                                        <span class="review-date" style="font-size: 0.75rem; color: var(--text-muted);">${r.date}</span>
                                    </div>
                                    <div class="review-card-stars" style="color: #ffb300; font-size: 0.75rem; margin-bottom: 0.5rem;">${rStars}</div>
                                    <p class="review-comment" style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.5;">${r.comment}</p>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            </div>
        `;

        // Bind redirect login action
        const btnRedir = document.getElementById('btn-redirect-login');
        if (btnRedir && redirectLoginCallback) {
            btnRedir.addEventListener('click', redirectLoginCallback);
        }

        // Bind events for custom star selecting
        const starsContainer = document.getElementById('review-stars-select');
        if (starsContainer) {
            let selectedRating = 5;
            const stars = starsContainer.querySelectorAll('i');
            stars.forEach(star => {
                star.style.cursor = 'pointer';
                star.addEventListener('click', () => {
                    selectedRating = parseInt(star.getAttribute('data-rating'));
                    stars.forEach((s, idx) => {
                        s.style.color = idx < selectedRating ? '#ffb300' : 'rgba(255,255,255,0.15)';
                    });
                });
            });

            // Initialize star styles
            stars.forEach((s, idx) => {
                s.style.color = idx < selectedRating ? '#ffb300' : 'rgba(255,255,255,0.15)';
                s.style.marginRight = '4px';
                s.style.fontSize = '1.1rem';
            });

            document.getElementById('btn-submit-review').addEventListener('click', () => {
                const comment = document.getElementById('review-comment-input').value.trim();
                if (!comment) {
                    alert(currentLang === 'en' ? "Please write a review comment." : "කරුණාකර අදහසක් ලියන්න.");
                    return;
                }
                const newReview = {
                    name: currentUser.name,
                    rating: selectedRating,
                    comment: comment,
                    date: new Date().toISOString().split('T')[0]
                };
                const allReviews = getReviews();
                allReviews.unshift(newReview);
                localStorage.setItem('lms_reviews', JSON.stringify(allReviews));
                alert(currentLang === 'en' ? "Thank you for your review!" : "ඔබගේ විචාරයට ස්තූතියයි!");
                updateAggregatedRatingDisplay();
                renderReviewsTab(currentUser, currentLang, tabContentArea, redirectLoginCallback);
            });
        }
    }
};
