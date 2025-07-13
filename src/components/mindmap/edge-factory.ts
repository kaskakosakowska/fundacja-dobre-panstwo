import { Edge } from '@xyflow/react';
import { EDGE_STYLE } from './styles';

export const createTagEdges = (tags: string[]): Edge[] => {
  return tags.map((_, index) => ({
    id: `edge-${index}`,
    source: 'center',
    target: `tag-${index}`,
    type: 'smoothstep',
    style: EDGE_STYLE,
    animated: true
  }));
};