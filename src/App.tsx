import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LandingSections } from './components/LandingSections';
export default function App() {
  return <div className="site-shell">
    <a className="skip-link" href="#the-show">Skip to content</a>
    <Navbar />
    <main><Hero /><LandingSections /></main>
  </div>;
}
