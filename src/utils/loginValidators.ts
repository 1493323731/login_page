import {  reactive } from "vue";
interface User {
    email:string;
    password:string;
}
export const loginUser = reactive<User>({
    email: "",
    password: ""
});
//校验规则
interface loginRules{
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
}
export const loginRules = reactive<loginRules>({
    email: [{ type: "email", message: "Email is incorrect...", required: true, trigger: 'blur' }],
    password: [
        { message: "Password could not be empty...",required: true, trigger: 'blur'  },
        { min: 6, max: 18, message: "Passwords are 6 to 18 characters long...", trigger: 'blur' }
    ],
});
