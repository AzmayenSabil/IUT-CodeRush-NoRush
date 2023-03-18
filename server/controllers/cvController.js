import CvModel from '../model/Cv.model.js'

// POST request to create a new CV
export const createCv = async (req, res) =>{
    console.log('Creating')
  try {
    const newCv = new CvModel({
      personal_info: {
        firstName: req.body.personal_info.firstName,
        lastName: req.body.personal_info.lastName,
        job_title: req.body.personal_info.job_title,
        email: req.body.personal_info.email,
        phone: req.body.personal_info.phone
      },
      summary: req.body.summary,
      work_experience: req.body.work_experience,
      education: req.body.education,
      skills: req.body.skills,
      languages: req.body.languages,
      courses: req.body.courses,
      links: req.body.links,
      reference: req.body.reference,
      hobbies: req.body.hobbies
    });

    const savedCv = await newCv.save();
    res.status(201).json({ cv: savedCv });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

export const getCv = async (req, res) =>{
    try {
      const cv = await CvModel.findById(req.params.id);
      if (!cv) {
        return res.status(404).json({ message: "CV not found" });
      }
      return res.status(200).json(cv);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Server error" });
    }
  };

 
