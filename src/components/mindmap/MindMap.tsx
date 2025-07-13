import '@xyflow/react/dist/style.css';
import { MindMapProps } from './types';
import { useMindMapData } from './hooks/useMindMapData';
import { MindMapEmpty } from './MindMapEmpty';
import { MindMapCanvas } from './MindMapCanvas';

export const MindMap = ({ data, tags = [], readOnly = false, onDataChange }: MindMapProps) => {
  const {
    nodes,
    edges,
    onConnect,
    handleNodesChange,
    handleEdgesChange
  } = useMindMapData({ data, tags, readOnly, onDataChange });

  console.log('=== RENDERING MindMap ===');
  console.log('Current nodes count:', nodes.length);
  console.log('Current edges count:', edges.length);
  console.log('readOnly:', readOnly);

  // Debug: force simple rendering first
  console.log('=== FINAL RENDER CHECK ===');
  console.log('nodes length:', nodes.length);
  console.log('edges length:', edges.length);
  console.log('readOnly:', readOnly);

  if (nodes.length === 0) {
    return <MindMapEmpty />;
  }

  return (
    <MindMapCanvas
      nodes={nodes}
      edges={edges}
      readOnly={readOnly}
      onNodesChange={handleNodesChange}
      onEdgesChange={handleEdgesChange}
      onConnect={onConnect}
    />
  );
};