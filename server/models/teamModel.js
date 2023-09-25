const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
    tname : {
        type : String,
        required : [true,'Team Name Is Required']
    },
    pname : {
        type : String,
        required : [true,'Project Name Is Required']
    },

    tlname : {
        type : String,
        required : [true,'Team Leader Name Is Required']
    },
    tlemail : {
        type : String,
        required : [true,'Team Leader Email Is Required']
    },
    tlnumber : {
        type : Number,
        required : [true,'Team Leader Phone Number Is Required']
    },
    tlrole : {
        type : String,
        required : [true,'Team Leader Role Is Required']
    },
    tlcollege : {
        type : String,
        required : [true,'Team Leader College Name Is Required']
    },
    tlrollno : {
        type : String,
        required : [true,'Team Leader Roll Number Is Required']
    },
    tlsemester: {
        type : Number,
        required : [true,'Team Leader Semester Is Required']
    },

    m2name : {
        type : String,
        required : [true,'2nd Team Member Name Is Required']
    },
    m2email : {
        type : String,
        required : [true,'2nd Team Member Email Is Required']
    },
    m2number : {
        type : Number,
        required : [true,'2nd Team Member Phone Number Is Required']
    },
    m2role : {
        type : String,
        required : [true,'2nd Team Member Role Is Required']
    },
    m2college : {
        type : String,
        required : [true,'2nd Team Member College Name Is Required']
    },
    m2rollno : {
        type : String,
        required : [true,'2nd Team Member Roll Number Is Required']
    },
    m2semester: {
        type : Number,
        required : [true,'2nd Team Member Semester Is Required']
    },

    m3name : {
        type : String
    },
    m3email : {
        type : String
    },
    m3number : {
        type : String
        
    },
    m3role : {
        type : String

    },
    m3college : {
        type : String
        
    },
    m3rollno : {
        type : String
        
    },
    m3semester: {
        type : String

    },

    m4name : {
        type : String

    },
    m4email : {
        type : String

    },
    m4number : {
        type : String
        
    },
    m4role : {
        type : String

    },
    m4college : {
        type : String
        
    },
    m4rollno : {
        type : String
    },
    m4semester: {
        type : String
    },

    password : {
        type : String,
        required : [true,'Password Is Required']
    }
},{timeStamps : true})

module.exports = mongoose.model('Team',teamSchema);