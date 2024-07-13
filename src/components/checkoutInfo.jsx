import React, { useState } from 'react';

export default function CheckOutDetails({ onFormChange, formErrors }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNum: '',
    additionalNumber: '',
    address: '',
    address2: '',
    city: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
    onFormChange({ ...formData, [id]: value }); // Notify parent component of changes
  };

  return (
    <div className="py-3">
      <h4 className="mb-3">Billing Details</h4>
      <form className="needs-validation" noValidate>
        <div className="row g-3">
          {/* First Name Field */}
          <div className="col-sm-6">
            <label htmlFor="firstName" className="form-label">First name</label>
            <input
              type="text"
              className={`form-control ${formErrors.firstName ? 'is-invalid' : ''}`}
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            {formErrors.firstName && <div className="invalid-feedback">{formErrors.firstName}</div>}
          </div>

          {/* Last Name Field */}
          <div className="col-sm-6">
            <label htmlFor="lastName" className="form-label">Last name</label>
            <input
              type="text"
              className={`form-control ${formErrors.lastName ? 'is-invalid' : ''}`}
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            {formErrors.lastName && <div className="invalid-feedback">{formErrors.lastName}</div>}
          </div>

          {/* Phone Number Field */}
          <div className="col-sm-6">
            <label htmlFor="phoneNum" className="form-label">Phone Number</label>
            <input
              type="tel"
              className={`form-control ${formErrors.phoneNum ? 'is-invalid' : ''}`}
              id="phoneNum"
              value={formData.phoneNum}
              onChange={handleChange}
              required
            />
            {formErrors.phoneNum && <div className="invalid-feedback">{formErrors.phoneNum}</div>}
          </div>

          {/* Additional Number Field */}
          <div className="col-sm-6">
            <label htmlFor="additionalNumber" className="form-label">Additional Number</label>
            <input
              type="text"
              className={`form-control ${formErrors.additionalNumber ? 'is-invalid' : ''}`}
              id="additionalNumber"
              value={formData.additionalNumber}
              onChange={handleChange}
              required
            />
            {formErrors.additionalNumber && <div className="invalid-feedback">{formErrors.additionalNumber}</div>}
          </div>

          {/* Address Field */}
          <div className="col-12">
            <label htmlFor="address" className="form-label">Address</label>
            <input
              type="text"
              className={`form-control ${formErrors.address ? 'is-invalid' : ''}`}
              id="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            {formErrors.address && <div className="invalid-feedback">{formErrors.address}</div>}
          </div>

          {/* Address Information Field */}
          <div className="col-12">
            <label htmlFor="address2" className="form-label">Address Information</label>
            <input
              type="text"
              className="form-control"
              id="address2"
              value={formData.address2}
              onChange={handleChange}
            />
          </div>

          {/* City Field */}
          <div className="col-12">
            <label htmlFor="city" className="form-label">City</label>
            <input
              type="text"
              className={`form-control ${formErrors.city ? 'is-invalid' : ''}`}
              id="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
            {formErrors.city && <div className="invalid-feedback">{formErrors.city}</div>}
          </div>
        </div>
      </form>
    </div>
  );
}
