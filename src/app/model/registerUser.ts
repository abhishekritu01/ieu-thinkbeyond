import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    min: 5,
    max: 18,
  },
  grade: {
    type: String,
    required: true,
    enum: [
      'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5',
      'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10',
    ],
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  contactNumber: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/, // Validates 10-digit numbers
  },
}, {
  timestamps: true
});

const Student = mongoose.models.Student || mongoose.model('Student', studentSchema);

export default Student;
