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
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const educationSchema = new Schema({
  degree: {
    type: String,
    required: true,
  },
  schoolName: {
    type: String,
    required: true,
  },
  major: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const CvSchema = new Schema({
  personal_info: {
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    job_title: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    }
  },
  summary: {
    type: String,
    required: true,
  },
  work_experience: {
    type: [workExperienceSchema],
    required: true,
  },
  education: {
    type: [educationSchema],
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
  languages: {
    type: [String],
    required: true,
  },
  courses: {
    type: [String],
    required: true,
  },
  links: {
    type: [String],
    required: true,
  },
  reference: {
    type: String,
    required: false,
  },
  hobbies: {
    type: [String],
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Cv = mongoose.models.Cv || mongoose.model("Cv", CvSchema);

export default Cv;
