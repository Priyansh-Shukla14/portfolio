export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "100px 24px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <div className="section-divider" style={{ marginBottom: "80px" }} />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
        {/* Left: Visual */}
        <div style={{ position: "relative" }}>
          <div
            className="animate-float"
            style={{
              width: "100%",
              aspectRatio: "1",
              maxWidth: "380px",
              margin: "0 auto",
              borderRadius: "20px",
              background: "linear-gradient(135deg, hsl(220 14% 13%), hsl(220 14% 16%))",
              border: "1px solid hsl(220 14% 20%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Decorative code block */}
            <div style={{ padding: "32px", width: "100%", fontFamily: "monospace", fontSize: "0.85rem" }}>
              <div style={{ color: "hsl(220 10% 45%)", marginBottom: "16px", fontSize: "0.75rem" }}>// about.js</div>
              <div style={{ marginBottom: "8px" }}>
                <span style={{ color: "hsl(45 93% 58%)" }}>const</span>{" "}
                <span style={{ color: "hsl(200 80% 70%)" }}>priyansh</span>{" "}
                <span style={{ color: "hsl(45 93% 58%)" }}>=</span>{" "}
                <span style={{ color: "hsl(45 93% 58%)" }}>{"{"}</span>
              </div>
              {[
                { key: "  name", val: '"Priyansh Shukla"', color: "hsl(130 60% 65%)" },
                { key: "  college", val: '"RVCE, Bangalore"', color: "hsl(130 60% 65%)" },
                { key: "  degree", val: '"B.E. Information Science"', color: "hsl(130 60% 65%)" },
                { key: "  year", val: '"2nd Year"', color: "hsl(130 60% 65%)" },
                { key: "  passion", val: '"DSA + Full Stack"', color: "hsl(130 60% 65%)" },
                { key: "  status", val: '"Open to Opportunities"', color: "hsl(45 93% 58%)" },
              ].map((item) => (
                <div key={item.key} style={{ marginBottom: "5px", paddingLeft: "0" }}>
                  <span style={{ color: "hsl(220 10% 65%)" }}>{item.key}</span>
                  <span style={{ color: "hsl(45 93% 58%)" }}>: </span>
                  <span style={{ color: item.color }}>{item.val}</span>
                  <span style={{ color: "hsl(220 10% 50%)" }}>,</span>
                </div>
              ))}
              <div style={{ color: "hsl(45 93% 58%)" }}>{"}"}</div>
            </div>

            {/* Glow accent */}
            <div
              style={{
                position: "absolute",
                bottom: "-20px",
                right: "-20px",
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                background: "hsl(45 93% 58% / 0.08)",
                filter: "blur(20px)",
              }}
            />
          </div>

          {/* Floating badges */}
          <div
            style={{
              position: "absolute",
              top: "10%",
              right: "-5%",
              background: "hsl(220 14% 13%)",
              border: "1px solid hsl(220 14% 22%)",
              borderRadius: "10px",
              padding: "10px 14px",
              fontSize: "0.8rem",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              boxShadow: "0 8px 24px hsl(0 0% 0% / 0.3)",
            }}
          >
            <span style={{ fontSize: "1.2rem" }}>🔐</span>
            <span style={{ color: "hsl(45 100% 90%)" }}>CTF Player</span>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "15%",
              left: "-8%",
              background: "hsl(220 14% 13%)",
              border: "1px solid hsl(220 14% 22%)",
              borderRadius: "10px",
              padding: "10px 14px",
              fontSize: "0.8rem",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              boxShadow: "0 8px 24px hsl(0 0% 0% / 0.3)",
            }}
          >
            <span style={{ fontSize: "1.2rem" }}>⚡</span>
            <span style={{ color: "hsl(45 100% 90%)" }}>Problem Solver</span>
          </div>
        </div>

        {/* Right: Text */}
        <div>
          <div className="section-tag">About Me</div>


          <p style={{ color: "hsl(220 10% 60%)", lineHeight: "1.8", marginBottom: "20px", fontSize: "1rem" }}>
            I am Priyansh, a sophomore at <span style={{ color: "hsl(45 93% 58%)", fontWeight: "600" }}>RV College of Engineering</span>. I am actively learning Data Structures &amp; Algorithms and Full Stack Development, participating in Hackathons, and serving as an Organiser in the <span style={{ color: "hsl(45 93% 58%)", fontWeight: "600" }}>Rotaract Club of RVCE</span>.
          </p>
          <p style={{ color: "hsl(220 10% 60%)", lineHeight: "1.8", marginBottom: "32px", fontSize: "1rem" }}>
            I love solving real-world problems through code — from building interactive web applications to experimenting with AI and IoT systems. Whether it's a hackathon, a CTF challenge, or a community event, I'm always up for something new.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "36px" }}>
            {[
              { label: "Location", val: "Bangalore, India" },
              { label: "College", val: "RVCE" },
              { label: "Degree", val: "B.E. Information Science" },
              { label: "Expected", val: "2028" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: "hsl(220 14% 11%)",
                  border: "1px solid hsl(220 14% 18%)",
                  borderRadius: "10px",
                  padding: "14px 18px",
                }}
              >
                <div style={{ fontSize: "0.72rem", color: "hsl(220 10% 45%)", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "4px" }}>
                  {item.label}
                </div>
                <div style={{ fontSize: "0.9rem", fontWeight: "600", color: "hsl(45 100% 96%)" }}>{item.val}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href="#projects" className="btn-primary">
              See My Work
            </a>
            <a
              href="https://github.com/Priyansh-Shukla14"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          #about > div:last-child > div:first-child {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
