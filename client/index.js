const e = React.createElement;

function App() {
  const [agents, setAgents] = React.useState([]);
  const [name, setName] = React.useState('');

  React.useEffect(() => {
    fetch('/api/agents')
      .then(res => res.json())
      .then(data => setAgents(data));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/api/agents', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    })
      .then(res => res.json())
      .then(newAgent => setAgents([...agents, newAgent]));
  };

  return e('div', null,
    e('h1', null, 'AI Town Agents'),
    e('ul', null, agents.map(agent =>
      e('li', { key: agent.id }, `${agent.id}: ${agent.name}`)
    )),
    e('form', { onSubmit: handleSubmit },
      e('input', {
        value: name,
        onChange: e => setName(e.target.value),
        placeholder: 'Agent name'
      }),
      e('button', { type: 'submit' }, 'Add Agent')
    )
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(e(App));
