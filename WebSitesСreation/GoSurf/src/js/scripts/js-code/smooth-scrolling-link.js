const smoothScrollingLink = (getLinks) => {
  const links = typeof getLinks === 'string' ?
    document.querySelectorAll(getLinks) : getLinks;

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      const toHref = link.getAttribute('href');
      document.querySelector(`${toHref}`).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });
};

export default smoothScrollingLink;
// addAnimationStartAndTheEnd
