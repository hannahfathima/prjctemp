import React from 'react';
import './Contact.css'
const Register = () => {
  return (
    <div>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required={true} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required={true} />

        <label htmlFor="photo">Photo:</label>
        <input type="file" id="photo" name="photo" accept="image/*" />

        <label htmlFor="employeeId">Employee ID:</label>
        <input type="text" id="employeeId" name="employeeId" required={true} />

        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="Format: 555-555-5555"
          required={true}
        />

        <label htmlFor="designation">Designation:</label>
        <input type="text" id="designation" name="designation" required={true} />

        <label htmlFor="experience">Experience (in years):</label>
        <input type="number" id="experience" name="experience" min="0" required={true} />

        <label htmlFor="salary">Salary:</label>
        <input type="number" id="salary" name="salary" min="0" required={true} />

        <label htmlFor="address">Address:</label>
        <textarea id="address" name="address" rows="4" required={true}></textarea>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
