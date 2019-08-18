import React from 'react';
import Section from "./Section";

function App() {
  return (
    <div className="App">
      <Section
        id="header"
        title="First section">
        <p>Section content</p>
      </Section>
      <Section
        id="about"
        title="Second section">
        <p>Section content</p>
      </Section>
    </div>
  );
}

export default App;
