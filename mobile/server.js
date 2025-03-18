import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

// Middleware setup
app.use(express.json());
app.use(cors()); // Fix: `cors` should be called as a function.

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/Register', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB!'))
    .catch(err => console.error('Failed to connect to MongoDB:', err));

// Creating Schema
const registerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true,unique:true},
    password: { type: String, required: true },
});

// Creating model
const RegisterModel = mongoose.model('Register', registerSchema);

// POST: Create a new registration
app.post('/Register', async (req, res) => {
    const { name, email, password } = req.body;
    // const existingUser = await User.findOne([ { email }]);
    
    // if (existingUser) {
    //   return res.status(400).json({ message: 'Email already taken.' });
    // }
    try {
        const newRegister = new RegisterModel({ name, email, password });
        await newRegister.save();
        res.status(201).json(newRegister);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create registration' });
    }
});

// GET: Fetch all registrations
app.get('/Register', async (req, res) => {
    try {
        const allRegisters = await RegisterModel.find();
        res.json(allRegisters);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch registrations' });
    }
});

// DELETE: Remove a registration by ID
app.delete('/Register/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await RegisterModel.findByIdAndDelete(id);
        res.status(200).json({ message: 'Registration deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to delete registration' });
    }
});

app.put('/Register/:id',async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        const id= req.params.id ;
        const updateRegister=await RegisterModel.findByIdAndUpdate(
            id,
            {name,email,password}
        )
        if(!updateRegister){
            return res.status(404).json({message:"Not Found"})
        }else{
            res.json(updateRegister)
        }

    }catch(e){
        console.log(e);
        res.status(500).json({message:"failed"})
    }
})

// Server setup
const port = 3002;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
