import React from 'react';
import './styles/Card.scss';

function Card() {

  return (
    <div className="song-preview-card">
      <div className="song-preview-card__image-container">
        <img
          src="assets/images/newCover.png"
          className="song-preview-card__image"
          alt="song cover"
        />
      </div>
      <div className="song-preview-card__content">
        <div className="song-preview-card__title">RiRi</div>
        <div className="song-preview-card__artist-and-time">
          <div className="song-preview-card__artist">Young Thug</div>
          <div className="song-preview-card__time">

            <div className="song-preview-card__time-icon-container">
              <img src="assets/icons/clock.svg" alt="clock" />
            </div>

            <div className="song-preview-card__time-text">4:04</div>
          </div>
        </div>
        <hr className="line" />
        <div className="song-preview-card__album-cover-and-info">

          <div className="song-preview-card__album-cover-container">
            <img src="assets/images/album-cover.png" alt="album cover" />
          </div>

          <div className="song-preview-card__album-info-container">
            <div className="song-preview-card__album-info-text">Jeffery</div>
            <div className="song-preview-card__album-info-dot-spacer">•</div>
            <div className="song-preview-card__album-info-text">2016</div>
            <div className="song-preview-card__album-info-dot-spacer">•</div>
            <div className="song-preview-card__album-info-text">
              10 songs, 42 min
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Card;
