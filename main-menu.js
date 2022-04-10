/* global AFRAME */
AFRAME.registerComponent('info-panel', {
  init: function () {
    var buttonEls = document.querySelectorAll('.menu-button');
    var fadeBackgroundEl = this.fadeBackgroundEl = document.querySelector('#fadeBackground');
    this.siteURL;
    this.movieImageEl;
    this.movieTitleEl = document.querySelector('#movieTitle');
    this.movieDescriptionEl = document.querySelector('#movieDescription');


    this.movieInfo = {
      karigurashiButton: {
        title: 'Strabismus',
        imgEl: document.querySelector('#karigurashiMovieImage'),
        description: 'Strabismus (crossed eyes) is a condition in which the eyes do not line up with one another. In other words, one eye is turned in a direction that is different from the other eye. In this exercise, we will be providing a therapeutic training to the muscles of lazy eye by hiding objects from the good eye',
        siteURL: 'equation-game.html'
      },
      kazetachinuButton: {
        title: 'Lazy Eye',
        imgEl: document.querySelector('#kazetachinuMovieImage'),
        description: 'A "lazy eye" is a childhood condition where the vision does not develop properly. It\'s known medically as amblyopia.It happens because one or both eyes are unable to build a strong link to the brain. It usually only affects one eye, and means that the child can see less clearly out of the affected eye and relies more on the "good" eye. It\'s estimated that 1 in 50 children develop a lazy eye.',
        siteURL: 'index.html'
      },
      ponyoButton: {
        title: 'Color Perception',
        imgEl: document.querySelector('#ponyoMovieImage'),
        description: 'Color Perception is the ability to discriminate between colors. This skill is important for accurate interpretation of color-coded materials (such as charts and graphs).',
        siteURL: 'equation-game.html'
      }
    };

    this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
    this.onBackgroundClick = this.onBackgroundClick.bind(this);
    this.changePage = this.changePage.bind(this);
    this.backgroundEl = document.querySelector('#background');
    for (var i = 0; i < buttonEls.length; ++i) {
      buttonEls[i].addEventListener('click', this.onMenuButtonClick);
    }
    
    this.backgroundEl.addEventListener('click', this.onBackgroundClick);
    this.el.object3D.renderOrder = 9999999;
    this.el.object3D.depthTest = false;
    fadeBackgroundEl.object3D.renderOrder = 9;
    fadeBackgroundEl.getObject3D('mesh').material.depthTest = false;
    this.startButton= document.querySelector('#start-button');
    this.startButton.addEventListener('click',this.changePage);
  },

  onMenuButtonClick: function (evt) {
    var movieInfo = this.movieInfo[evt.currentTarget.id];

    this.backgroundEl.object3D.scale.set(3.86, 1.92, 0.7);

    this.el.object3D.scale.set(1, 1, 1);
    if (AFRAME.utils.device.isMobile()) { this.el.object3D.scale.set(1.4, 1.4, 1.4); }
    this.el.object3D.visible = true;
    this.fadeBackgroundEl.object3D.visible = true;

    if (this.movieImageEl) { this.movieImageEl.object3D.visible = false; }
    this.movieImageEl = movieInfo.imgEl;
    this.movieImageEl.object3D.visible = true;

    this.movieTitleEl.setAttribute('text', 'value', movieInfo.title);
    this.movieDescriptionEl.setAttribute('text', 'value', movieInfo.description);
    this.siteURL= movieInfo.siteURL;
  },

  onBackgroundClick: function (evt) {
    this.backgroundEl.object3D.scale.set(0.001, 0.001, 0.001);
    this.el.object3D.scale.set(0.001, 0.001, 0.001);
    this.el.object3D.visible = false;
    this.fadeBackgroundEl.object3D.visible = false;
  },
  
  changePage: function (evt) {
    window.location.href = this.siteURL;
  }
})

