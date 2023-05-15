import { User } from "../Models/User.js"
import {success,failed} from "../Common/reply.js";

const register = (req, res) => {
    return res.send(success({working :"yes"}))
}


export default {
    register
}