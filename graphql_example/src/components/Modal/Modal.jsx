import React from 'react';
import styles from './Modal.module.scss';

export const Modal = ({ show, onClose, film }) => {
    if (!show || !film) return null; 
  
    const formattedDate = new Date(film.created).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  
    return (
      <div className={styles.modalOverlay} onClick={onClose}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
          <div className={styles.modalContent}>
            <div className={styles.imageContainer}>
              <img src={film.posterUrl} alt={film.title} className={styles.poster} />
            </div>
            <div className={styles.textContent}>
              <h2 className={styles.title}>{film.title}</h2>
              <p className={styles.description}><strong>Episode:</strong> {film.episodeID}</p>
              <p className={styles.description}><strong>Director:</strong> {film.director}</p>
              <p className={styles.description}><strong>Release Date:</strong> {formattedDate}</p>
              <p className={styles.openingCrawl}><strong>Opening Crawl:</strong> {film.openingCrawl}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };