const featuredAuthors = ['J.K. Rowling', 'George Orwell', 'Agatha Christie', 'Stephen King', 'Jane Austen'];

function loadFeaturedAuthors() {
  const carousel = document.getElementById('authorCarousel');
  featuredAuthors.forEach(author => {
    const item = document.createElement('div');
    item.className = 'carouselItem';
    item.textContent = author;
    carousel.appendChild(item);
  });
}

async function searchBooks() {
  const query = document.getElementById('searchInput').value.trim();
  const grid = document.getElementById('bookGrid');
  grid.innerHTML = 'Searching...';

  try {
    const res = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=12`);
    const data = await res.json();
    grid.innerHTML = '';

    data.docs.forEach(book => {
      const coverId = book.cover_i;
      const imgSrc = coverId
        ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
        : 'https://via.placeholder.com/150x200?text=No+Cover';

      const card = document.createElement('div');
      card.className = 'bookCard';
      card.innerHTML = `
        <img src="${imgSrc}" alt="${book.title}" />
        <h3>${book.title}</h3>
        <p>${book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
      `;
      grid.appendChild(card);
    });
  } catch (error) {
    grid.innerHTML = 'Error fetching books.';
    console.error(error);
  }
}

loadFeaturedAuthors();
