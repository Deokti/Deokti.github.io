function disableBasicLinkBehavior() {
    const getAllLinks = document.querySelectorAll('.disable-basic-link');
    getAllLinks.forEach((link) => {
        link.addEventListener('click', (event) => event.preventDefault());
    });
}

document.addEventListener('DOMContentLoaded', disableBasicLinkBehavior);
