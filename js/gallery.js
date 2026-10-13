/**
 * AKI HACKS × HACKTOBERFEST '26 - Interactive Gallery Lightbox & Filter
 * PCCCS382 · IT Workshop · Dept. of CSE (AIML), IEM Kolkata
 */

document.addEventListener('DOMContentLoaded', () => {
  const galleryItems = document.querySelectorAll('.gallery-card');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');

  let currentIndex = 0;
  const activeItems = [];

  function updateActiveItems() {
    activeItems.length = 0;
    galleryItems.forEach((item, index) => {
      if (item.style.display !== 'none') {
        activeItems.push({
          index,
          el: item,
          src: item.getAttribute('data-img-src') || item.querySelector('img').src,
          caption: item.querySelector('.gallery-caption').textContent,
          tag: item.querySelector('.gallery-tag').textContent
        });
      }
    });
  }

  updateActiveItems();

  // Filter functionality
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterVal === 'all' || itemCategory === filterVal) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });

      updateActiveItems();
    });
  });

  // Lightbox click trigger
  galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      const src = item.getAttribute('data-img-src') || item.querySelector('img').src;
      const caption = item.querySelector('.gallery-caption').textContent;
      const tag = item.querySelector('.gallery-tag').textContent;

      const activePos = activeItems.findIndex(it => it.src === src);
      currentIndex = activePos !== -1 ? activePos : 0;
      showLightbox();
    });
  });

  function showLightbox() {
    if (!lightbox || activeItems.length === 0) return;
    const current = activeItems[currentIndex];
    lightboxImg.src = current.src;
    lightboxCaption.innerHTML = `<span style="color: #ff6a00; font-size: 0.85rem; display: block; text-transform: uppercase;">${current.tag}</span>${current.caption}`;
    lightbox.classList.add('active');
  }

  function hideLightbox() {
    if (lightbox) lightbox.classList.remove('active');
  }

  function nextImage() {
    if (activeItems.length === 0) return;
    currentIndex = (currentIndex + 1) % activeItems.length;
    showLightbox();
  }

  function prevImage() {
    if (activeItems.length === 0) return;
    currentIndex = (currentIndex - 1 + activeItems.length) % activeItems.length;
    showLightbox();
  }

  if (closeBtn) closeBtn.addEventListener('click', hideLightbox);
  if (nextBtn) nextBtn.addEventListener('click', nextImage);
  if (prevBtn) prevBtn.addEventListener('click', prevImage);

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) hideLightbox();
    });
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox || !lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') hideLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  });
});
