import { User } from "../model/user.model";
import bcrypt from "bcryptjs";

export const userCtrl = {
    createUser: async (req: any, res: any) => {
        try {
            const { firstName, lastName, userName, email, password } = req.body;
            console.log("✌️req.body --->", req.body);
            if (!firstName || !lastName || !userName || !email || !password) {
                return res
                    .status(400)
                    .json({ message: "All fields are required" });
            }
            const convertedEmail = email.toLowerCase();
            const hashedPassword = bcrypt.hashSync(password, 12);
            const user = new User({
                firstName,
                lastName,
                userName,
                email: convertedEmail,
                password: hashedPassword,
            });
            await user.save();
            return res
                .status(201)
                .json({ message: "User created successfully" });
        } catch (err: any) {
            return res.status(500).json({ message: err });
        }
    },
    loginUser: async (req: any, res: any) => {
        try {
            const { userName, password } = req.body;
            if (!userName || !password) {
                return res
                    .status(400)
                    .json({ message: "All fields are required" });
            }
            const user = await User.findOne({ userName });
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            const isMatch = bcrypt.compareSync(password, user.password);
            

            if (!isMatch) {
                return res.status(400).json({ message: "Invalid credentials" });
            }
            return res.status(200).json({ message: "Login successful" });
        } catch (err: any) {
            return res.status(500).json({ message: err.message });
        }
    },
};
