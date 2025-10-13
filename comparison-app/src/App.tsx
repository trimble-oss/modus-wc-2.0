import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';
import '@trimble-oss/moduswebcomponents/modus-wc-styles.css';
import './App.css';

// Import pages
import HomePage from './pages/HomePage';
import ComponentComparison from './pages/ComponentComparison';
import ArchitecturePage from './pages/ArchitecturePage';
import DeveloperExperiencePage from './pages/DeveloperExperiencePage';
import StylingPhilosophyPage from './pages/StylingPhilosophyPage';
import FrameworkIntegrationPage from './pages/FrameworkIntegrationPage';
import DecisionGuidePage from './pages/DecisionGuidePage';
import PageWrapper from './components/PageWrapper';

// Navigation component
const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', description: 'Executive Summary' },
    {
      path: '/components',
      label: 'Components',
      description: 'Side-by-side Comparison',
    },
    {
      path: '/architecture',
      label: 'Architecture',
      description: 'Technical Deep Dive',
    },
    {
      path: '/developer-experience',
      label: 'Developer Experience',
      description: 'Setup & Usage',
    },
    {
      path: '/styling',
      label: 'Styling Philosophy',
      description: 'DaisyUI vs ShadCN',
    },
    {
      path: '/frameworks',
      label: 'Framework Integration',
      description: 'Multi-framework Support',
    },
    {
      path: '/decision-guide',
      label: 'Our Decision',
      description: 'Why This Made Sense',
    },
  ];

  return (
    <nav className="bg-white shadow-lg border-b backdrop-blur-lg bg-white/90 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex-shrink-0 flex items-center px-3 py-2 rounded-lg transition-all duration-200 hover:bg-gray-50 group"
            >
              <h1 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                Why Trimble Chose Modus WC
              </h1>
              <div className="ml-2 w-2 h-2 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200
                    ${
                      isActive
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-blue-200 hover:text-blue-900'
                    }
                  `}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`
                p-2 rounded-lg transition-all duration-200 focus:outline-none group
                ${
                  isMenuOpen
                    ? 'bg-blue-100 text-blue-600 shadow-inner'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 active:bg-blue-100 active:scale-95'
                }
              `}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 bg-gray-50">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`
                    block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200
                    ${
                      isActive
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-blue-200 hover:text-blue-900'
                    }
                  `}
                >
                  <div>{item.label}</div>
                  <div
                    className={`text-xs mt-1 ${isActive ? 'text-blue-100' : 'text-gray-500'}`}
                  >
                    {item.description}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 page-transition">
          <Routes>
            <Route
              path="/"
              element={
                <PageWrapper>
                  <HomePage />
                </PageWrapper>
              }
            />
            <Route
              path="/components"
              element={
                <PageWrapper>
                  <ComponentComparison />
                </PageWrapper>
              }
            />
            <Route
              path="/architecture"
              element={
                <PageWrapper>
                  <ArchitecturePage />
                </PageWrapper>
              }
            />
            <Route
              path="/developer-experience"
              element={
                <PageWrapper>
                  <DeveloperExperiencePage />
                </PageWrapper>
              }
            />
            <Route
              path="/styling"
              element={
                <PageWrapper>
                  <StylingPhilosophyPage />
                </PageWrapper>
              }
            />
            <Route
              path="/frameworks"
              element={
                <PageWrapper>
                  <FrameworkIntegrationPage />
                </PageWrapper>
              }
            />
            <Route
              path="/decision-guide"
              element={
                <PageWrapper>
                  <DecisionGuidePage />
                </PageWrapper>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
