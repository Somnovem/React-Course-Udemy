import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import './App.css'

// Lazy load all React lab components
const Lab08 = lazy(() => import('./labs/lab08'))
const Lab09 = lazy(() => import('./labs/lab09'))
const Lab10 = lazy(() => import('./labs/lab10'))
const Lab11 = lazy(() => import('./labs/lab11'))
const Lab12 = lazy(() => import('./labs/lab12'))
const Lab13 = lazy(() => import('./labs/lab13'))
const Lab14 = lazy(() => import('./labs/lab14'))
const Lab15 = lazy(() => import('./labs/lab15'))
const Lab16 = lazy(() => import('./labs/lab16'))
const Lab17 = lazy(() => import('./labs/lab17'))
const Lab18 = lazy(() => import('./labs/lab18'))
const Lab19 = lazy(() => import('./labs/lab19'))
const Lab20 = lazy(() => import('./labs/lab20'))
const Lab21 = lazy(() => import('./labs/lab21'))
const Lab22 = lazy(() => import('./labs/lab22'))
const Lab23 = lazy(() => import('./labs/lab23'))
const Lab24 = lazy(() => import('./labs/lab24'))
const Lab25 = lazy(() => import('./labs/lab25'))
const Lab26 = lazy(() => import('./components/Lab26Wrapper'))
const Lab27 = lazy(() => import('./labs/lab27'))
const Lab99 = lazy(() => import('./labs/lab99'))
const Lab99Dark = lazy(() => import('./labs/lab99-dark'))
const ReducerViewer = lazy(() => import('./components/ReducerViewer'))

// Home component
function Home() {
  const labs = [
    { number: '01', name: 'Vanilla JS', path: '/lab/01', type: 'html', htmlPath: '/01-vanilla-js/index.html' },
    { number: '02', name: 'React Hello World', path: '/lab/02', type: 'html', htmlPath: '/02-react-hello-world/index.html' },
    { number: '03', name: 'React vs Vanilla JS', path: '/lab/03', type: 'html', htmlPath: '/03-react-vs-vanilla-js/index.html' },
    { number: '04', name: 'JSX Hello World', path: '/lab/04', type: 'html', htmlPath: '/04-jsx-hello-world/index.html' },
    { number: '05', name: 'React JSX Green Button', path: '/lab/05', type: 'html', htmlPath: '/05-react-jsx-green-button/index.html' },
    { number: '08', name: 'Reusable Components', path: '/lab/08', type: 'react' },
    { number: '09', name: 'Props', path: '/lab/09', type: 'react' },
    { number: '10', name: 'Conditional Rendering', path: '/lab/10', type: 'react' },
    { number: '11', name: 'State', path: '/lab/11', type: 'react' },
    { number: '12', name: 'State via Props', path: '/lab/12', type: 'react' },
    { number: '13', name: 'Map', path: '/lab/13', type: 'react' },
    { number: '14', name: 'Map Array of Objects', path: '/lab/14', type: 'react' },
    { number: '15', name: 'Logical AND Operator', path: '/lab/15', type: 'react' },
    { number: '16', name: 'React Fragment', path: '/lab/16', type: 'react' },
    { number: '17', name: 'Uncontrolled Input', path: '/lab/17', type: 'react' },
    { number: '18', name: 'Controlled Input', path: '/lab/18', type: 'react' },
    { number: '19', name: 'Children Prop', path: '/lab/19', type: 'react' },
    { number: '20', name: 'useEffect', path: '/lab/20', type: 'react' },
    { number: '21', name: 'JSONPlaceholder Posts', path: '/lab/21', type: 'react' },
    { number: '22', name: 'useEffect Async Await', path: '/lab/22', type: 'react' },
    { number: '23', name: 'CSS Modules', path: '/lab/23', type: 'react' },
    { number: '24', name: 'Todo App v1', path: '/lab/24', type: 'react' },
    { number: '25', name: 'Todo App v2', path: '/lab/25', type: 'react' },
    { number: '26', name: 'React Router', path: '/lab/26', type: 'react' },
    { number: '27', name: 'Context API', path: '/lab/27', type: 'react' },
    { number: '28', name: 'Reducer', path: '/lab/28', type: 'other' },
    { number: '29', name: 'Pure Redux', path: '/lab/29', type: 'html', htmlPath: '/29-pure-redux/index.html' },
    { number: '99', name: 'Template', path: '/lab/99', type: 'react' },
    { number: '99', name: 'Template Dark', path: '/lab/99-dark', type: 'react' },
  ]

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Course Labs</h1>
        <p className="subtitle">Navigate to any lab below</p>
        <p className="info-text">
          Click on any lab to view it directly in the browser
        </p>
      </header>
      <main className="labs-container">
        <div className="labs-grid">
          {labs.map((lab, index) => (
            <Link
              key={`${lab.number}-${index}`}
              to={lab.path}
              className={`lab-card ${lab.type}`}
            >
              <div className="lab-number">{lab.number}</div>
              <div className="lab-name">{lab.name}</div>
              <div className="lab-type">{lab.type === 'html' ? 'HTML' : lab.type === 'react' ? 'React' : 'Other'}</div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

// HTML Lab Viewer Component
function HTMLLabViewer({ htmlPath }) {
  // Prepend PUBLIC_URL to htmlPath to ensure it works with the deployment base path
  // process.env.PUBLIC_URL will be "/React-Course-Udemy" when deployed
  const fullPath = `${process.env.PUBLIC_URL || ''}${htmlPath}`
  
  return (
    <div style={{ minHeight: '100vh', width: '100%' }}>
      <div style={{ padding: '1rem', background: '#f5f5f5', borderBottom: '1px solid #ddd' }}>
        <Link to="/" style={{ color: '#667eea', textDecoration: 'none', fontWeight: 'bold' }}>
          ← Back to Labs
        </Link>
      </div>
      <iframe 
        src={fullPath} 
        style={{ width: '100%', height: 'calc(100vh - 60px)', border: 'none' }}
        title="HTML Lab"
      />
    </div>
  )
}

// Lab Wrapper Component
function LabWrapper({ children, title }) {
  return (
    <div style={{ minHeight: '100vh', width: '100%' }}>
      <div style={{ padding: '1rem', background: '#f5f5f5', borderBottom: '1px solid #ddd' }}>
        <Link to="/" style={{ color: '#667eea', textDecoration: 'none', fontWeight: 'bold' }}>
          ← Back to Labs
        </Link>
        {title && <span style={{ marginLeft: '1rem', color: '#666' }}>{title}</span>}
      </div>
      <Suspense fallback={
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 60px)' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Loading lab...</div>
            <div style={{ fontSize: '0.9rem', color: '#666' }}>Please wait</div>
          </div>
        </div>
      }>
        {children}
      </Suspense>
    </div>
  )
}

function App() {
  // Determine basename from PUBLIC_URL environment variable
  // This is set based on the "homepage" field in package.json
  // If homepage is ".", PUBLIC_URL will be empty (for root deployment)
  // If homepage is "/React-Course-Udemy", PUBLIC_URL will be "/React-Course-Udemy"
  const basename = process.env.PUBLIC_URL || ''
  
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lab/01" element={<HTMLLabViewer htmlPath="/01-vanilla-js/index.html" />} />
        <Route path="/lab/02" element={<HTMLLabViewer htmlPath="/02-react-hello-world/index.html" />} />
        <Route path="/lab/03" element={<HTMLLabViewer htmlPath="/03-react-vs-vanilla-js/index.html" />} />
        <Route path="/lab/04" element={<HTMLLabViewer htmlPath="/04-jsx-hello-world/index.html" />} />
        <Route path="/lab/05" element={<HTMLLabViewer htmlPath="/05-react-jsx-green-button/index.html" />} />
        <Route path="/lab/08" element={<LabWrapper title="Lab 08: Reusable Components"><Lab08 /></LabWrapper>} />
        <Route path="/lab/09" element={<LabWrapper title="Lab 09: Props"><Lab09 /></LabWrapper>} />
        <Route path="/lab/10" element={<LabWrapper title="Lab 10: Conditional Rendering"><Lab10 /></LabWrapper>} />
        <Route path="/lab/11" element={<LabWrapper title="Lab 11: State"><Lab11 /></LabWrapper>} />
        <Route path="/lab/12" element={<LabWrapper title="Lab 12: State via Props"><Lab12 /></LabWrapper>} />
        <Route path="/lab/13" element={<LabWrapper title="Lab 13: Map"><Lab13 /></LabWrapper>} />
        <Route path="/lab/14" element={<LabWrapper title="Lab 14: Map Array of Objects"><Lab14 /></LabWrapper>} />
        <Route path="/lab/15" element={<LabWrapper title="Lab 15: Logical AND Operator"><Lab15 /></LabWrapper>} />
        <Route path="/lab/16" element={<LabWrapper title="Lab 16: React Fragment"><Lab16 /></LabWrapper>} />
        <Route path="/lab/17" element={<LabWrapper title="Lab 17: Uncontrolled Input"><Lab17 /></LabWrapper>} />
        <Route path="/lab/18" element={<LabWrapper title="Lab 18: Controlled Input"><Lab18 /></LabWrapper>} />
        <Route path="/lab/19" element={<LabWrapper title="Lab 19: Children Prop"><Lab19 /></LabWrapper>} />
        <Route path="/lab/20" element={<LabWrapper title="Lab 20: useEffect"><Lab20 /></LabWrapper>} />
        <Route path="/lab/21" element={<LabWrapper title="Lab 21: JSONPlaceholder Posts"><Lab21 /></LabWrapper>} />
        <Route path="/lab/22" element={<LabWrapper title="Lab 22: useEffect Async Await"><Lab22 /></LabWrapper>} />
        <Route path="/lab/23" element={<LabWrapper title="Lab 23: CSS Modules"><Lab23 /></LabWrapper>} />
        <Route path="/lab/24" element={<LabWrapper title="Lab 24: Todo App v1"><Lab24 /></LabWrapper>} />
        <Route path="/lab/25" element={<LabWrapper title="Lab 25: Todo App v2"><Lab25 /></LabWrapper>} />
        <Route path="/lab/26" element={<LabWrapper title="Lab 26: React Router"><Lab26 /></LabWrapper>} />
        <Route path="/lab/27" element={<LabWrapper title="Lab 27: Context API"><Lab27 /></LabWrapper>} />
        <Route path="/lab/28" element={<LabWrapper title="Lab 28: Reducer"><ReducerViewer /></LabWrapper>} />
        <Route path="/lab/29" element={<HTMLLabViewer htmlPath="/29-pure-redux/index.html" />} />
        <Route path="/lab/99" element={<LabWrapper title="Lab 99: Template"><Lab99 /></LabWrapper>} />
        <Route path="/lab/99-dark" element={<LabWrapper title="Lab 99: Template Dark"><Lab99Dark /></LabWrapper>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

