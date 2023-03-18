import { useState } from 'react';
import './Questionnaire.css'
import Navbar from '../../components/Navigation/Navbar'


const Questionnaire = () => {
  const [step, setStep] = useState(1);
  const [profession, setProfession] = useState('');
  const [preference, setPreference] = useState('');

  const handleProfessionChange = (event) => {
    setProfession(event.target.value);
    setStep(2);
  };

  const handlePreferenceChange = (event) => {
    setPreference(event.target.value);
    setStep(3);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Profession: ${profession}, Preference: ${preference}`);
  };

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h1>Questionnaire</h1>
        {step === 1 && (
          <div>
            <h2>What's your profession?</h2>
            <form onSubmit={handleProfessionChange}>
              <label>
                <input type="radio" name="profession" value="student" onChange={handleProfessionChange} />
                Student
              </label>
              <br></br>
              <label>
                <input type="radio" name="profession" value="professional" onChange={handleProfessionChange} />
                Professional
              </label>
              <button type="submit">Next</button>
            </form>
          </div>
        )}
        {step === 2 && (
          <div>
            <h2>What's your job preference?</h2>
            <form onSubmit={handlePreferenceChange}>
              <label>
                <input type="radio" name="preference" value="industry" onChange={handlePreferenceChange} />
                Industry
              </label>
              <br></br>
              <label>
                <input type="radio" name="preference" value="research" onChange={handlePreferenceChange} />
                Research
              </label>
              <button type="submit">Next</button>
            </form>
          </div>
        )}
        {step === 3 && (
          <div>
            <h2>Suggestions based on your choice</h2>
            <p>Profession: {profession}</p>
            <p>Preference: {preference}</p>
            <form onSubmit={handleSubmit}>
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>
    </div>
    
  );
};

export default Questionnaire;
