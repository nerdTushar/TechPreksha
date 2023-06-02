const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    team_id: {
        type : String,
        required : [true,'Team Id Is Required']
    },
    tname : {
        type : String,
        required : [true,'Team Name Is Required']
    },
    pname : {
        type : String,
        required : [true,'Project Name Is Required']
    },
    projectabstract: {
        type: String,
        required: true,
        match: /^https?:\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/,
      },
    projectyoutube: {
        type: String,
        required: true,
        match: /^https?:\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/,
      },
},{timeStamps : true})

module.exports = mongoose.model('Project',projectSchema);