import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from "../../low level/PrimaryButton";
import "./cinema_form.scss";
import SecondaryButton from '../../low level/SecondaryButton';

function CinemaForm() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSave = () => {

  };

  const handleCancel = () => {

  };

  return (
    <div className="cinema-form-page">
      <h1>Create Cinema</h1>
      <form className="cinema-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter cinema name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter cinema address"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter phone number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
          />
        </div>

        <div className="button-group">
          <PrimaryButton onClick={handleSave}>Save</PrimaryButton>
          <SecondaryButton onClick={handleCancel}>Cancel</SecondaryButton>
        </div>
      </form>
    </div>
  );
}

export default CinemaForm;
