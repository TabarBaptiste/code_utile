// Ajouter une animation de survol aux liens de classe "bookmark"
const bookmarks = document.querySelectorAll('.bookmark');

bookmarks.forEach((bookmark) => {
    bookmark.addEventListener('mouseover', () => {
        bookmark.style.transform = 'scale(1.01)';
    });

    bookmark.addEventListener('mouseout', () => {
        bookmark.style.transform = 'scale(1)';
    });
});
