import React, { useState } from 'react';
import './bookingForm.css';

const BookingForm = ({ service, onBookingSubmit }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    requirements: '',
    name: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState({});

  // Basic validation for form fields
  const validateForm = () => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.date) newErrors.date = 'Date is required.';
      if (!formData.time) newErrors.time = 'Time is required.';
      if (formData.guests < 1) newErrors.guests = 'Guest count must be at least 1.';
    } else if (step === 2) {
      if (!formData.name.trim()) newErrors.name = 'Name is required.';
      if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Valid email is required.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      setStep(step + 1);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 3) {
      // Simulate booking confirmation
      alert(`Booking for ${service.name} confirmed!`);
      onBookingSubmit();
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Book {service.name}</h2>
      {/* Step 1: Date & Guests */}
      {step === 1 && (
        <div className="form-step">
          <h3>Step 1: Event Details</h3>
          <label>
            Date:
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
            {errors.date && <p className="error">{errors.date}</p>}
          </label>
          <label>
            Time:
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
            {errors.time && <p className="error">{errors.time}</p>}
          </label>
          <label>
            Guest Count:
            <input
              type="number"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              min="1"
              required
            />
            {errors.guests && <p className="error">{errors.guests}</p>}
          </label>
          <label>
            Special Requirements:
            <textarea
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
            />
          </label>
          <button type="button" onClick={handleNext}>Next</button>
        </div>
      )}

      {/* Step 2: Contact Info */}
      {step === 2 && (
        <div className="form-step">
          <h3>Step 2: Contact Information</h3>
          <label>
            Full Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
          <button type="button" onClick={() => setStep(1)}>Back</button>
          <button type="button" onClick={handleNext}>Next</button>
        </div>
      )}

      {/* Step 3: Summary & Confirmation */}
      {step === 3 && (
        <div className="form-step">
          <h3>Step 3: Booking Summary</h3>
          <p><strong>Service:</strong> {service.name}</p>
          <p><strong>Date:</strong> {formData.date}</p>
          <p><strong>Time:</strong> {formData.time}</p>
          <p><strong>Guests:</strong> {formData.guests}</p>
          <p><strong>Contact:</strong> {formData.name}, {formData.email}</p>
          <button type="button" onClick={() => setStep(2)}>Back</button>
          <button type="submit">Confirm Booking</button>
        </div>
      )}
    </form>
  );
};

export default BookingForm;