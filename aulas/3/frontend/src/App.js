import React, { useState, useEffect } from "react";

//Components
import Header from "./components/Header";

//Styles
import "./App.css";

//Images
//import backgroundImage from "./assets/background.jpg";
//Services
import api from "./services/api";

function App() {
  //variables
  const [projects, setProjects] = useState([]);

  //States
  useEffect(() => {
    api.get("projects").then((response) => {
      setProjects(response.data);
    });
  }, []);

  // functions
  async function handleAddProject() {
    //projects.push();
    //setProjects([...projects, `Novo Projeto ${Date.now()}`]);
    const response = await api.post("projects", {
      title: `Novo Projeto ${Date.now()}`,
      owner: "Daniel",
    });
    const project = response.data;
    setProjects([...projects, project]);
  }

  return (
    <>
      <Header title="Projects" />
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Adicionar Projeto
      </button>
    </>
  );
}

export default App;
