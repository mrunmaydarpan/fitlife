class ProgramCard extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute('title');
    const image = this.getAttribute('image');
    const description = this.innerHTML.trim();

    this.innerHTML = `
      <div class="program-card">
        <figure class="card-banner img-holder" style="--width: 312; --height: 362">
          <img src="${image}" width="312" height="362" loading="lazy" alt="${title}" class="img-cover" />
        </figure>
        <div class="card-content">
          <h3 class="h3">
            <a href="#" class="card-title">${title}</a>
          </h3>
          <p class="card-text">
            ${description}
          </p>
        </div>
      </div>
    `;
  }
}
customElements.define('program-card', ProgramCard);

class ClassCard extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute('title');
    const image = this.getAttribute('image');
    const icon = this.getAttribute('icon');
    const description = this.innerHTML.trim();

    this.innerHTML = `
      <div class="class-card">
        <figure class="card-banner img-holder" style="--width: 416; --height: 240">
          <img src="${image}" width="416" height="240" loading="lazy" alt="${title}" class="img-cover" />
        </figure>
        <div class="card-content">
          <div class="title-wrapper">
            <img src="${icon}" width="52" height="52" aria-hidden="true" alt="" class="title-icon" />
            <h3 class="h3">
              <a href="#" class="card-title">${title}</a>
            </h3>
          </div>
          <p class="card-text">
            ${description}
          </p>
        </div>
      </div>
    `;
  }
}
customElements.define('class-card', ClassCard);

class BlogCard extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute('title');
    const image = this.getAttribute('image');
    const date = this.getAttribute('date');
    const datetime = this.getAttribute('datetime');
    const description = this.innerHTML.trim();

    this.innerHTML = `
      <div class="blog-card">
        <div class="card-banner img-holder" style="--width: 440; --height: 270">
          <img src="${image}" width="440" height="270" loading="lazy" alt="${title}" class="img-cover" />
          <time class="card-meta" datetime="${datetime}">${date}</time>
        </div>
        <div class="card-content">
          <h3 class="h3">
            <a href="#" class="card-title">${title}</a>
          </h3>
          <p class="card-text">
            ${description}
          </p>
          <a href="#" class="btn-link has-before">Read More</a>
        </div>
      </div>
    `;
  }
}
customElements.define('blog-card', BlogCard);

class GalleryItem extends HTMLElement {
  connectedCallback() {
    const image = this.getAttribute('image');
    const title = this.getAttribute('title');
    const category = this.getAttribute('category');
    const alt = this.getAttribute('alt') || title;
    const isPortrait = this.hasAttribute('portrait');
    const categoryLabel = category.charAt(0).toUpperCase() + category.slice(1);

    // display:contents makes the custom element invisible to the grid,
    // so the inner .gallery-item div participates in the CSS grid directly.
    this.style.display = 'contents';

    this.innerHTML = `
      <div
        class="gallery-item${isPortrait ? ' portrait' : ''}"
        data-category="${category}"
        data-title="${title}"
        tabindex="0"
        role="button"
        aria-label="View ${title}"
      >
        <figure class="gallery-img-holder">
          <img src="${image}" alt="${alt}" loading="lazy" class="gallery-img" />
        </figure>
        <div class="gallery-overlay" aria-hidden="true">
          <span class="gallery-category">${categoryLabel}</span>
          <p class="gallery-title">${title}</p>
          <span class="gallery-zoom-icon">
            <ion-icon name="expand-outline"></ion-icon>
          </span>
        </div>
      </div>
    `;
  }
}
customElements.define('gallery-item', GalleryItem);
