import express from 'express';
import colors from 'colors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';


const app = express();
mongoose
  .connect('mongodb://127.0.0.1:27017/mrmessmanager')
  .then(() => {
    console.log('connected to database');
  })
  .catch((error) => {
    console.log('error connecting in database', error);
  });

app.use(morgan('dev'));
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
    method: ['GET', 'POST', 'DELETE'],
  })
);

const commentSchema = mongoose.Schema({
  comment: String,
  time: String,
  sendername: String,
  hostel:String,
  upvote:Number,
  downvote:Number,
  resolved:Boolean,
});

const resolvecommentSchema = mongoose.Schema({
  comment: String,
  hostel:String,
  resolve:Boolean,
});

const registerSchema = mongoose.Schema({
  username: String,
  name: String,
  reg: String,
  hostel: String,
  password: String,
  status:Boolean,
});

const registerSchemarest=mongoose.Schema({
  username: String,
  name: String,
  contact: String,
  hostel: String,
  password: String,
})



const messmenuSchemaA = new mongoose.Schema({
  hostelname: {
    type: String,
    required: true,
    trim: true
  },
  menu: {
    sunday: {
      type: [[String]],
      required: true
    },
    monday: {
      type: [[String]],
      required: true
    },
    tuesday: {
      type: [[String]],
      required: true
    },
    wednesday: {
      type: [[String]],
      required: true
    },
    thursday: {
      type: [[String]],
      required: true
    },
    friday: {
      type: [[String]],
      required: true
    },
    saturday: {
      type: [[String]],
      required: true
    }
  }
});

const expenseSchema=new mongoose.Schema([
  

   { 
    hostelname:String,
    total:Number,
    quantity:Number, 
    date:String,
    product:String,
    price:Number
   }
  ])


const Comment = mongoose.model('Comment', commentSchema);
const registerStudent = mongoose.model('RegisterStudent', registerSchema);
const registerCw=mongoose.model('RegisterCW',registerSchemarest)
const registerA=mongoose.model('RegisterA',registerSchemarest);
const messmenuA=mongoose.model('messmenuA',messmenuSchemaA);
const Expense=mongoose.model('Expense',expenseSchema);
const resolvecomment=mongoose.model('resolvecomment',resolvecommentSchema);







app.post('/registerstudent', (req, res) => {
  const { name, username, reg, hostel, password ,status} = req.body;
  registerStudent
    .create({ name, username, reg, hostel, password ,status})
    .then((user) => {
      res.send({ message: 'User registered successfully', user: user });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send({ message: 'An error occurred' });
    });
});

app.post('/registerCW', (req, res) => {
  const { name, username, contact, hostel, password } = req.body;
  registerCw
    .create({ name, username, contact, hostel, password })
    .then((user) => {
      res.send({ message: 'User registered successfully', user: user });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send({ message: 'An error occurred' });
    });
});

app.post('/registerA', (req, res) => {
  const { name, username, contact, hostel, password } = req.body;
  registerA
    .create({ name, username, contact, hostel, password })
    .then((user) => {
      res.send({ message: 'User registered successfully', user: user });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send({ message: 'An error occurred' });
    });
});



app.post('/loginstudent', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await registerStudent.findOne({ username: username });
    if (user) {
      if (password === user.password) {
        const userData = {
          name: user.name,
          reg: user.reg,
          hostel: user.hostel,
          status:user.status,
        };
        res.send({ message: 'Login successful', user: userData });
      } else {
        res.send({ message: "Password didn't match" });
      }
    } else {
      res.send({ message: 'User not registered' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'An error occurred' });
  }
});

app.post('/loginA', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await registerA.findOne({ username: username });
    if (user) {
      if (password === user.password) {
        const userData = {
          name: user.name,
          hostel: user.hostel,
        };
        res.send({ message: 'Login successful', user: userData });
      } else {
        res.send({ message: "Password didn't match" });
      }
    } else {
      res.send({ message: 'User not registered' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'An error occurred' });
  }
});

app.post('/loginCW', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await registerCw.findOne({ username: username });
    if (user) {
      if (password === user.password) {
        const userData = {
          name: user.name,
          hostel: user.hostel,
        };
        res.send({ message: 'Login successful', user: userData });
      } else {
        res.send({ message: "Password didn't match" });
      }
    } else {
      res.send({ message: 'User not registered' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'An error occurred' });
  }
});


app.get('/comment', async (req, res) => {
  try {
   
    const { hostel } = req.query;
    
    
    const filter = hostel ? { hostel } : {};

    const allComments = await Comment.find(filter);
    res.send(allComments);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'An error occurred' });
  }
});

app.get('/messmenu',async(req,res)=>{
  try{
    const { hostelname } = req.query;
    
    
    const filter = hostelname ? { hostelname } : {};

    const menu = await messmenuA.find(filter);
    res.send(menu);
  }
  catch(error){console.log(error);}
})



app.get('/registerstudent', async (req, res) => {
  try {
    
    const {hostel}=req.query;
    console.log(req.query)
    const filter=hostel?{hostel}:{};
    const allstudent = await registerStudent.find(filter);
    res.send(allstudent);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'An error occurred' });
  }
});

app.put('/registerstudent/:id', async (req, res) => {
  const studentId = req.params.id;
  const { status } = req.body;

  try {
    const updatedStudent = await registerStudent.findByIdAndUpdate(
      studentId,
      { $set: { status: status } },
      { new: true }
    );

    if (updatedStudent) {
      res.json(updatedStudent);
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.post('/expense',async(req,res)=>{
  try{
      const{ hostelname,date,total,quantity,price,product}=req.body;
      console.log(req.body)
      const expense=new Expense({
        hostelname,price,date,total,quantity,product
      })
      await expense.save();
      res.status(201).json({message:"succesx"});
  }
  catch(error){
    console.error(error);
  }
})

app.post('/comment', async (req, res) => {
  try {
    const { comment, time, sendername ,hostel,upvote,downvote,resolved} = req.body;
    const newComment = new Comment({
      comment,
      time,
      sendername,
      hostel,
      upvote,
      downvote,
      resolved
    });
    await newComment.save();
    res.status(201).json({ message: 'Comment created successfully' });
  } catch (error) {
    console.error('Error creating comment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.put('/comment/:id', async (req, res) => {
  const commentId = req.params.id;
  const { resolved } = req.body;

  try {
    const updatedcomment = await Comment.findByIdAndUpdate(
      commentId,
      { $set: { resolved: resolved } },
      { new: true }
    );

    if (updatedcomment) {
      res.json(updatedcomment);
    } else {
      res.status(404).json({ message: 'message not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.get('/resolvecomment', async (req, res) => {
  try {
    const resolvedComments = await Comment.find({ resolved: true});
    res.send(resolvedComments);
    console.log(resolvedComments)
    console.log("Sent resolved comments");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});



app.get('/', (req, res) => {
  res.send('Welcome to Project');
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is Running On port ${PORT}`.bgCyan.white);
});
