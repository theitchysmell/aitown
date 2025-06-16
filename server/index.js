const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

let agents = [
  { id: 1, name: 'Alice', age: 30, occupation: 'Engineer' },
  { id: 2, name: 'Bob', age: 25, occupation: 'Artist' }
];
let nextId = 3;

app.get('/api/agents', (req, res) => {
  res.json(agents);
});

app.post('/api/agents', (req, res) => {
  const { name, age, occupation } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }
  const newAgent = { id: nextId++, name, age, occupation };
  agents.push(newAgent);
  res.status(201).json(newAgent);
});

app.get('/api/agents/:id', (req, res) => {
  const agentId = parseInt(req.params.id, 10);
  const agent = agents.find(a => a.id === agentId);
  if (!agent) {
    return res.status(404).json({ error: 'Agent not found' });
  }
  res.json(agent);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
