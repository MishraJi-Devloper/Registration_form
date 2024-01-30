const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;
const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

// MongoDB connection
mongoose.connect(`mongodb+srv://${username}:${encodeURIComponent(password)}@cluster0.omlusnv.mongodb.net/regformdb`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Create MongoDB schema and model
const registrationSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});
const Registration = mongoose.model("Registration", registrationSchema);

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files
app.use(express.static('public'));

// Routes
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if the email is already registered
        const existingUser = await Registration.findOne({ email : email });
        if (existingUser) {
            // Display alert message
            return res.status(400).send('<script>alert("Email is already registered."); window.location.href = "/";</script>');
        }


        // If the email is not registered, proceed with registration
        else{
        const registrationData = new Registration({
            name,
            email,
            password
        });
        await registrationData.save();
        
        // Redirect to registration success page with query parameter
        res.redirect('/?success=true');

    } } catch (error) {
        console.log(error);
        res.status(500).send("An error occurred during registration.");
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
