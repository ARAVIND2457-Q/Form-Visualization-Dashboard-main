const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
  doctorId: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  specialization: {
    type: String,
    required: true
  },
  contactNumber: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  availability: [{
    day: String,
    startTime: String,
    endTime: String
  }]
}, { timestamps: true });

const Doctor = mongoose.model('Doctor', DoctorSchema);

module.exports = Doctor;
