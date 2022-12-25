import { reactive } from "vue";
//检查密码和确认密码是否一致
const validateConfirmPass = (rule: RegisterRlues, value: string, callback: any) => {
    if (value === '') {
        callback(new Error('Please input the password again'))
    } else if (value !== registerUser.password) {
        callback(new Error("Two inputs don't match!"))
    } else {
        callback()
    }
}

interface RegisterUser{
    name: string;
    email: string;
    password: string;
    confirm_password: string;
    role: string;
}
interface RegisterRlues{
    name: ({
        message: string;
        required: boolean;
        trigger: string;
    } | {
        min: number;
        max: number;
        message: string;
        trigger: string;
    })[];
    email: {
        type: string;
        message: string;
        required: boolean;
        trigger: string;
    }[];
    password: ({
        message: string;
        required: boolean;
        trigger: string;
    } | {
        min: number;
        max: number;
        message: string;
        trigger: string;
    })[];
    confirm_password:  ({
        message: string;
        required: boolean;
        trigger: string;
        min?: undefined;
        max?: undefined;
    } | {
        min: number;
        max: number;
        message: string;
        trigger: string;
    } | {
    validator: (rule:RegisterRlues,value:string,callback: any)=>void;
    trigger: string;
  })[];
}
export const registerUser = reactive<RegisterUser>({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    role: ""
});
//校验规则
export const registerRlues = reactive<RegisterRlues>({
    name: [
        { message: "username could not be empty", required: true, trigger: 'blur' },
        { min: 2, max: 12, message: "The length is 2 to 12 characters", trigger: 'blur' }
    ],
    email: [{ type: "email", message: "Email is incorrect...", required: true, trigger: 'blur' }],
    password: [
        { message: "Password could not be empty...", required: true, trigger: 'blur' },
        { min: 6, max: 18, message: "Passwords are 6 to 18 characters long...", trigger: 'blur' }
    ],
    confirm_password: [
        { message: "Confirm_password could not be empty...", required: true, trigger: 'blur' },
        { min: 6, max: 18, message: "Passwords are 6 to 18 characters long...", trigger: 'blur' },
        { validator: validateConfirmPass, trigger: 'blur' }
    ],
});