function changeAdressVideoOnClick(mainVideoSelector, additionallyVideoSelector, listSelector, liActiveClasss) {
    const mainVideo = document.querySelector(mainVideoSelector);
    const additionallyVideo = document.querySelectorAll(additionallyVideoSelector);

    additionallyVideo.forEach((oneVideo) => {
        oneVideo.addEventListener('click', (event) => {
            event.preventDefault();

            const getHref = event.target.href;
            const parentActive = document.querySelectorAll(listSelector);
            const parent = event.path[1];

            if (mainVideo.src === getHref) return;

            parentActive.forEach((active) => active.classList.remove(liActiveClasss));
            parent.classList.add(liActiveClasss);
            mainVideo.src = getHref;
        });
    });
}
changeAdressVideoOnClick('.about-right__main-video iframe', '.about-right__additionally-video a', '.about-right__additionally-video', 'is-active-additionally-video');
