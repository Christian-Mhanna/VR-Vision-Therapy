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
        title: 'Sci Fi Equations',
        imgEl: document.querySelector('#karigurashiMovieImage'),
        description: 'Strabismus (crossed eyes) is a condition in which the eyes do not line up with one another. During this game the user will be challenged to solve equations and choose the correct answer by gazing on moving objects. This game can contribute to enhacing the visual condition of the patient by merging both brain and eye focus. Addtionally, objects will be hidden from the good eye to insure reliance on the lazy eye.',
        siteURL: 'equation-game.html'
      },
      kazetachinuButton: {
        title: 'Color Match',
        imgEl: document.querySelector('#kazetachinuMovieImage'),
        description: 'Strabismus can also affect color perception in the lazy eye where the latter is unable to differenciate between different shades of the same color. In this exercise, we will task the patient to match colors together in order to strangthen his color perception.',
        siteURL: 'color-perception.html'
      },
      ponyoButton: {
        title: 'Depth Percetion',
        imgEl: document.querySelector('#ponyoMovieImage'),
        description: 'Strabismus can affect the depth perception, meaning the patient mugh be unable to perceive details and loose visual information as we go farther in depth. The purpose of this game is to train the eye on perceiving such in formation by letting the patient determine the position of objects in terms of depth and ditingushing differences between objects far away from him.',
        siteURL: 'depth-game.html'
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

