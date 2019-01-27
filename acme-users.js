const express = require('express');
const app = express();
const html = `
<html>
<style>
  h1 {
    background-color: dodgerBlue;
    display: flex;
    border-radius: 10px;
    color: white;
    text-decoration: underline;
    font-family: sans serif;
  }

  h1 a{
    color: white;
  }

  .user{
    background-color: dodgerBlue;
    color: white;
    font-family: sans serif;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 42px;
    height: 50%;
  }
</style>
<head>
  <title>ACME USERS</title>
</head>
<body>
  <h1><a color = white href='/'>Home</a></h1>
  <div><a href='/users'>Users</a>
</body>
</html>
`;

app.get('/', (req, res) =>{
  res.send(html);
});

app.get('/users',(req,res) => {
  let more = html + `<ul>
  <li><a href=/users/Moe>Moe</a></li>
  <li><a href=/users/Larry>Larry</a></li>
  <li><a href=/users/Curly>Curly</a></li>
  </ul>`;

  res.send(more);
});

app.get('/users/:id', (req, res) =>{
  const id = req.params.id;
  const userPage = `
  <div class='user'>${id}</div>
  `;
  res.send(html+userPage);
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
