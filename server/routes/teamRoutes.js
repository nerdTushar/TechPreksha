const express = require('express');
const router = express.Router();
const Team = require('../models/teamModel');
const Project = require('../models/projectModel');

router.post('/register',(req,res) => {
    const {tname,pname,tlname,tlemail,tlnumber,tlrole,tlcollege,tlrollno,tlsemester,
        m2name,m2email,m2number,m2role,m2college,m2rollno,m2semester,
        m3name,m3email,m3number,m3role,m3college,m3rollno,m3semester,
        m4name,m4email,m4number,m4role,m4college,m4rollno,m4semester,password} = req.body;
    const newTeam = new Team({tname,pname,tlname,tlemail,tlnumber,tlrole,tlcollege,tlrollno,tlsemester,
        m2name,m2email,m2number,m2role,m2college,m2rollno,m2semester,
        m3name,m3email,m3number,m3role,m3college,m3rollno,m3semester,
        m4name,m4email,m4number,m4role,m4college,m4rollno,m4semester,password});
    try {
       newTeam.save();
       res.status(200).json({
           success : true,
           message : 'Register Success'
       });
    } catch (error) {
       res.status(400).json({
            message : error
       });
    }
});

router.post('/submitprojectlink',(req,res) => {
    const projectyoutube = req.body.projectyoutube;
    const projectabstract = req.body.projectabstract;
    const team_id = req.body.team_id;
    const tname = req.body.tname;
    const pname = req.body.pname;
    const newProject = new Project({team_id,tname,pname,projectabstract,projectyoutube});
    try {
       newProject.save();
       res.status(200).json({
           success : true,
           message : 'Submitted Success'
       });
    } catch (error) {
       res.status(400).json({
            message : error
       });
    }
});

router.post('/login', async (req,res) => {
    const {tname,password} = req.body;
    try {
        const team = await Team.find({tname,password});
         if(team.length > 0){
           const currentTeam = {
             tname : team[0].tname,
             pname : team[0].pname,

             tlname : team[0].tlname,
             tlemail : team[0].tlemail,
             tlnumber : team[0].tlnumber,
             tlrole : team[0].tlrole,
             tlcollege : team[0].tlcollege,
             tlrollno : team[0].tlrollno,
             tlsemester : team[0].tlsemester,

             m2name : team[0].m2name,
             m2email : team[0].m2email,
             m2number : team[0].m2number,
             m2role : team[0].m2role,
             m2college : team[0].m2college,
             m2rollno : team[0].m2rollno,
             m2semester : team[0].m2semester,

             m3name : team[0].m3name,
             m3email : team[0].m3email,
             m3number : team[0].m3number,
             m3role : team[0].m3role,
             m3college : team[0].m3college,
             m3rollno : team[0].m3rollno,
             m3semester : team[0].m3semester,

             m4name : team[0].m4name,
             m4email : team[0].m4email,
             m4number : team[0].m4number,
             m4role : team[0].m4role,
             m4college : team[0].m4college,
             m4rollno : team[0].m4rollno,
             m4semester : team[0].m4semester,

             _id : team[0]._id
           }
           res.status(200).send(currentTeam);
        }else{
          res.status(400).json({
             message : 'Login Failed'
          })
        }
    } catch (error) {
       res.status(404).json({
          message : 'Something Went Wrong'
       })
    }
 });

 router.post('/getteambyid',async (req,res) => {
   const teamId = req.body.teamId;
   try {
        const team = await Team.findOne({_id:teamId});
        res.send(team);
   } catch (error) {
        res.json({message : error});
   }
});

 router.post('/getprojectbyid',async (req,res) => {
   const team_id = req.body.team_id;
   try {
        const project = await Project.findOne({team_id:team_id});
        res.send(project);
   } catch (error) {
        res.json({message : error});
   }
});

router.post('/updateteam',async (req,res) => {
   const updatedTeam = req.body.updatedTeam;
   const _id = req.body._id;
   try {
        const team = await Team.findOne({_id:_id});
        team.tname = updatedTeam.tname;
        team.pname = updatedTeam.pname;

        team.tlname = updatedTeam.tlname;
        team.tlemail = updatedTeam.tlemail;
        team.tlnumber = updatedTeam.tlnumber;
        team.tlrole = updatedTeam.tlrole;
        team.tlcollege = updatedTeam.tlcollege;
        team.tlrollno = updatedTeam.tlrollno;
        team.tlsemester = updatedTeam.tlsemester;

        team.m2name = updatedTeam.m2name;
        team.m2email = updatedTeam.m2email;
        team.m2number = updatedTeam.m2number;
        team.m2role = updatedTeam.m2role;
        team.m2college = updatedTeam.m2college;
        team.m2rollno = updatedTeam.m2rollno;
        team.m2semester = updatedTeam.m2semester;

        team.m3name = updatedTeam.m3name;
        team.m3email = updatedTeam.m3email;
        team.m3number = updatedTeam.m3number;
        team.m3role = updatedTeam.m3role;
        team.m3college = updatedTeam.m3college;
        team.m3rollno = updatedTeam.m3rollno;
        team.m3semester = updatedTeam.m3semester;

        team.m4name = updatedTeam.m4name;
        team.m4email = updatedTeam.m4email;
        team.m4number = updatedTeam.m4number;
        team.m4role = updatedTeam.m4role;
        team.m4college = updatedTeam.m4college;
        team.m4rollno = updatedTeam.m4rollno;
        team.m4semester = updatedTeam.m4semester;
        
        team.password = updatedTeam.password;
        await team.save();
        res.status(200).send('Team Updated Successfully');
   } catch (error) {
        res.status(400).json({message : error});
   }
});

router.post('/deleteteam',async (req,res) => {
   const teamId = req.body.teamId;
   try {
        await Team.findOneAndDelete({_id:teamId});
        res.status(200).send('Team Deleted Successfully');
   } catch (error) {
        res.status(404).json({message : error});
   }
});

router.get('/getallteams', async (req,res) => {
   try {
    const teams = await Team.find({});
   res.status(200).send(teams);
   } catch (error) {
    res.status(404).json({message : error.stack});
   }
});

router.post('/deleteproject',async (req,res) => {
   const projectId = req.body.projectId;
   try {
        await Project.findOneAndDelete({_id:projectId});
        res.status(200).send('Project Deleted Successfully');
   } catch (error) {
        res.status(404).json({message : error});
   }
});

router.get('/getallprojects', async (req,res) => {
   try {
    const projects = await Project.find({});
   res.status(200).send(projects);
   } catch (error) {
    res.status(404).json({message : error.stack});
   }
});

module.exports = router;