const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
  patientId:{
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
  dateOfBirth: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
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
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String
  },
  medicalHistory: [{
    condition: String,
    diagnosisDate: Date,
    treatment: String
  }],
  currentMedications: [{
    name: String,
    dosage: String,
    frequency: String
  }],
  allergies: [String],
  emergencyContact: {
    name: String,
    relationship: String,
    phoneNumber: String
  }
}, { timestamps: true });

const Patient = mongoose.model('Patient', PatientSchema);

module.exports = Patient;
