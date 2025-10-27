import express from "express";
import userData from './users.json' with {type: 'json'};
const app = express();

// Routes
app.get("/", (req, res) => {
  console.log(userData);
  res.send(userData)
});

app.get('/user/:id',(req,res)=>{
  const id = req.params.id;
  const filteredData=userData.filter((user)=>user.id==id)
  res.send(filteredData);
});

app.listen(3500, () =>
  console.log(`Server running on port http://localhost:3500`)
);
