import PropTypes from 'prop-types';
import './PersonalInformation.css';

const PersonalInformation = ({ next, formData, setFormData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      personalInfo: {
        ...prevData.personalInfo,
        [name]: value
      }
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Check if all required fields are filled
    const { firstName, lastName, dateOfBirth, maritalStatus } = formData.personalInfo;
    if (!firstName || !lastName || !dateOfBirth || !maritalStatus) {
      alert("Please fill in all fields before proceeding.");
      return;
    }
    
    next();
  };

  return (
    <div className='add-employee-container'>
      <p className='form-text'>Please, fill in personal information.</p>
      <form className='personal-information-form' onSubmit={handleFormSubmit}>
        <input
          className='form-input'
          type='text'
          placeholder='First Name'
          name='firstName'
          value={formData.personalInfo.firstName}
          onChange={handleInputChange}
        />
        
        <input
          className='form-input'
          type='text'
          placeholder='Last Name'
          name='lastName'
          value={formData.personalInfo.lastName}
          onChange={handleInputChange}
        />
        
        <input
          className='form-input'
          type='text'
          placeholder='Date of Birth'
          name='dateOfBirth'
          value={formData.personalInfo.dateOfBirth}
          onChange={handleInputChange}
        />
        
        <input
          className='form-input'
          type='text'
          placeholder='Marital status'
          name='maritalStatus'
          value={formData.personalInfo.maritalStatus}
          onChange={handleInputChange}
        />

        <button className='form-button' type='submit'>
          Next
        </button>
      </form>
    </div>
  );
};

PersonalInformation.propTypes = {
  next: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired
};

export default PersonalInformation;
