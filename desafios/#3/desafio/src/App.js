import React, { useState, useEffect } from "react";

//Services
import api from "./services/api";

// Style
import "./styles.css";

function App() {
  //Variables
  const [repositories, setRepositories] = useState([]);

  // Lista Repositorios
  useEffect(() => {
    loadRepositorys();
  }, []);
  async function loadRepositorys() {
    await api.get("repositories").then((repositorie) => {
      setRepositories(repositorie.data);
    });
  }
  async function handleAddRepository() {
    // TODO
    console.log("active");
    const response = await api.post("repositories", {
      title: `Novo Repositorio${Date.now()}`,
      url: "http://minhaapi.com.br",
      techs: ["Minha linguagem"],
    });
    const repositorie = response.data;
    setRepositories([...repositories, repositorie]);
  }

  async function handleRemoveRepository(id) {
    // TODO
    await api.delete(`repositories/${id}`);

    setRepositories(
      repositories.filter((repositorie) => repositorie.id !== id)
    );
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map((repositorie) => (
          <li key={repositorie.id}>
            {repositorie.title}
            <button onClick={() => handleRemoveRepository(repositorie.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>

      <button onClick={handleAddRepository} className="addButton">
        Adicionar
      </button>
    </div>
  );
}

export default App;

/*
{projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))} */
