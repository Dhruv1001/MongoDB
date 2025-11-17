const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
  
    accountAddress:{
        type:String,
        required:true
    },
    imageName:{
        type:String,
        required:true
    }
})
const CandidateModel = mongoose.model('Candidates',CandidateSchema);
module.exports = CandidateModel;