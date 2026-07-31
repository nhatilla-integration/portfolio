import { skills } from '../data/perfil';
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiSpringboot,
  SiPostgresql,
  SiMongodb,
  SiSupabase,
  SiGit,
  SiGithub,
  SiDocker,
} from 'react-icons/si';
import { FaJava, FaDatabase, FaNetworkWired, FaAws } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ICONS = {
  Python: SiPython,
  Java: FaJava,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  SQL: FaDatabase,
  React: SiReact,
  'Tailwind CSS': SiTailwindcss,
  HTML5: SiHtml5,
  CSS3: SiCss,
  'Node.js / Express': SiNodedotjs,
  'Spring Boot': SiSpringboot,
  'APIs REST': FaNetworkWired,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Supabase: SiSupabase,
  'AWS (EC2, S3, Lambda)': FaAws,
  Git: SiGit,
  GitHub: SiGithub,
  Docker: SiDocker,
};

function Skills() {
  const { ref, className } = useScrollReveal();

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-24 px-6 max-w-5xl mx-auto border-t border-white/5 ${className}`}
    >
      <h2 className="font-serif text-3xl text-neutral-50 mb-10">Skills</h2>

      <div className="flex flex-col gap-10">
        {Object.entries(skills).map(([categoria, itens]) => (
          <div key={categoria}>
            <h3 className="text-violet-400 text-xs uppercase tracking-[0.15em] mb-4">
              {categoria}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {itens.map((item) => {
                const Icon = ICONS[item];
                return (
                  <div
                    key={item}
                    className="flex items-center gap-3 border border-[#C9A876]/35 rounded-xl px-4 py-3 bg-white/[0.02] hover:border-[#C9A876]/70 hover:-translate-y-0.5 transition-all"
                  >
                    <span className="shrink-0 w-8 h-8 rounded-lg bg-[#C9A876]/10 border border-[#C9A876]/30 flex items-center justify-center text-[#C9A876] text-base">
                      {Icon && <Icon />}
                    </span>
                    <span className="text-sm text-neutral-200">{item}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
