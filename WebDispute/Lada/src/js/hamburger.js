(function() {
    const hamburder = document.querySelector('.hamburder');
    const mobuleMenu = document.querySelector('.mobile-menu');
    
    hamburder.addEventListener('click', event => {
        event.preventDefault();
        hamburder.classList.toggle('hamburder_active');
        
        if (!(hamburder.classList.contains('hamburder_active'))) {
            mobuleMenu.classList.remove('mobile-menu_active');
            
        } else {
            mobuleMenu.classList.toggle('mobile-menu_active');
        }
    });
    mobuleMenu.addEventListener('click', event => {
        if (mobuleMenu.classList.contains('mobile-menu_active')) {
            if (event.target.tagName === 'A') {
                mobuleMenu.classList.toggle('mobile-menu_active');
                hamburder.classList.toggle('hamburder_active');
            }
        } 
    });
})();
