import React, { useState } from 'react';

export default function OwlPost() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please state your name or title.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide a return email address.';
    } else if (!validateEmail(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email (e.g. name@domain.com).';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please provide a topic or subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'The parchment cannot be dispatched empty.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please write at least a sentence on your parchment.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setFeedback(null);

    setTimeout(() => {
      setIsSubmitting(false);
      setFeedback({
        type: 'success',
        text: 'Your dispatch has been sealed and sent. Ayush Misra will review your correspondence shortly.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 850);
  };

  return (
    <section className="owl-post-section" id="contact">
      <div className="section-container">
        <div className="section-header text-center">
          <span className="section-label">DIRECT CORRESPONDENCE</span>
          <h2 className="section-title">Owl Post</h2>
          <p className="section-subtitle">
            Whether you wish to discuss software engineering, mechanical systems, 3D visualization, or photography.
          </p>
        </div>

        <div className="owl-post-desk">
          {/* Left Column: Direct Links & Postal Details */}
          <div className="post-office-card">
            <div className="card-filigree corner-top-left" aria-hidden="true"></div>
            <div className="card-filigree corner-top-right" aria-hidden="true"></div>

            <div className="desk-seal-stamp">
              <span className="owl-stamp-icon">🦉</span>
              <span className="owl-stamp-title">AYUSH MISRA • DIRECT DISPATCH</span>
              <span className="owl-stamp-ref">LUCKNOW OWLERYS BRANCH</span>
            </div>

            <div className="contact-methods-list">
              <div className="method-row">
                <span className="method-icon">✉️</span>
                <div className="method-details">
                  <span className="method-name">DIRECT EMAIL</span>
                  <a href="mailto:honeymishra711@gmail.com" className="method-link">
                    honeymishra711@gmail.com
                  </a>
                </div>
              </div>

              <div className="method-row">
                <span className="method-icon">🐙</span>
                <div className="method-details">
                  <span className="method-name">GITHUB ARCHIVE</span>
                  <a
                    href="https://github.com/ayush110109mishra/ayush110109mishra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="method-link"
                  >
                    github.com/ayush110109mishra
                  </a>
                </div>
              </div>

              <div className="method-row">
                <span className="method-icon">💼</span>
                <div className="method-details">
                  <span className="method-name">LINKEDIN PROFILE</span>
                  <a
                    href="https://www.linkedin.com/in/ayush-misra-66a803365"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="method-link"
                  >
                    linkedin.com/in/ayush-misra-66a803365
                  </a>
                </div>
              </div>

              <div className="method-row">
                <span className="method-icon">📍</span>
                <div className="method-details">
                  <span className="method-name">ACADEMIC BASE</span>
                  <span className="method-text">University of Lucknow • Faculty of Engineering</span>
                </div>
              </div>
            </div>

            <div className="owl-post-assurance">
              <span>✦ All dispatches receive prompt personal attention.</span>
            </div>
          </div>

          {/* Right Column: Controlled Dispatch Form */}
          <div className="dispatch-form-card">
            <form id="owlPostForm" className="parchment-form" onSubmit={handleSubmit} noValidate>
              <div className="form-header">
                <h3 className="form-heading">Send a Dispatch</h3>
                <span className="form-stamp-seal">BY BARN OWL</span>
              </div>

              <div className="form-group">
                <label htmlFor="senderName" className="form-label">Your Name & Title</label>
                <input
                  type="text"
                  id="senderName"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="e.g. Professor McGonagall or John Doe"
                  required
                />
                {errors.name && (
                  <span className="field-error" id="nameError" aria-live="polite">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="senderEmail" className="form-label">Return Address (Email)</label>
                <input
                  type="email"
                  id="senderEmail"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="your.name@domain.com"
                  required
                />
                {errors.email && (
                  <span className="field-error" id="emailError" aria-live="polite">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="dispatchSubject" className="form-label">Dispatch Topic / Subject</label>
                <input
                  type="text"
                  id="dispatchSubject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Software project, engineering collaboration, or a quick hello..."
                  required
                />
                {errors.subject && (
                  <span className="field-error" id="subjectError" aria-live="polite">
                    {errors.subject}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="dispatchMessage" className="form-label">The Parchment Message</label>
                <textarea
                  id="dispatchMessage"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Inscribe your thoughts here..."
                  required
                ></textarea>
                {errors.message && (
                  <span className="field-error" id="messageError" aria-live="polite">
                    {errors.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="btn-dispatch"
                id="dispatchSubmitBtn"
                disabled={isSubmitting}
              >
                <span className="btn-dispatch-icon">
                  {isSubmitting ? '🦉' : '📜'}
                </span>
                <span className="btn-dispatch-text">
                  {isSubmitting ? 'Dispatching Barn Owl...' : 'Seal & Dispatch Owl'}
                </span>
              </button>

              {feedback && (
                <div className={`form-feedback ${feedback.type}`} role="status" aria-live="polite">
                  <strong>✦ Dispatch Sealed & Delivered!</strong>
                  <br />
                  {feedback.text}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
