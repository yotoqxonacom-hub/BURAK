// we always create controllers with objects
import { Request, Response } from "express";
import { T } from "../libs/types/common";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import MemberService from "../models/Member.service";
import { MemberType } from "../libs/enums/member.enum";
import Errors from "../libs/Errors";

const memberService = new MemberService();
// REACT

const memberController: T = {};

memberController.Signup = async (req: Request, res: Response) => {
    try {
        console.log("Signup")
        console.log("body:", req.body);
        // TODO: tokens, cookies, sessions, etc.

        const input: MemberInput = req.body,
            result: Member = await memberService.Signup(input);
        res.json({ member: result });
    } catch (err) {
        console.log("Error, signup:", err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standart.code).json(Errors.standart);
    }
};

memberController.Login = async (req: Request, res: Response) => {
    try {
        console.log("Login")
        const input: LoginInput = req.body,
            result = await memberService.Login(input);
        // TODO: tokens, cookies, sessions, etc.

        res.json({ member: result });
    } catch (err) {
        console.log("Error, login:", err)
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standart.code).json(Errors.standart);
    }
};

export default memberController;