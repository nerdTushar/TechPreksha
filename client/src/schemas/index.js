import * as Yup from 'yup';

const phoneRegExp = /^[5-9][0-9]{9}$/;
const semesterRegExp = /^[1-8]$/;
const admincodeRegExp = /^[0-9]{9}$/;
// const nameRegExp = /^[a-zA-Z0-9_]{30}$/;

export const registerSchema = Yup.object({
    tname: Yup.string().min(5).max(25).required("Please enter your team name"),
    pname: Yup.string().min(5).max(25).required("Please enter your project name"),

    tlname: Yup.string().min(5).max(25).required("Please enter your team leader name"),
    tlemail: Yup.string().email().required("Please enter your team leader email"),
    tlnumber: Yup.string().matches(phoneRegExp, "Phone number is not valid").required("Please enter your team leader number"),
    tlrole: Yup.string().min(2).max(25).required("Please enter your team leader role"),
    tlcollege: Yup.string().min(5).max(50).required("Please enter your team leader college name"),
    tlrollno: Yup.number().min(5).required("Please enter your team leader roll no"),
    tlsemester: Yup.string().matches(semesterRegExp, "Semester is not valid").required("Please enter your team leader semester"),

    m2name: Yup.string().min(5).max(25).required("Please enter your 2nd team member name"),
    m2email: Yup.string().email().required("Please enter your 2nd team member email"),
    m2number: Yup.string().matches(phoneRegExp, "Phone number is not valid").required("Please enter your 2nd team member number"),
    m2role: Yup.string().min(2).max(25).required("Please enter your team leader role"),
    m2college: Yup.string().min(5).max(50).required("Please enter your 2nd team member college name"),
    m2rollno: Yup.number().min(5).required("Please enter your 2nd team member roll no"),
    m2semester: Yup.string().matches(semesterRegExp, "Semester is not valid").required("Please enter your 2nd team member semester"),

    m3name: Yup.string().min(5).max(25).required("Please enter your 3rd team member name").optional(),
    m3email: Yup.string().email().required("Please enter your 3rd team member email").optional(),
    m3number: Yup.string().matches(phoneRegExp, "Phone number is not valid").required("Please enter your 3rd team member number").optional(),
    m3role: Yup.string().min(2).max(25).required("Please enter your 3rd team member role").optional(),
    m3college: Yup.string().min(5).max(50).required("Please enter your 3rd team member college name").optional(),
    m3rollno: Yup.number().min(5).required("Please enter your 3rd team member roll no").optional().transform((value,originalValue) => {
        return originalValue === undefined ? '' : value;
    }),
    m3semester: Yup.string().matches(semesterRegExp, "Semester is not valid").required("Please enter your 3rd team member semester").optional(),

    m4name: Yup.string().min(5).max(25).required("Please enter your 4th team member name").optional(),
    m4email: Yup.string().email().required("Please enter your 4th team member email").optional(),
    m4number: Yup.string().matches(phoneRegExp, "Phone number is not valid").required("Please enter your 4th team member number").optional(),
    m4role: Yup.string().min(2).max(25).required("Please enter your 4th team member role").optional(),
    m4college: Yup.string().min(5).max(50).required("Please enter your 4th team member college name").optional(),
    m4rollno: Yup.number().min(5).required("Please enter your 4th team member roll no").optional(),
    m4semester: Yup.string().matches(semesterRegExp,"Semester is not valid").required("Please enter your 4th team member semester").optional(),
    
    password: Yup.string().min(6).required("Please enter your password"),
    confirm_password: Yup.string().required("Please confirm password").oneOf([Yup.ref('password'), null],"Password must match"),
    agreeToTerms: Yup.boolean()
    .oneOf([true], 'You must agree to the terms and privacy policy')
    .required('You must agree to the terms and privacy policy'),
});

export const editteamSchema = Yup.object({
    tname: Yup.string().min(5).max(25).required("Please enter your team name"),
    pname: Yup.string().min(5).max(25).required("Please enter your project name"),

    tlname: Yup.string().min(5).max(25).required("Please enter your team leader name"),
    tlemail: Yup.string().email().required("Please enter your team leader email"),
    tlnumber: Yup.string().matches(phoneRegExp, "Phone number is not valid").required("Please enter your team leader number"),
    tlrole: Yup.string().min(2).max(25).required("Please enter your team leader role"),
    tlcollege: Yup.string().min(5).max(50).required("Please enter your team leader college name"),
    tlrollno: Yup.number().min(5).required("Please enter your team leader roll no"),
    tlsemester: Yup.string().matches(semesterRegExp, "Semester is not valid").required("Please enter your team leader semester"),

    m2name: Yup.string().min(5).max(25).required("Please enter your 2nd team member name"),
    m2email: Yup.string().email().required("Please enter your 2nd team member email"),
    m2number: Yup.string().matches(phoneRegExp, "Phone number is not valid").required("Please enter your 2nd team member number"),
    m2role: Yup.string().min(2).max(25).required("Please enter your team leader role"),
    m2college: Yup.string().min(5).max(50).required("Please enter your 2nd team member college name"),
    m2rollno: Yup.number().min(5).required("Please enter your 2nd team member roll no"),
    m2semester: Yup.string().matches(semesterRegExp, "Semester is not valid").required("Please enter your 2nd team member semester"),

    m3name: Yup.string().min(5).max(25).required("Please enter your 3rd team member name").optional(),
    m3email: Yup.string().email().required("Please enter your 3rd team member email").optional(),
    m3number: Yup.string().matches(phoneRegExp, "Phone number is not valid").required("Please enter your 3rd team member number").optional(),
    m3role: Yup.string().min(2).max(25).required("Please enter your 3rd team member role").optional(),
    m3college: Yup.string().min(5).max(50).required("Please enter your 3rd team member college name").optional(),
    m3rollno: Yup.number().min(5).required("Please enter your 3rd team member roll no").optional().transform((value,originalValue) => {
        return originalValue === undefined ? '' : value;
    }),
    m3semester: Yup.string().matches(semesterRegExp, "Semester is not valid").required("Please enter your 3rd team member semester").optional(),

    m4name: Yup.string().min(5).max(25).required("Please enter your 4th team member name").optional(),
    m4email: Yup.string().email().required("Please enter your 4th team member email").optional(),
    m4number: Yup.string().matches(phoneRegExp, "Phone number is not valid").required("Please enter your 4th team member number").optional(),
    m4role: Yup.string().min(2).max(25).required("Please enter your 4th team member role").optional(),
    m4college: Yup.string().min(5).max(50).required("Please enter your 4th team member college name").optional(),
    m4rollno: Yup.number().min(5).required("Please enter your 4th team member roll no").optional(),
    m4semester: Yup.string().matches(semesterRegExp, "Semester is not valid").required("Please enter your 4th team member semester").optional(),

    password: Yup.string().min(6).required("Please enter your password"),
    agreeToTerms: Yup.boolean()
    .oneOf([true], 'You must agree to the terms and privacy policy')
    .required('You must agree to the terms and privacy policy'),
});

export const projectsubmitSchema = Yup.object({
    projectabstract: Yup.string().url('Invalid project abstract link').required('Please enter your project abstract link'),
    projectyoutube: Yup.string().url('Invalid project youtube link').required('Please enter your project youtube link'),
    agreeToTerms: Yup.boolean()
    .oneOf([true], 'You must agree to the terms and privacy policy')
    .required('You must agree to the terms and privacy policy'),
});

export const loginSchema = Yup.object({
    tname: Yup.string().min(5).max(25).required("Please enter your team name"),
    password: Yup.string().min(6).required("Please enter your password"),
    agreeToTerms: Yup.boolean()
    .oneOf([true], 'You must agree to the terms and privacy policy')
    .required('You must agree to the terms and privacy policy'),
});

export const adminloginSchema = Yup.object({
    adminname: Yup.string().min(5).max(25).required("Please enter your admin name"),
    admincode: Yup.string().matches(admincodeRegExp, "Admin secret code is not valid").required("Please enter your admin secret code"),
    password: Yup.string().min(6).required("Please enter your admin password"),
    agreeToTerms: Yup.boolean()
    .oneOf([true], 'You must agree to the terms and privacy policy')
    .required('You must agree to the terms and privacy policy'),
});