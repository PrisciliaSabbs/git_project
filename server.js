const express = require("express");
const app = express();
const PORT = 4000;
const fs = require("fs");
const bodyParser = require("body-parser");
//const mongoose = require("mongoose");
//const Contact = require("./models/contact.js");

app.set("view engine", "ejs");

// const uri =
//   "mongodb+srv://PrisciliaSabbs:lasertech@africaagility.ynvad.mongodb.net/AfricaAgility?retryWrites=true&w=majority";
//   mongoose.connect(uri)
// .then((res) => {
//   console.log("database connected");

  app.listen(PORT, () => {
    console.log("listening on port", PORT);
  });
//})
// .catch((err) => {
//   console.log("error connecting", err);
// });

// middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get("/", (req, res) => {
  // res.sendFile("./index.html", { root: __dirname });
  const jobs = [
    "Graphic Artist",
    "Web Designer",
    "Web Designer",
    "Web Designer",
    "Web Designer",
    "Illustrator",
  ];
  works = [
    {
      img: "assets/img/portfolio/cabin.png",
      id: "#portfolioModal1",
    },
    {
      img: "assets/img/portfolio/cake.png",
      id: "#portfolioModal2",
    },
    {
      img: "assets/img/portfolio/circus.png",
      id: "#portfolioModal3",
    },
    {
      img: "assets/img/portfolio/game.png",
      id: "#portfolioModal4",
    },
    {
      img: "assets/img/portfolio/safe.png",
      id: "#portfolioModal5",
    },
  ];
  const profileImg = "assets/img/avataaars.svg";
  res.render("index", { jobs, works, profile: profileImg });
});
app.get("/about", (req, res) => {
  const name = "mariam";
  res.render("about", { name });
});
app.get("/contact", (req, res) => {
  res.render("contact", {error: false, success: false, values: {}});
});
app.post("/contact", (req, res) => {
  //res.render("contact");
  //res.json({});
  console.log("The request posted to contact", req.body);
  //JSON
  //JSON stringify() to convert to a string
  let result = JSON.stringify(req.body);
  //JSON
  console.log(result);
  console.log(typeof result, typeof req.body);
  console.log(result.name);
  let name = req.body.name;
  let date = new Date().toDateString();
  let path = "./contacts/" + name + "-" + date + ".txt";
  
  //validation
  if(!req.body.name){
    res.render("contact",{
      error: "Name is required",
      success: false,
      values: req.body,
    });
  }else if(!req.body.email){
    res.render("contact",{
      error: "Email is required",
      success: false,
      values: req.body, 
    });
  }
  fs.writeFile(path, result, (err) =>{
    if (err) {
      console.log(err);
      res.render("contact", {
        error: "err:" + err,
        success: false,
        values: {},
      });
    }else{
      console.log("success");
      res.render("contact",{
        error: false,
        success: "Successfully posted contact",
        values: {},
      });
    }

  //   const payload = {
  //     fullname: req.body.name,
  //     email: req.body.email,
  //     phone: req.body.phone,
  //     message: req.body.message
  //   };

  //   const contactM = new contact();
  //   contactM.save(payload)
  //   .then((result) => {
  //     console.log("Contact saved", result);
  //     res.render("contact", {
  //       error: false,
  //       success: "Successfully posted contact",
  //       values: {},
  //     })
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.render("contact", {
  //       error: "err" + err,
  //       success: false,
  //       values: {},
  //     });
  //   });
   });
  //fs.writeFile()
  //res.send("request sent");
});
app.get("/register", (req, res) => {
  res.render("register");
});


