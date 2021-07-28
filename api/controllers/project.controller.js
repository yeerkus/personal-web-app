const Project = require("../models/Project")

module.exports = class projectCtrl{
    static async getAllProjects(req, res){
        try{
            const projects = await Project.find();
            if(!projects){
                res.json("No Projects found :(")
            }
            res.json(projects)
            console.log(projects)
        } catch(err){
            console.log(err)
        }
    }
}