import { useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "E-Commerce Website",
    },
    {
      id: 2,
      name: "Portfolio Website",
    },
  ]);

  const [newProject, setNewProject] = useState("");

  const addProject = () => {
    if (newProject === "") return;

    const project = {
      id: Date.now(),
      name: newProject,
    };

    setProjects([...projects, project]);
    setNewProject("");
  };

  const deleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  return (
    <div className="page">
      <h1>Projects</h1>
 
      <div className="project-form">
        <input
          type="text"
          placeholder="Enter project name"
          value={newProject}
          onChange={(e) => setNewProject(e.target.value)}
        />

        <button onClick={addProject}>Add Project</button>
      </div>

      <div className="grid">
        {projects.map((project) => (
          <div className="card" key={project.id}>
            <h3>{project.name}</h3>

            <button onClick={() => deleteProject(project.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;