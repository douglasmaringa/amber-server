const router = require("express").Router();
const Users = require("../models/Users")


//get all users
router.get("/", (req, res) => {
    Users.find((err,user)=>{
      if(err){
        res.send(err)
      }else{
        res.json(user)
      }
    })
});

//add users
router.post("/",(req,res)=>{
    let user = new Users(req.body)
    user.save()
        .then(user => {
            res.status(200).json({'user': 'user added successfully'})
        })
        .catch(err => {
            res.status(400).send('adding new user failed')
        })
})

// get user by id
router.get("/:id",(req,res)=>{
    let id = req.params.id
    Users.findById(id,(err,user)=>{
      if(err){
        res.send(err)
      }else{
        res.json(user)
      }
    })
  })

  //delete user by id
router.delete("/:id",(req,res)=>{
    let id = req.params.id
    Users.findByIdAndRemove(id)
    .then(()=>{
      res.json("deleted")
    }).catch(err=>{
      res.send(err)
    })
  })

  //update users
  router.post('/edit/:id',  (req, res) => {
        const updatedUser = {
            title: req.body.title,
            paragraph: req.body.paragraph,
        };

        User.findByIdAndUpdate(req.params.id, updatedUser, err => {
            if (err) throw err;
            else res.json({ success: 'success' });
        });
   
});

  //get users by search
router.post("/search",(req,res)=>{
    const query = Users.find(req.body)
  
    //find by one gets 1 item the find gets all items
    // selecting the `title` and `paragraph` fields
    query.select('title paragraph')
    query.exec(function (err, user) {
      if (err) return handleError(err);
      
       res.json(user)
    });
  })

module.exports = router;