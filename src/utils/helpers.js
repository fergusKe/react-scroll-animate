export const preloadImage = (images, options) => {
  let count = 0;

  images.forEach((img) => {
    const imgObj = new Image();

    imgObj.onload = () => {
      loaded();
    };

    imgObj.onerror = () => {
      loaded();
    };

    imgObj.src = img;
  });

  function loaded() {
    count += 1;
    options.each && options.each(count);

    if (count === images.length) {
      options.all && options.all(count);
    }
  }
};
