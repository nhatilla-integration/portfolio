const TOKEN_REGEX =
  /(\/\/.*$)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|(@\w+)|\b(const|let|var|function|return|import|from|export|class|new|public|private|protected|static|void|final|interface|extends|implements|this|if|else|async|await|package|throws|null|true|false)\b|(\b\d+(?:\.\d+)?\b)|([A-Za-z_]\w*)(?=\s*:)/gm;

const CLASS = {
  comment: 'text-neutral-600 italic',
  string: 'text-emerald-300',
  annotation: 'text-amber-300',
  keyword: 'text-violet-400',
  number: 'text-sky-300',
  property: 'text-sky-300',
};

export function highlightLine(line) {
  const nodes = [];
  let lastIndex = 0;
  let key = 0;

  for (const match of line.matchAll(TOKEN_REGEX)) {
    const [full, comment, string, annotation, keyword, number, property] = match;
    const start = match.index;

    if (start > lastIndex) {
      nodes.push(<span key={key++}>{line.slice(lastIndex, start)}</span>);
    }

    let cls = '';
    if (comment) cls = CLASS.comment;
    else if (string) cls = CLASS.string;
    else if (annotation) cls = CLASS.annotation;
    else if (keyword) cls = CLASS.keyword;
    else if (number) cls = CLASS.number;
    else if (property) cls = CLASS.property;

    nodes.push(
      <span key={key++} className={cls}>
        {full}
      </span>
    );
    lastIndex = start + full.length;
  }

  if (lastIndex < line.length) {
    nodes.push(<span key={key++}>{line.slice(lastIndex)}</span>);
  }

  return nodes;
}
