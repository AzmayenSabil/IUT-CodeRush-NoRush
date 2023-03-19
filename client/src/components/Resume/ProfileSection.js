import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PersonalInfo = () => {
  const [personalInfo, setPersonalInfo] = useState(null);

  useEffect(() => {
    const fetchPersonalInfo = async () => {
        try {
          const response = await axios.get('http://localhost:8080/api/getCv/64163df1f285db1260b154ba');
          setPersonalInfo(response.data);
          console.log(personalInfo);
        } catch (error) {
          console.error(error);
        }
      };
      fetchPersonalInfo()
  }, []);

  if (!personalInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
        <h3>My profile</h3>
      
        <div className="col-sm-6">
            <div className="form-group">
            <label>First Name</label>
            <p>{personalInfo.personal_info.firstName}</p>
            </div>
        </div>
        <br></br>
        <div className="col-sm-6">
            <div className="form-group">
            <label>Last Name</label>
            <p>{personalInfo.personal_info.lastName}</p>
            </div>
        </div>
        <br></br>
        <div className="col-sm-6">
          <div className="form-group">
            <label>Job Title</label>
            <p>{personalInfo.personal_info.job_title}</p>
          </div>
        </div>
        <br></br>
        <div className="col-sm-6">
          <div className="form-group">
            <label>Email</label>
            <p>{personalInfo.personal_info.email}</p>
          </div>
        </div>
        <br></br>
        <div className="row">
            <div className="col-sm-6">
            <div className="form-group">
                <label>Phone</label>
                <p>{personalInfo.personal_info.phone}</p>
            </div>
            </div>
        </div>
    </div>
  );
};

export default PersonalInfo;
