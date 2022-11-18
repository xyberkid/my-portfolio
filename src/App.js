import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Work from './components/Work';
import AuthorCard from './components/AuthorCard';
import Education from './components/Education';
import Hobbies from './components/Hobbies';
import { useState } from 'react';

function App() {
  const [isActive, setIsActive] = useState({
    active: true,
    name: "education"
  })

  return (
    <>
      <Navbar />

      <div class="py-6">
        <main>
          <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-10">
            {/* <!-- Replace with your content --> */}
            <AuthorCard isActive={isActive} setIsActive={setIsActive} />
            {
              isActive.active && isActive.name == "education" ? < Education /> : isActive.active && isActive.name == "work" ? <Work /> : <Hobbies />
            }
          </div>
        </main>
      </div>
    </>

  );
}

export default App;
