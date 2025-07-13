import { Node } from '@xyflow/react';
import { MIND_MAP_CONSTANTS, GRADIENT_COLORS, CENTER_NODE_STYLE, TAG_NODE_STYLE_BASE } from './styles';

export const createTagNodes = (tags: string[]): Node[] => {
  console.log('=== createTagNodes DEBUG ===');
  console.log('tags received:', tags);
  console.log('tags length:', tags.length);
  
  const { centerX, centerY, radius } = MIND_MAP_CONSTANTS;
  
  const nodes: Node[] = [
    {
      id: 'center',
      type: 'default',
      position: { x: centerX, y: centerY },
      data: { label: 'Główny temat' },
      style: CENTER_NODE_STYLE
    }
  ];

  tags.forEach((tag, index) => {
    console.log(`Processing tag ${index}:`, tag);
    const angle = (index * 2 * Math.PI) / tags.length;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    
    const newNode = {
      id: `tag-${index}`,
      type: 'default',
      position: { x, y },
      data: { label: tag },
      style: {
        ...TAG_NODE_STYLE_BASE,
        background: GRADIENT_COLORS[index % GRADIENT_COLORS.length],
      }
    };
    
    console.log(`Created node ${index}:`, newNode);
    nodes.push(newNode);
  });

  console.log('Final nodes:', nodes);
  console.log('=== END createTagNodes DEBUG ===');
  return nodes;
};