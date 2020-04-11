import React, { useState } from "react";

//Components
import Header from "./components/Header";

function App() {
  //variables
  const [projects, setProjects] = useState([
    "Desenvolvimento de app",
    "Front-end Web",
  ]);
  // functions
  function handleAddProject() {
    //projects.push();
    setProjects([...projects, `Novo Projeto ${Date.now()}`]);
    console.log(projects);
  }

  return (
    <>
      <Header title="Projects" />
      <ul>
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Adicionar Projeto
      </button>
    </>
  );
}

export default App;
