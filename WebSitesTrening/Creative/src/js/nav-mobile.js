const mobileMenu = (menuSelector, addClass) => {
    const menu = document.querySelector(menuSelector);

    if (!menu.classList.contains(addClass)) {
        menu.classList.add(addClass);
    } else menu.classList.remove(addClass);
};

export default mobileMenu;
