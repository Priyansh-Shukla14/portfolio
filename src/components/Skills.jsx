import { useState, useEffect, useRef } from "react";
import { skills } from "../data/portfolioData.js";

function SkillBar({ name, level, index }) {
  const [width, setWidth] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), index * 80);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level, index]);

  return (
    <div ref={ref} style={{ marginBottom: "18px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
        <span style={{ fontSize: "0.875rem", fontWeight: "600", color: "hsl(45 100% 90%)" }}>{name}</span>
      </div>
      <div
        style={{
          height: "6px",
          background: "hsl(220 14% 16%)",
          borderRadius: "100px",
          overflow: "hidden",
        }}
      >
        <div
          className="skill-bar"
          style={{
            height: "100%",
            width: `${width}%`,
            background: "linear-gradient(90deg, hsl(45 93% 58%), hsl(45 93% 68%))",
            borderRadius: "100px",
          }}
        />
      </div>
    </div>
  );
}

const techLogos = [
  { name: "HTML", icon: "" },
  { name: "CSS", icon: "" },
  { name: "JavaScript", icon: "" },
  { name: "React", icon: "" },
  { name: "Tailwind CSS", icon: "" },
  { name: "Node.js", icon: "" },
  { name: "Express.js", icon: "" },
  { name: "Git", icon: "" },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <section
      id="skills"
      style={{ padding: "100px 24px", background: "hsl(220 14% 9%)" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              fontWeight: "800",
              letterSpacing: "-0.02em",
            }}
          >
            My <span className="gradient-text">Skills</span>
          </h2>
        </div>

        <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginBottom: "60px" }}>
          {/* Category tabs + bars */}
          <div
            style={{
              background: "hsl(220 14% 11%)",
              border: "1px solid hsl(220 14% 18%)",
              borderRadius: "16px",
              padding: "32px",
            }}
          >
            {/* Tabs */}
            <div style={{ display: "flex", gap: "8px", marginBottom: "28px", flexWrap: "wrap" }}>
              {Object.keys(skills).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  style={{
                    padding: "7px 16px",
                    borderRadius: "100px",
                    border: "1px solid",
                    cursor: "pointer",
                    fontSize: "0.78rem",
                    fontWeight: "600",
                    transition: "all 0.2s ease",
                    background: activeTab === cat ? "hsl(45 93% 58%)" : "transparent",
                    color: activeTab === cat ? "hsl(220 14% 8%)" : "hsl(220 10% 55%)",
                    borderColor: activeTab === cat ? "hsl(45 93% 58%)" : "hsl(220 14% 22%)",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Skill bars */}
            <div>
              {skills[activeTab].map((skill, i) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} index={i} />
              ))}
            </div>
          </div>

          {/* Tech grid */}
          <div
            style={{
              background: "hsl(220 14% 11%)",
              border: "1px solid hsl(220 14% 18%)",
              borderRadius: "16px",
              padding: "32px",
            }}
          >
            <h3 style={{ fontSize: "1rem", fontWeight: "700", marginBottom: "24px", color: "hsl(45 100% 90%)" }}>
              Technologies I Work With
            </h3>
            <div className="tech-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "14px" }}>
              {techLogos.map((tech) => (
                <div
                  key={tech.name}
                  className="card-hover"
                  style={{
                    background: "hsl(220 14% 13%)",
                    border: "1px solid hsl(220 14% 20%)",
                    borderRadius: "10px",
                    padding: "16px 10px",
                    textAlign: "center",
                    cursor: "default",
                  }}
                >
                  <div style={{ fontSize: "1.6rem", marginBottom: "6px" }}>{tech.icon}</div>
                  <div style={{ fontSize: "0.72rem", fontWeight: "600", color: "hsl(220 10% 60%)" }}>{tech.name}</div>
                </div>
              ))}
            </div>

            {/* Soft skills */}
            <div style={{ marginTop: "24px", paddingTop: "24px", borderTop: "1px solid hsl(220 14% 18%)" }}>
              <h4 style={{ fontSize: "0.85rem", fontWeight: "700", color: "hsl(220 10% 50%)", marginBottom: "14px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Soft Skills
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {["Team Leadership", "Problem Solving", "Communication", "Quick Learner", "Adaptability"].map(
                  (s) => (
                    <span key={s} className="tag-badge">{s}</span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
          #skills {
            padding: 60px 20px !important;
          }
        }
        @media (max-width: 480px) {
          .tech-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
