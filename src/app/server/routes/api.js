const express = require('express');
const express = express.Router();
const mongoose = require('mongoose');
const users = require('../models/users');
const routines = require('../models/routines');

const db = 'mongodb://gainzadmin:<gainzpassword@gainz-akwil.mongodb.net/test'; // mongoose db api link

mongoose.Promise = global.Promise
mongoose.connect(db, function(err){
    if(err){
        console.error("Error!" + err);
    }
});

// GET ALL USER ROUTINE INFORMATION
router.get('/routines', function(req, res){
    console.log('Get request for all users routines');
    routines.find({})
    .exec(function(err, routines){
        if (err){
            console.log("Error retreiving user routines");

        } else{
            res.json(routines)
        }
    });
});

// GET BY USERNAME
router.get('/routines/:username', function(req, res){
    console.log('Get request for specific user routines');
    routines.findByUsername(req.params.id)
    .exec(function(err, routine){
        if (err){
            console.log("Error retreiving user routines");

        } else{
            res.json(routines);
        }
    });
});

// Post or Create a new routine.
router.post('/routines', function(req, res){
    console.log('Post a video');
    var newRoutine = new routine();
    newRoutine.description = req.body.description;  // Need to create a form triggered by a button on the user profile
    newRoutine.reps = req.body.reps;                // to create the routines. 
    newRoutine.sets = req.body.sets;
    newRoutine.image = req.body.image;
    newRoutine.video = req.body.video;
    newRoutine.save(function(err, insertedRoutine){
        if(err){
            console.log('Error saving video');
        } else{
            res.json(insertedRoutine);
        }
    })
})

// Post or Create a new user.
router.post('/users', function(req, res){
    console.log('Post a video');
    var newUser = new user();
    newUser.username = req.body.username;  // Need to create a form triggered by a button on the signup page
    newUser.email = req.body.email;                // to create the users. 
    newUser.password = req.body.password;
    newUser.firstname = req.body.firstname;
    newUser.lastname = req.body.lastname;
    newUser.birthday = req.body.birthday;
    newUser.save(function(err, insertedUser){
        if(err){
            console.log('Error saving video');
        } else{
            res.json(insertedUser);
        }
    })
})

// UPDATE Routine. 

router.put('/routine/:username', function(req, res){
    console.log('Update a routine');
    routines.findByUsernameAndUpdate(req.params.username,
        {
            $set: {description: req.body.description,  // Need to create a form triggered by a button on the user profile
                    reps: req.body.reps,                 // to update the routines.
                    sets: req.body.sets,
                    image: req.body.image,
                    video: req.body.video}
        } ),
        {
            new: true

        },
        function(err, updatedRoutine){
            if(err){
                res.send("Error updating routine");
            } else {
                res.json(updatedRoutine);
            }
        }
})

// Delete a routine
router.delete('routines/:username', function(req, res){
    console.log('Deleting Routine');
    routines.findByUsernameAndRemove(req.params.username, function(err, deletedRoutine){
        if(err){
            res.send("Error deleting routine");
        }
        else{
            res.json(deletedRoutine);
        }
    })
})



module.exports = router;