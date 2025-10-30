import { useState } from 'react';
import './App.css';
import {
  Section1Installation,
  Section2ComponentTree,
  Section3StateProps,
  Section4StrictMode,
  Section5Debugging,
  PokemonSelector
} from './components';

function App() {
  const [activeSection, setActiveSection] = useState('section1');

  const sections = [
    { id: 'section1', title: 'Installation & Setup', component: Section1Installation },
    { id: 'section2', title: 'Component Tree', component: Section2ComponentTree },
    { id: 'section3', title: 'State & Props Debugging', component: Section3StateProps },
    { id: 'section4', title: 'StrictMode Testing', component: Section4StrictMode },
    { id: 'section5', title: 'Advanced Debugging', component: Section5Debugging },
    { id: 'pokemon', title: 'Pokemon Demo', component: PokemonSelector }
  ];

  const ActiveComponent = sections.find(s => s.id === activeSection)?.component || Section1Installation;

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#ffffff',
      color: '#0f172a',
      minHeight: '100vh'
    }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#0f172a', marginBottom: '10px' }}>React DevTools & Debugging: Interactive Demo</h1>
        <p style={{ color: '#64748b', fontSize: '18px' }}>
          Master React debugging with hands-on examples and professional DevTools techniques
        </p>
      </header>

      <nav style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        justifyContent: 'center',
        marginBottom: '30px',
        padding: '20px',
        backgroundColor: '#f1f5f9',
        border: '2px solid #cbd5e1'
      }}>
        {sections.map(section => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            style={{
              padding: '10px 20px',
              border: '2px solid' + (activeSection === section.id ? '#2563eb' : '#cbd5e1'),
              backgroundColor: activeSection === section.id ? '#2563eb' : '#ffffff',
              color: activeSection === section.id ? '#ffffff' : '#0f172a',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              if (activeSection !== section.id) {
                e.target.style.backgroundColor = '#dbeafe';
              }
            }}
            onMouseOut={(e) => {
              if (activeSection !== section.id) {
                e.target.style.backgroundColor = '#ffffff';
              }
            }}
          >
            {section.title}
          </button>
        ))}
      </nav>

      <main>
        <ActiveComponent />
      </main>

      <footer style={{
        textAlign: 'center',
        marginTop: '40px',
        padding: '20px',
        borderTop: '2px solid #cbd5e1',
        color: '#64748b'
      }}>
        <p><strong>DevTools Tip:</strong> Keep React DevTools open while exploring each section!</p>
        <p style={{ fontSize: '14px', marginTop: '10px' }}>
          This demo covers React DevTools installation, component inspection, state/props debugging,
          StrictMode testing, and advanced debugging techniques.
        </p>
      </footer>
    </div>
  );
}

export default App;
