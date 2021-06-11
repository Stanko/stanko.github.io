const headers = document.querySelectorAll('.Post h2, .Post h3, .Post h4, .Post h5');

if (headers) {
  headers.forEach(header => {
    header.innerHTML =
      `<a href="#${ header.id }" class="Post-headerAnchor" aria-label="Header anchor" title="Header anchor">
        <img src="/public/img/link.svg" aria-hidden="true" />
      </a>${ header.innerHTML }`;
  });
}
