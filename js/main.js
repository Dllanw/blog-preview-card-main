document.addEventListener('DOMContentLoaded', function() {
    const title = document.getElementById('title');
    const container = document.getElementById('container');

    title.addEventListener('mouseenter', () => {
        container.classList.add('article-card__shadow');
    })

    title.addEventListener('mouseleave', () => {
        container.classList.remove('article-card__shadow');
    })

})