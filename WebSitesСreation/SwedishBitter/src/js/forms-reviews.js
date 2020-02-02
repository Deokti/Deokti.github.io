(function() {
    const allTabReviews = document.querySelectorAll('.reviews-tabs__tab');
    allTabReviews.forEach(item => {
        item.addEventListener('click', function({target}) {
            let attribute = this.getAttribute('data');
            document.querySelectorAll('.reviews-content__reviews').forEach(element => {
                element.style.display = 'none';
            });
            document.querySelector(`.reviews-content__reviews[data="${attribute}"]`).style.display = 'flex';
    
            document.querySelectorAll('.reviews-tabs__tab').forEach(active => {
                active.classList.remove('reviews-tabs__tab_active');
            });
            target.classList.add('reviews-tabs__tab_active');
        });
    });    
})();