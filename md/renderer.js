import React from 'react';
import commonmark from 'commonmark';
import { escapeXml as esc } from 'commonmark/lib/common';
import Link from 'next/link'

import containerStyle from '../components/containerStyle';

let reUnsafeProtocol = /^javascript:|vbscript:|file:|data:/i;
let reSafeDataProtocol = /^data:image\/(?:png|gif|jpeg|webp)/i;

function pushEnd(stack, element) {
  stack[stack.length - 1].push(element);
}

// softbreak, linebreak, html_inline, image, code, code_block, html_block, thematic_break

function findTag({ type, level, destination }) {
  switch (type) {
    case 'heading':
      return [`h${level}`, null];
    case 'link':
      return [Link, { href: destination }];
    case 'paragraph':
    case 'list':
    case 'item':
    case 'strong':
    case 'emph':
    case 'block_quote':
      const mapping = {
        paragraph: 'p',
        list: 'ul',
        item: 'li',
        link: 'a',
        strong: 'strong',
        emph: 'em',
        block_quote: 'blockquote',
      };
      return [mapping[type], null];
    default:
      console.log(type);
  }
}

function render_(ast) {
  const walker = ast.walker();
  const stack = [];

  let event;
  while(event = walker.next()) {
    const { type, level } = event.node;
    if (type === 'document') {
      stack.push([]);
    } else if (type === 'text') {
      pushEnd(stack, event.node.literal);
    } else if (event.entering) {
      stack.push([]);
    } else {
      const children = stack.pop();
      // TODO custom tags
      const [tag, extras] = findTag(event.node);
      // TODO attrs?
      pushEnd(stack, React.createElement(tag, extras, ...children));
    }
  }
  return stack;
}

export default function render(content) {
  const reader = new commonmark.Parser();
  const parsed = reader.parse(content);
  return (
    <div className={containerStyle}>{render_(parsed)}</div>
  );
}
