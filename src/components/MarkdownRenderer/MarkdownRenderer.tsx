import React, { useEffect, useState } from 'react';
import styles from './MarkdownRenderer.module.scss';

interface MarkdownRendererProps {
  markdownFile?: string;
  markdownContent?: string;
}

// Inline formatting helper for bold, italic, code, links
const renderInline = (text: string): React.ReactNode[] => {
  // Regex to match inline elements: `code`, **bold**, *italic*, [link](url)
  const regex = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;
  const parts = text.split(regex);

  return parts.map((part, i) => {
    if (!part) return null;

    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={i}>{part.slice(1, -1)}</code>;
    }
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      return (
        <a key={i} href={linkMatch[2]} target="_blank" rel="noopener noreferrer">
          {linkMatch[1]}
        </a>
      );
    }
    return part;
  });
};

const parseMarkdownToReact = (rawMarkdown: string): React.ReactNode => {
  const lines = rawMarkdown.split(/\r?\n/);
  const elements: React.ReactNode[] = [];
  let inCodeBlock = false;
  let codeBlockLines: string[] = [];
  let currentList: { type: 'ul' | 'ol'; items: React.ReactNode[] } | null = null;

  const flushList = () => {
    if (!currentList) return;
    const ListTag = currentList.type;
    elements.push(
      <ListTag key={`list-${elements.length}`}>
        {currentList.items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ListTag>
    );
    currentList = null;
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    // Code block toggle
    if (trimmed.startsWith('```')) {
      if (inCodeBlock) {
        elements.push(
          <pre key={`code-${index}`}>
            <code>{codeBlockLines.join('\n')}</code>
          </pre>
        );
        codeBlockLines = [];
        inCodeBlock = false;
      } else {
        flushList();
        inCodeBlock = true;
      }
      return;
    }

    if (inCodeBlock) {
      codeBlockLines.push(line);
      return;
    }

    // Empty line
    if (!trimmed) {
      flushList();
      return;
    }

    // Horizontal rule
    if (trimmed === '---' || trimmed === '***' || trimmed === '___') {
      flushList();
      elements.push(<hr key={`hr-${index}`} />);
      return;
    }

    // Headings
    if (trimmed.startsWith('# ')) {
      flushList();
      elements.push(<h1 key={`h1-${index}`}>{renderInline(trimmed.slice(2))}</h1>);
      return;
    }
    if (trimmed.startsWith('## ')) {
      flushList();
      elements.push(<h2 key={`h2-${index}`}>{renderInline(trimmed.slice(3))}</h2>);
      return;
    }
    if (trimmed.startsWith('### ')) {
      flushList();
      elements.push(<h3 key={`h3-${index}`}>{renderInline(trimmed.slice(4))}</h3>);
      return;
    }
    if (trimmed.startsWith('#### ')) {
      flushList();
      elements.push(<h4 key={`h4-${index}`}>{renderInline(trimmed.slice(5))}</h4>);
      return;
    }

    // Blockquote
    if (trimmed.startsWith('> ')) {
      flushList();
      elements.push(
        <blockquote key={`quote-${index}`}>
          <p>{renderInline(trimmed.slice(2))}</p>
        </blockquote>
      );
      return;
    }

    // Unordered List
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      const content = renderInline(trimmed.slice(2));
      if (!currentList || currentList.type !== 'ul') {
        flushList();
        currentList = { type: 'ul', items: [content] };
      } else {
        currentList.items.push(content);
      }
      return;
    }

    // Ordered List
    const olMatch = trimmed.match(/^\d+\.\s+(.*)$/);
    if (olMatch) {
      const content = renderInline(olMatch[1]);
      if (!currentList || currentList.type !== 'ol') {
        flushList();
        currentList = { type: 'ol', items: [content] };
      } else {
        currentList.items.push(content);
      }
      return;
    }

    // Paragraph
    flushList();
    elements.push(<p key={`p-${index}`}>{renderInline(trimmed)}</p>);
  });

  flushList();
  return <>{elements}</>;
};

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ markdownFile, markdownContent }) => {
  const [content, setContent] = useState<string>(markdownContent || '');
  const [loading, setLoading] = useState<boolean>(!!markdownFile && !markdownContent);

  useEffect(() => {
    if (markdownContent) {
      setContent(markdownContent);
      setLoading(false);
      return;
    }

    if (markdownFile) {
      setLoading(true);
      fetch(markdownFile)
        .then((res) => {
          if (!res.ok) throw new Error('Markdown file not found');
          return res.text();
        })
        .then((text) => {
          setContent(text);
          setLoading(false);
        })
        .catch((err) => {
          console.error('Error fetching markdown file:', err);
          setContent('*(Não foi possível carregar o conteúdo do arquivo Markdown.)*');
          setLoading(false);
        });
    }
  }, [markdownFile, markdownContent]);

  if (loading) {
    return <div className={styles.loading}>Carregando detalhes do projeto...</div>;
  }

  if (!content) {
    return null;
  }

  return <div className={styles.markdownWrapper}>{parseMarkdownToReact(content)}</div>;
};

export default MarkdownRenderer;
