import { skills } from '../data/perfil';

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto border-t border-white/5">
      <h2 className="font-serif text-3xl text-neutral-50 mb-10">Skills</h2>

      <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
        {Object.entries(skills).map(([categoria, itens]) => (
          <div key={categoria}>
            <h3 className="text-violet-400 text-xs uppercase tracking-[0.15em] mb-3">
              {categoria}
            </h3>
            <div className="flex flex-wrap gap-2">
              {itens.map((item) => (
                <span
                  key={item}
                  className="text-sm text-neutral-300 border border-white/10 rounded-full px-3 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
