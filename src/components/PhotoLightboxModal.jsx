import React, { useEffect } from 'react';

export default function PhotoLightboxModal({ photo, onClose }) {
  useEffect(() => {
    if (photo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [photo]);

  // Escape key listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && photo) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [photo, onClose]);

  if (!photo) return null;

  return (
    <div
      className="modal-backdrop lightbox-backdrop"
      id="photoLightboxModal"
      role="dialog"
      aria-modal="true"
      aria-label="Photo Lightbox"
      onClick={(e) => {
        if (e.target.id === 'photoLightboxModal') onClose();
      }}
    >
      <div className="lightbox-dialog">
        <button
          type="button"
          className="lightbox-close-btn"
          id="closeLightboxBtn"
          aria-label="Close photo view"
          onClick={onClose}
        >
          &times;
        </button>

        <div className="lightbox-content">
          <div className="lightbox-img-wrapper">
            <img
              src={photo.src}
              alt={`${photo.category} - ${photo.title}`}
              id="lightboxImg"
              className="lightbox-img"
            />
          </div>
          <div className="lightbox-meta-card">
            <span className="lightbox-cat" id="lightboxCat">
              {photo.category}
            </span>
            <h3 className="lightbox-title" id="lightboxTitle">
              “{photo.title}”
            </h3>
            <p className="lightbox-desc" id="lightboxDesc">
              {photo.desc}
            </p>
            <div className="lightbox-footer">
              <span className="lightbox-credit">Ayush Misra • Archival Print</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
