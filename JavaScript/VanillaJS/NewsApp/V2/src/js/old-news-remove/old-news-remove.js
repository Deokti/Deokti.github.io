// Очищаем контейнер при выборе другой категории
function oldNewsRemove(container) {
    let child = container.lastElementChild;

    while (child) {
        container.removeChild(child);
        child = container.lastElementChild;
    }
}

export default oldNewsRemove;
