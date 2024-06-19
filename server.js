const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Sample patient data
const patients = {
    1: { name: 'John Doe', age: 30, condition: 'Flu' },
    2: { name: 'Jane Smith', age: 40, condition: 'Diabetes' },
    3: { name: 'Sam Brown', age: 50, condition: 'Hypertension' }
};

// Sample interaction data
const interactionData = [
    { timestamp: '2024-06-19 10:00:00', touch: 5, vocal: 3, handleMovement: 2 },
    { timestamp: '2024-06-19 10:30:00', touch: 7, vocal: 4, handleMovement: 3 },
    { timestamp: '2024-06-19 11:00:00', touch: 6, vocal: 2, handleMovement: 5 },
    { timestamp: '2024-06-19 11:30:00', touch: 8, vocal: 5, handleMovement: 4 },
    { timestamp: '2024-06-19 12:00:00', touch: 9, vocal: 6, handleMovement: 7 }
];

const interactionDataPet = [
    { timestamp: '2024-06-19 10:00:00', head: 5, tail: 3, purring: 2 },
    { timestamp: '2024-06-19 10:30:00', head: 7, tail: 4, purring: 3 },
    { timestamp: '2024-06-19 11:00:00', head: 6, tail: 2, purring: 5 },
    { timestamp: '2024-06-19 11:30:00', head: 8, tail: 5, purring: 4 },
    { timestamp: '2024-06-19 12:00:00', head: 9, tail: 6, purring: 7 }
];

const patientPetDetails = [
    {
        patientName: 'John Doe',
        patientRoom: '101',
        petId: 'P001',
        petName: 'Buddy',
        petType: 'Dog',
        petStartDate: '2024-06-01',
        petEndDate: '2024-06-15'
    },
    {
        patientName: 'Jane Smith',
        patientRoom: '102',
        petId: 'P002',
        petName: 'Mittens',
        petType: 'Cat',
        petStartDate: '2024-06-05',
        petEndDate: '2024-06-20'
    },
    {
        patientName: 'Alice Johnson',
        patientRoom: '103',
        petId: 'P003',
        petName: 'Charlie',
        petType: 'Rabbit',
        petStartDate: '2024-06-10',
        petEndDate: '2024-06-25'
    }
];

// Route to get interaction data
app.get('/interaction-data', (req, res) => {
    res.json(interactionData);
})

// Route to get interaction data
app.get('/interaction-data-pet', (req, res) => {
    res.json(interactionDataPet);
});

// Route to get patient and pet details
app.get('/patient-pet-details', (req, res) => {
    res.json(patientPetDetails);
});

//app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

// Route to get patient information by ID
app.get('/patient/:id', (req, res) => {
    const patientId = req.params.id;
    const patient = patients[patientId];

    if (patient) {
        res.json(patient);
    } else {
        res.json({ error: 'Patient not found' });
    }
});

app.get('/1', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '1'));
  });

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
