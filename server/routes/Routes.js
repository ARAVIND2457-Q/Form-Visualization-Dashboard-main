const express = require('express');
const mongoose = require('mongoose');
const User = require('../model/UserSchema.js')
const Patient = require('../model/PatientSchema.js')
const Doctor = require('../model/DoctorSchema.js')
const Appointment = require('../model/AppointmentSchema.js')
const bcrypt = require('bcrypt');

const route = express.Router();

route.get('/getusers', async (req, res) => {
    try {
        const allUsers = await User.find({});
        res.status(200).json(allUsers);
    } catch (error) {
        
    }
});

route.get('/', (req, res) => {
    res.json({ message: "Welcome to the server" });
})

route.post('/register', async (req, res) => {
    console.log('body', req.body)
    const { name, email, role, salery, password } = req.body;
    if(('hike' in req.body == false )){
        req.body = {...req.body, hike: "4"}
    }
    console.log(req.body)
    // if (!name || !email || !phone || !work || !password || !cpassword) {
    //     return res.status(422).json({ error: "plz fill all the details" });
    // }

    try {
        const UserExist = await User.findOne({ email: email });

        if (UserExist) { return res.status(200).json({ error: "user already exist" }) };

        const newUser = new User(req.body);
        // hashing of password using middleware pre(mongoose) in UserSchema
        const userreg = await newUser.save();
        console.log('reg', userreg)
        res.status(200).json({ message: "user registered successfully" });

    } catch (error) {
        console.log(error);
    }

})

route.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;

        // if (!email || !password) { return res.status(422).json({ error: "plz fill all the details" }) }
        const userLogin = await User.findOne({ email: email });
        // console.log(userLogin);

        if (userLogin) {

            const isMatch = await bcrypt.compare(password, userLogin.password);
            // console.log(isMatch);
            if (isMatch) {
                const token = await userLogin.generateAuthToken();
                console.log(token);

                res.cookie('jwtoken', token, {
                    expires: new Date(Date.now() + 25892000000),
                    httpOnly: true
                });
                res.status(200).json(userLogin);

            } else { res.status(200).json({ message: "Invalid Credentials" })}

        } else { res.status(200).json({ message: "Invalid Credentials" })};

    } catch (error) {
        console.log(error);
    }
})

// Patient routes
route.get('/patients', async (req, res) => {
    try {
        const patients = await Patient.find({});
        res.status(200).json(patients);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

route.get('/patients/:id', async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        if (!patient) return res.status(404).json({ message: 'Patient not found' });
        res.status(200).json(patient);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

route.post('/patients', async (req, res) => {
    try {
        const newPatient = new Patient(req.body);
        const savedPatient = await newPatient.save();
        res.status(201).json(savedPatient);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

route.put('/patients/:id', async (req, res) => {
    try {
        const updatedPatient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPatient) return res.status(404).json({ message: 'Patient not found' });
        res.status(200).json(updatedPatient);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

route.delete('/patients/:id', async (req, res) => {
    try {
        const deletedPatient = await Patient.findByIdAndDelete(req.params.id);
        if (!deletedPatient) return res.status(404).json({ message: 'Patient not found' });
        res.status(200).json({ message: 'Patient deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Doctor routes
route.get('/doctors', async (req, res) => {
    try {
        const doctors = await Doctor.find({});
        res.status(200).json(doctors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

route.get('/doctors/:id', async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id);
        if (!doctor) return res.status(404).json({ message: 'Doctor not found' });
        res.status(200).json(doctor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

route.post('/doctors', async (req, res) => {
    try {
        const newDoctor = new Doctor(req.body);
        const savedDoctor = await newDoctor.save();
        res.status(201).json(savedDoctor);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

route.put('/doctors/:id', async (req, res) => {
    try {
        const updatedDoctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedDoctor) return res.status(404).json({ message: 'Doctor not found' });
        res.status(200).json(updatedDoctor);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

route.delete('/doctors/:id', async (req, res) => {
    try {
        const deletedDoctor = await Doctor.findByIdAndDelete(req.params.id);
        if (!deletedDoctor) return res.status(404).json({ message: 'Doctor not found' });
        res.status(200).json({ message: 'Doctor deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Appointment routes
route.get('/appointments', async (req, res) => {
    try {
        const appointments = await Appointment.find({}).populate('patientId').populate('doctorId');
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

route.get('/appointments/:id', async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.id).populate('patientId').populate('doctorId');
        if (!appointment) return res.status(404).json({ message: 'Appointment not found' });
        res.status(200).json(appointment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

route.post('/appointments', async (req, res) => {
    try {
        const newAppointment = new Appointment(req.body);
        const savedAppointment = await newAppointment.save();
        res.status(201).json(savedAppointment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

route.put('/appointments/:id', async (req, res) => {
    try {
        const updatedAppointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedAppointment) return res.status(404).json({ message: 'Appointment not found' });
        res.status(200).json(updatedAppointment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

route.delete('/appointments/:id', async (req, res) => {
    try {
        const deletedAppointment = await Appointment.findByIdAndDelete(req.params.id);
        if (!deletedAppointment) return res.status(404).json({ message: 'Appointment not found' });
        res.status(200).json({ message: 'Appointment deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Visualization routes
route.get('/stats/patients/gender', async (req, res) => {
    try {
        const stats = await Patient.aggregate([
            { $group: { _id: '$gender', count: { $sum: 1 } } }
        ]);
        res.status(200).json(stats);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

route.get('/stats/appointments/status', async (req, res) => {
    try {
        const stats = await Appointment.aggregate([
            { $group: { _id: '$status', count: { $sum: 1 } } }
        ]);
        res.status(200).json(stats);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

route.get('/stats/doctors/specialization', async (req, res) => {
    try {
        const stats = await Doctor.aggregate([
            { $group: { _id: '$specialization', count: { $sum: 1 } } }
        ]);
        res.status(200).json(stats);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = route;
