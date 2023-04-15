import StudentModel from '../models/Student.js'


class StudentController {

    static getAllDoc = async(req,res)=>{
        try{
            const result = await StudentModel.find()
            res.send(result)
        }catch(err){
            console.log("Model Error: ",err)
        }
    }


}

export default StudentController