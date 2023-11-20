const infoImgLinks = [
    'https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-sehwag.png',
    'https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-sachin.png',
    'https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-gambhir.png',
    'https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-virat-kohli.png',
    'https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-dhoni.png',
    'https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-yuvraj.png',
    'https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-suresh-raina.jpg',
    'https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-harbhajan.jpg',
    'https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-zaheer-khan.jpg',
    'https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-munaf-patel.jpg',
    'https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-sreeshanth.jpg',
  ];
  const players = document.querySelectorAll('.name');
  
  function removeInfoImg() {
    const displayedImages = document.querySelectorAll('.infoImg');
    if (displayedImages) {
      displayedImages.forEach((img) => {
        img.remove();
      });
    }
  }
  
  for (let i = 0; i < players.length; i++) {
    players[i].addEventListener('click', (event) => {
      removeInfoImg();
      event.stopPropagation();
  
      const infoImg = document.createElement('img');
      infoImg.setAttribute('src', infoImgLinks[i]);
      infoImg.setAttribute('class', 'infoImg');
      players[i].append(infoImg);
    });
  }
  
  document.addEventListener('click', removeInfoImg);
  