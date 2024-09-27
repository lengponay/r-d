document.querySelector('.nav_search-btn').addEventListener('click', function(e) {
  e.preventDefault();

  const searchQuery = document.querySelector('.form-control').value;

  console.log('Search Query:', searchQuery);

  if (searchQuery) {
    window.location.href = `/search?query=${searchQuery}`;
  }
});
