// const User = require("../../models/Users");
// const { createToken } = require("../../helpers/jwt");
// const { passwordCompare } = require("../../helpers/hashPassword");


// const userLogin = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         if (!email || !password) {
//             return res.status(400).json({ error: "Enter Username and Password" });
//         }

//         const userLogin = await User.findOne({ email: email });

//         console.log('userLogin:', userLogin); // Add this line for logging

//         if (userLogin) {
//             // Hashing Password
//             const isMatch = await passwordCompare(password, userLogin.password);

//             console.log('isMatch:', isMatch); // Add this line for logging

//             if (!isMatch) {
//                 return res.status(400).json({ status: "400", message: "Invalid Email or Password" });
//             }

//             // //Generate JWT Token
//             // const token = createToken(userLogin, false, '1d');

//             // // Save the token in the user document
//             // userLogin.tokens = userLogin.tokens.concat({ token });
//             // await userLogin.save();

//             res.json({ status: "success", message: "Login Success"/* , token */ });

//         } else {
//             res.status(400).json({ message: "Invalid Email or Password" });
//         }

//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// };
// module.exports = {userLogin};




const User = require("../../models/Users");
const { createToken } = require("../../helpers/jwt");
const { passwordCompare } = require("../../helpers/hashPassword");

const userLogin = async (req, res) => {
    try {
        const { email, password, trainerEmail, trainerPassword } = req.body;

        if ((!email || !password) && (!trainerEmail || !trainerPassword)) {
            return res.status(400).json({ error: "Please provide email and password, or trainer email and password" });
        }

        let user;

        // Check if the user is logging in as a student
        if (email && password) {
            user = await User.findOne({ email });
        }

        // Check if the user is logging in as a trainer
        if (trainerEmail && trainerPassword) {
            user = await User.findOne({ trainerEmail });
        }

        if (!user) {
            return res.status(400).json({ error: "Invalid Email or Password" });
        }

        // Compare passwords based on whether it's a student or trainer
        const isMatch = trainerEmail ? await passwordCompare(trainerPassword, user.trainerPassword) : await passwordCompare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ error: "Invalid Email or Password" });
        }

        // If needed, you can generate a token here
        // const token = createToken(user, '1d');

        res.json({ status: "success", message: "Login Success"/* , token */ });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { userLogin };
