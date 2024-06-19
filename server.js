const express = require('express');
const app = express();
const port = 3000;

// Sample patient data
const patients = {
    1: { name: 'John Doe', age: 30, condition: 'Flu' },
    2: { name: 'Jane Smith', age: 40, condition: 'Diabetes' },
    3: { name: 'Sam Brown', age: 50, condition: 'Hypertension' }
};

app.use(express.static('public'));

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

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
