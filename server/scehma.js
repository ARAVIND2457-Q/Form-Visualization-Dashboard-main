const mongoose = require('mongoose');

// Patient Schema
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

// Doctor Schema
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

// Appointment Schema
const AppointmentSchema = new mongoose.Schema({
  appointmentId: {
    type: String,
    required: true,
    unique: true
  },
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true
  },
  dateTime: {
    type: Date,
    required: true
  },
  reason: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Scheduled', 'Completed', 'Cancelled'],
    default: 'Scheduled'
  },
  notes: String
}, { timestamps: true });

const Patient = mongoose.model('Patient', PatientSchema);
const Doctor = mongoose.model('Doctor', DoctorSchema);
const Appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports = { Patient, Doctor, Appointment };

const patient  = mongoose.model('patient', patientSchema);
const express = require('express');
const router = express.Router();
const { Patient, Doctor, Appointment } = require('../model/HealthcareSchema');

// Example route to create a new patient