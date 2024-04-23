// const User = require("../../models/Users");
// const { hashPassword } = require("../../helpers/hashPassword");
// const { createToken } = require("../../helpers/jwt"); // Import the createToken function

// class UserController {
//     static userRegistration = async (req, res) => {
//         try {
//             const { username, email, password } = req.body;

//             if (!username || !email || !password) {
//                 return res.status(422).json({ error: "Please fill in all fields properly" });
//             }

//             const userExist = await User.findOne({ email: email });

//             if (userExist) {
//                 return res.status(422).json({ error: "User already exists" });
//             }

//             // Hashing Password
//             const hashedPassword = await hashPassword(password);
//             const user = new User({
//                 username,
//                 email,
//                 password: hashedPassword,
//             });

//             const savedUser = await user.save(); // Save the user and get the saved user object

//             // Generate JWT Token using the saved user object
//             const token = createToken(savedUser, false, '1d');

//             // Save the token
//             savedUser.tokens = savedUser.tokens.concat({ token });
//             await savedUser.save();

//             res.status(201).json({ message: "User registered successfully", token });

//         } catch (error) {
//             console.error("Error in user registration:", error);
//             res.status(500).json({ error: "Failed to register" });
//         }
//     }
// }

// module.exports = { UserController };




const User = require("../../models/Users");
const { hashPassword } = require("../../helpers/hashPassword");
const { createToken } = require("../../helpers/jwt");
const { sendVerifyMail } = require("../../helpers/sendVerifyMail"); // Assuming you have a helper function for sending emails
const VerificationModel = require("../../models/VerificationModel");

class UserController {
    static async userRegistration(req, res) {
        try {
            const { username, email, password, status } = req.body;
            // Validate username, email, and password
            if (!username || !email || !password) {
                return res.status(422).json({ error: "Please provide username, email, and password" });
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                return res.status(422).json({ error: "Invalid email format" });
            }

            // Password validation
            if (password.length < 8 || !/[!@#$%^&*]/.test(password)) {
                return res.status(422).json({ error: "Password should be at least 8 characters long and contain a symbol or special character" });
            }

            // Check if user already exists
            const userExist = await User.findOne({ email });
            if (userExist) {
                return res.status(422).json({ error: "User already exists" });
            }

            // Hash password
            const hashedPassword = await hashPassword(password);

            // Create new user
            const newUser = new User({
                username,
                email,
                password: hashedPassword,
                status: status || "active"
            });

            // Save user
            const savedUser = await newUser.save();

            // Send verification email
            await sendVerifyMail(username, email, savedUser._id);

            // Create verification record
            const verificationData = {
                username,
                email,
                password: hashedPassword,
                userId: savedUser._id,
            };
            const verificationRecord = new VerificationModel(verificationData);
            await verificationRecord.save();

            // Generate JWT Token
            const token = createToken(savedUser, false, '1d');
            savedUser.tokens = savedUser.tokens.concat({ token });            
            await savedUser.save();

            res.status(201).json({ message: "User registered successfully. Verification email sent.", token });

        } catch (error) {
            console.error("Error in user registration:", error);
            res.status(500).json({ error: "Failed to register. Please try again later." });
        }
    }
}

module.exports = { UserController };
