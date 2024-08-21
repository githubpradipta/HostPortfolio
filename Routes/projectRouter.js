const express = require('express')
const Route=express.Router();
const {getAllProjects,creatProject,getProjectsByName,deleteAllProjets} = require("../Controllers/ProjectsController")
Route
// Returns all the porject records
.get('/myprojects',getAllProjects) 
// Return the project on the basis of given id
.get('/myproject/:id',getProjectsByName) 
// For creating one project record
.post('/myproject',creatProject)

.delete('/myprojects',deleteAllProjets)


module.exports=Route;