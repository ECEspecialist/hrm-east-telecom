import PropTypes from 'prop-types';
import './Contact.css';

const Contact = ({ previous, next, formData, setFormData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      contactInfo: {
        ...prevData.contactInfo,
        [name]: value
      }
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Check if all required fields are filled
    const { address, phone, email} = formData.contactInfo;
    if (!address || !phone || !email ) {
      alert("Please fill in all fields before proceeding.");
      return;
    }
    
    next();
  };

  return (
    <div className='add-employee-container'>
      <p className='form-text'>Please, fill in contact information.</p>
      <form className='personal-information-form' onSubmit={handleFormSubmit}>
        <input
          className='form-input'
          type="text"
          placeholder='Region/City/Street'
          name='address'
          value={formData.contactInfo.address}
          onChange={handleInputChange}
        />
        <input
          className='form-input'
          type="text"
          placeholder='Phone Number'
          name='phone'
          value={formData.contactInfo.phone}
          onChange={handleInputChange}
        />
        <input
          className='form-input'
          type="text"
          placeholder='Email'
          name='email'
          value={formData.contactInfo.email}
          onChange={handleInputChange}
        />
        <div className='form-button-side-container'>
          <button className='form-button-side' type="button" onClick={previous}>Previous</button>
          <button className='form-button-side' type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

Contact.propTypes = {
  previous: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired
};

export default Contact;
