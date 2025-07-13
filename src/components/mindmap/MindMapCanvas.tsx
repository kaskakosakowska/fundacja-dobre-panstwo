import { ReactFlow, Controls, Background, BackgroundVariant, Node, Edge, NodeChange, EdgeChange, Connection } from '@xyflow/react';

interface MindMapCanvasProps {
  nodes: Node[];
  edges: Edge[];
  readOnly: boolean;
  onNodesChange: (changes: NodeChange[]) => void;
  onEdgesChange: (changes: EdgeChange[]) => void;
  onConnect: (params: Connection) => void;
}

export const MindMapCanvas = ({
  nodes,
  edges,
  readOnly,
  onNodesChange,
  onEdgesChange,
  onConnect
}: MindMapCanvasProps) => {
  return (
    <div className="w-full h-full border-2 border-gray-200 rounded-lg overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodesDraggable={!readOnly}
        nodesConnectable={!readOnly}
        elementsSelectable={!readOnly}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        style={{ width: '100%', height: '100%' }}
      >
        <Controls showInteractive={!readOnly} />
        <Background 
          variant={BackgroundVariant.Dots} 
          gap={20} 
          size={2} 
          color="#e2e8f0"
        />
      </ReactFlow>
    </div>
  );
};