import React from 'react';

export const extractTextFromChildren = (children: any) => {
  let text = '';

  React.Children.forEach(children, (child) => {
    if (typeof child === 'string') {
      text += child;
    } else if (child.props && child.props.children) {
      text += extractTextFromChildren(child.props.children);
    }
  });

  return text;
};
