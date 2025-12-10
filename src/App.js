import './App.css'

function App() {
  const labs = [
    { number: '01', name: 'Vanilla JS', path: '/01-vanilla-js/index.html', type: 'html' },
    { number: '02', name: 'React Hello World', path: '/02-react-hello-world/index.html', type: 'html' },
    { number: '03', name: 'React vs Vanilla JS', path: '/03-react-vs-vanilla-js/index.html', type: 'html' },
    { number: '04', name: 'JSX Hello World', path: '/04-jsx-hello-world/index.html', type: 'html' },
    { number: '05', name: 'React JSX Green Button', path: '/05-react-jsx-green-button/index.html', type: 'html' },
    { number: '08', name: 'Reusable Components', path: '/08-reusable-components', type: 'react' },
    { number: '09', name: 'Props', path: '/09-props', type: 'react' },
    { number: '10', name: 'Conditional Rendering', path: '/10-conditional-rendering', type: 'react' },
    { number: '11', name: 'State', path: '/11-state', type: 'react' },
    { number: '12', name: 'State via Props', path: '/12-state-via-props', type: 'react' },
    { number: '13', name: 'Map', path: '/13-map', type: 'react' },
    { number: '14', name: 'Map Array of Objects', path: '/14-map-array-of-objects', type: 'react' },
    { number: '15', name: 'Logical AND Operator', path: '/15-logical-and-operator', type: 'react' },
    { number: '16', name: 'React Fragment', path: '/16-react-fragment', type: 'react' },
    { number: '17', name: 'Uncontrolled Input', path: '/17-uncontrolled-input', type: 'react' },
    { number: '18', name: 'Controlled Input', path: '/18-controlled-input', type: 'react' },
    { number: '19', name: 'Children Prop', path: '/19-children-prop', type: 'react' },
    { number: '20', name: 'useEffect', path: '/20-useEffect', type: 'react' },
    { number: '21', name: 'JSONPlaceholder Posts', path: '/21-jsonplaceholder-posts', type: 'react' },
    { number: '22', name: 'useEffect Async Await', path: '/22-useEffect-async-await', type: 'react' },
    { number: '23', name: 'CSS Modules', path: '/23-css-modules', type: 'react' },
    { number: '24', name: 'Todo App v1', path: '/24-todo-app-v1', type: 'react' },
    { number: '25', name: 'Todo App v2', path: '/25-todo-app-v2', type: 'react' },
    { number: '26', name: 'React Router', path: '/26-react-router', type: 'react' },
    { number: '27', name: 'Context API', path: '/27-context-api', type: 'react' },
    { number: '28', name: 'Reducer', path: '/28-reducer', type: 'other' },
    { number: '29', name: 'Pure Redux', path: '/29-pure-redux/index.html', type: 'html' },
    { number: '99', name: 'Template', path: '/99-template', type: 'react' },
    { number: '99', name: 'Template Dark', path: '/99-template-dark', type: 'react' },
  ]

  const handleLabClick = (lab, e) => {
    if (lab.type === 'react') {
      e.preventDefault()
      alert(`To run this React lab:\n1. Navigate to: ${lab.path}\n2. Run: npm install\n3. Run: npm start`)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Course Labs</h1>
        <p className="subtitle">Navigate to any lab below</p>
        <p className="info-text">
          HTML labs open directly • React labs require running <code>npm start</code> in their folder
        </p>
      </header>
      <main className="labs-container">
        <div className="labs-grid">
          {labs.map((lab, index) => (
            <a
              key={`${lab.number}-${index}`}
              href={lab.path}
              className={`lab-card ${lab.type}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => handleLabClick(lab, e)}
            >
              <div className="lab-number">{lab.number}</div>
              <div className="lab-name">{lab.name}</div>
              <div className="lab-type">{lab.type === 'html' ? 'HTML' : lab.type === 'react' ? 'React' : 'Other'}</div>
            </a>
          ))}
        </div>
      </main>
    </div>
  )
}

export default App

