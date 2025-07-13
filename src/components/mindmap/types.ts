import { Node, Edge } from '@xyflow/react';

export interface MindMapData {
  nodes: Node[];
  edges: Edge[];
}

export interface MindMapProps {
  data?: MindMapData;
  tags?: string[];
  readOnly?: boolean;
  onDataChange?: (data: MindMapData) => void;
}