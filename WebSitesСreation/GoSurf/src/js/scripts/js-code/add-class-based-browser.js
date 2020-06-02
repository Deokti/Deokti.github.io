import learnWhichBrowserOpen from './learn-browser';

const addClassBasedBrowser = ({
  itemsWhichAddClass,
  arrayBrowser = [],
  addClass,
}) => {
  const determineBrowser = learnWhichBrowserOpen();
  const itemsForAddedClass = document.querySelectorAll(itemsWhichAddClass);

  itemsForAddedClass.forEach((item) => {
    arrayBrowser.forEach((browser) => {
      if (determineBrowser === browser) item.classList.add(addClass);
    });
  });
};

export default addClassBasedBrowser;
