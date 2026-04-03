import { useState } from "react";
import { projects } from "../data/portfolioData.js";
import ProjectModal from "./ProjectModal.jsx";

function ProjectCard({ project, onClick }) {
  return (
    <div
      className="card-hover"
      onClick={onClick}
      style={{
        background: "hsl(220 14% 11%)",
        border: "1px solid hsl(220 14% 18%)",
        borderRadius: "16px",
        padding: "28px",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Color accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: project.color || "hsl(45 93% 58%)",
          borderRadius: "16px 16px 0 0",
        }}
      />

      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "14px" }}>
        <div>
          <span
            style={{
              display: "inline-block",
              fontSize: "0.7rem",
              fontWeight: "600",
              color: project.color || "hsl(45 93% 58%)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "6px",
            }}
          >
            {project.subtitle}
          </span>
          <h3
            style={{
              fontSize: "1.2rem",
              fontWeight: "800",
              margin: 0,
              letterSpacing: "-0.01em",
              lineHeight: "1.2",
            }}
          >
            {project.title}
          </h3>
        </div>

        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "8px",
            background: `${project.color || "hsl(45 93% 58%)"}18`,
            border: `1px solid ${project.color || "hsl(45 93% 58%)"}30`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "all 0.2s ease",
          }}
        >
          <svg width="15" height="15" fill="none" stroke={project.color || "hsl(45 93% 58%)"} strokeWidth="2" viewBox="0 0 24 24">
            <path d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
        </div>
      </div>

      {/* Description */}
      <p
        style={{
          color: "hsl(220 10% 58%)",
          fontSize: "0.875rem",
          lineHeight: "1.65",
          marginBottom: "20px",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {project.shortDesc}
      </p>

      {/* Tech stack */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
        {project.techStack.slice(0, 4).map((t) => (
          <span key={t} className="tag-badge">{t}</span>
        ))}
        {project.techStack.length > 4 && (
          <span className="tag-badge">+{project.techStack.length - 4}</span>
        )}
      </div>

      {/* CTA */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          color: project.color || "hsl(45 93% 58%)",
          fontSize: "0.82rem",
          fontWeight: "600",
        }}
      >
        Click to explore
        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div className="section-tag">Projects</div>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              fontWeight: "800",
              marginBottom: "16px",
              letterSpacing: "-0.02em",
            }}
          >
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p style={{ color: "hsl(220 10% 55%)", maxWidth: "500px", margin: "0 auto", lineHeight: "1.7" }}>
            Projects that solve real-world problems — from AI-powered platforms to IoT safety systems. Click any card to explore the details.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "24px",
          }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* GitHub CTA */}
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <p style={{ color: "hsl(220 10% 50%)", marginBottom: "16px", fontSize: "0.9rem" }}>
            Want to see more? Check out all my repositories on GitHub.
          </p>
          <a
            href="https://github.com/Priyansh-Shukla14"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <svg height="16" viewBox="0 0 16 16" width="16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            View All on GitHub
          </a>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

      <style>{`
        @media (max-width: 768px) {
          #projects > div > div:nth-child(3) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
