//lightbox 

(function () {
  // all images 
  let imageList = [];
  let counter = 0;

  const images = document.querySelectorAll('.store-img');
  const container = document.querySelector('.lightbox-container');
  const item = document.querySelector('.lightbox-item');
  const closeIcon = document.querySelector('.lightbox-close');
  const btnLeft = document.querySelector('.btnLeft');
  const btnRight = document.querySelector('.btnRight');

  // add all images to the array 

  images.forEach(function (img) {
    imageList.push(img.src); //looping through the images 
  });
  // console.log(imageList);

  //open modal - looping through all the images
  images.forEach(function (img) {
    //setting up a click event 
    img.addEventListener('click', function () {
      //first we are going to show the modal 
      container.classList.add('show');
      //getting the source 
      let src = event.target.src;
      // console.log(src);
      counter = imageList.indexOf(src)
      // console.log(counter)
      //show modal with an image 
      item.style.backgroundImage = `url(${src})`
    });
  });

  // setting up close modal 
  closeIcon.addEventListener('click', function () {
    container.classList.remove('show');
  });

  //work with the left buttons add the event listeners for that 
  btnLeft.addEventListener('click', function () {
    counter--;
    //if the counter is going to be less than 0, the array holds from 0 - 11 
    if (counter < 0) {
      counter = imageList.length - 1; //the counter does not go below 0 bc of the length -1 
    }
    //looping through the items when previous button is pressed 
    item.style.backgroundImage = `url(${imageList[counter]})`
    console.log(counter);

  });
  //work with the right buttons add the event listeners for that 
  btnRight.addEventListener('click', function () {
    counter++;
    
    if (counter > imageList.length - 1) {
      counter = 0; 
    }
    //looping through the items when previous button is pressed 
    item.style.backgroundImage = `url(${imageList[counter]})`
    console.log(counter);


  })
















})();