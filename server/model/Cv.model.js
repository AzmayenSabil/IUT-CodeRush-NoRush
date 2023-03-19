import mongoose from "mongoose";

const { Schema } = mongoose;

// const personalInfoSchema = new Schema({
//   firstName: {
//     type: String,
//     required: true,
//   },
//   lastName: {
//     type: String,
//     required: true,
//   },
//   job_title: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   phone: {
//     type: String,
//     required: true,
//   },
// });

const workExperienceSchema = new Schema({
  companyName: {
    type: String,
    required: false,
  },
  position: {
    type: String,
    required: false,
  },
  startDate: {
    type: Date,
    required: false,
  },
  endDate: {
    type: Date,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
});

const educationSchema = new Schema({
  degree: {
    type: String,
    required: false,
  },
  schoolName: {
    type: String,
    required: false,
  },
  major: {
    type: String,
    required: false,
  },
  startDate: {
    type: Date,
    required: false,
  },
  endDate: {
    type: Date,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
});

const CvSchema = new Schema({
  personal_info: {
    firstName: {
        type: String,
        required: false,
    },
    lastName: {
        type: String,
        required: false,
    },
    job_title: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false,
    },
    phone: {
        type: String,
        required: false,
    }
  },
  summary: {
    type: String,
    required: false,
  },
  work_experience: {
    type: [workExperienceSchema],
    required: false,
  },
  education: {
    type: [educationSchema],
    required: false,
  },
  skills: {
    type: [String],
    required: false,
  },
  languages: {
    type: [String],
    required: false,
  },
  courses: {
    type: [String],
    required: false,
  },
  links: {
    type: [String],
    required: false,
  },
  reference: {
    type: String,
    required: false,
  },
  hobbies: {
    type: [String],
    required: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Cv = mongoose.models.Cv || mongoose.model("Cv", CvSchema);

export default Cv;
