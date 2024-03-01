// Import React and useState
import React, { useState } from 'react';
import './applyTrainer.css';

// Define your functional component
const ApplyTrainer = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    personal: {
      name: '',
      age: '',
      gender: '',
      cnic: '',
      address: '',
      email: '',
    },
    education: {
      degreeLevel: '',
      session: '',
      cgpaPercentage: '',
      institute: '',
    },
    other: {
      course: '',
      newThing: '',
      fieldOfInterest: '',
    },
  });

  // Handle form field changes
  const handleChange = (section, field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your backend API
      const response = await fetch('http://localhost:5000/api/trainer-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        console.log('Trainer request submitted successfully!');
      } else {
        console.error('Failed to submit trainer request.');
      }
    } catch (error) {
      console.error('Error submitting trainer request:', error);
    }
  };

  return (
    <div className="ApplyTrainer">
      <h1 style={{ textAlign: 'center', backgroundColor: '#ccc3c3' }}>Apply for Trainer</h1>

      <form onSubmit={handleSubmit} className="form-grid">
        <div className="personal-info">
          <h1>Personal Information</h1>
          <label>
            Name:
            <input
              type="text"
              value={formData.personal.name}
              onChange={(e) => handleChange('personal', 'name', e.target.value)}
            />
          </label>
          <label>
            Age:
            <input
              type="text"
              value={formData.personal.age}
              onChange={(e) => handleChange('personal', 'age', e.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              value={formData.personal.email}
              onChange={(e) => handleChange('personal', 'email', e.target.value)}
            />
          </label>
          <label></label>
          <label>
            Gender:
            <input
              type="text"
              value={formData.personal.gender}
              onChange={(e) => handleChange('personal', 'gender', e.target.value)}
            />
          </label>
          <label>
            CNIC:
            <input
              type="text"
              value={formData.personal.cnic}
              onChange={(e) => handleChange('personal', 'cnic', e.target.value)}
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              value={formData.personal.address}
              onChange={(e) => handleChange('personal', 'address', e.target.value)}
            />
          </label>
        </div>

        <div className="education-info">
          <h1>Educational Information</h1>
          <label>
            Degree:
            <input
              type="text"
              value={formData.education.degreeLevel}
              onChange={(e) => handleChange('education', 'degreeLevel', e.target.value)}
            />
          </label>
          <label>
            Institute:
            <input
              type="text"
              value={formData.education.institute}
              onChange={(e) => handleChange('education', 'institute', e.target.value)}
            />
          </label>
          <label>
            CGPA/Percentage:
            <input
              type="text"
              value={formData.education.cgpaPercentage}
              onChange={(e) => handleChange('education', 'cgpaPercentage', e.target.value)}
            />
          </label>
          <label>
            Session:
            <input
              type="text"
              value={formData.education.session}
              onChange={(e) => handleChange('education', 'session', e.target.value)}
            />
          </label>
        </div>

        <div className="other-info">
          <h1>Other Information</h1>
          <label>
            Course Want to learn:
            <input
              type="text"
              value={formData.other.course}
              onChange={(e) => handleChange('other', 'course', e.target.value)}
            />
          </label>
          <label>
            Field of interest:
            <input
              type="text"
              value={formData.other.fieldOfInterest}
              onChange={(e) => handleChange('other', 'fieldOfInterest', e.target.value)}
            />
          </label>
          <label>
            New thing in course:
            <input
              type="text"
              value={formData.other.newThing}
              onChange={(e) => handleChange('other', 'newThing', e.target.value)}
            />
          </label>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ApplyTrainer;
