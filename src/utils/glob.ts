import type { MarkdownInstance } from 'astro';
import { getBaseName } from './route.ts';

export interface Article {
  title: string;
  content: string;
  tag?: string;
}

export const parseArticles = (
  src: MarkdownInstance<Record<string, any>>[],
): Article[] => {
  return src.map((post) => {
    const title = getBaseName(post.file);
    const content = post.compiledContent();
    const tag = post.frontmatter.tag;
    return {
      title,
      content,
      tag,
    };
  });
};
