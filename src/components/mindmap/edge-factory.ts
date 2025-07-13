import { Edge } from '@xyflow/react';

export const createTagEdges = (tags: string[]): Edge[] => {
  return tags.map((_, index) => ({
    id: `edge-${index}`,
    source: 'center',
    target: `tag-${index}`,
    type: 'smoothstep',
    style: {
      stroke: '#667eea', 
      strokeWidth: 3,
      strokeDasharray: '5,5'
    },
    animated: true
  }));
};