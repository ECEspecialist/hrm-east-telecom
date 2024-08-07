import PropTypes from 'prop-types';
import './Documents.css';

const Documents = ({ next, previous, setFormData }) => {
  const handleFileChange = (e) => {
    const { files } = e.target;
    setFormData(prevData => ({
      ...prevData,
      documents: [...prevData.documents, ...files]
    }));
  };

  return (
    <div className='add-employee-container'>
      <p className='form-text'>Please, upload documents.</p>
      <form className='doc-form'>
        <input className='form-input' type="file" onChange={handleFileChange} />
        <input className='form-input' type="file" onChange={handleFileChange} />
        <div className='form-button-side-container'>
          <button className='form-button-side' type="button" onClick={previous}>Previous</button>
          <button className='form-button-side' type="button" onClick={next}>Next</button>
        </div>
      </form>
    </div>
  );
};

Documents.propTypes = {
  next: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired
};

export default Documents;
