import { useCallback, useEffect, useState } from 'react';
import ReactFlow, {
  Node,
  Edge,
  addEdge,
  Connection,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  BackgroundVariant,
  NodeChange,
  EdgeChange,
} from 'reactflow';
import 'reactflow/dist/style.css';

interface MindMapData {
  nodes: Node[];
  edges: Edge[];
}

interface MindMapProps {
  data?: MindMapData;
  tags?: string[];
  readOnly?: boolean;
  onDataChange?: (data: MindMapData) => void;
}

const createTagNodes = (tags: string[]): Node[] => {
  const centerX = 250;
  const centerY = 200;
  const radius = 150;
  
  const nodes: Node[] = [
    {
      id: 'center',
      type: 'default',
      position: { x: centerX, y: centerY },
      data: { label: 'Główny temat' },
      style: {
        backgroundColor: '#f6f4ef',
        border: '2px solid #333333',
        borderRadius: '50%',
        width: 120,
        height: 120,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '12px',
        fontWeight: 'bold',
        color: '#333333'
      }
    }
  ];

  tags.forEach((tag, index) => {
    const angle = (index * 2 * Math.PI) / tags.length;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    
    nodes.push({
      id: `tag-${index}`,
      type: 'default',
      position: { x, y },
      data: { label: tag },
      style: {
        backgroundColor: '#ffffff',
        border: '1px solid #666666',
        borderRadius: '20px',
        padding: '8px 12px',
        fontSize: '11px',
        color: '#333333'
      }
    });
  });

  return nodes;
};

const createTagEdges = (tags: string[]): Edge[] => {
  return tags.map((_, index) => ({
    id: `edge-${index}`,
    source: 'center',
    target: `tag-${index}`,
    type: 'straight',
    style: { stroke: '#666666', strokeWidth: 1 },
    animated: false
  }));
};

export const MindMap = ({ data, tags = [], readOnly = true, onDataChange }: MindMapProps) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  // Force update when tags change
  useEffect(() => {
    console.log('MindMap: Updating with data:', data, 'tags:', tags);
    
    if (data && data.nodes && data.nodes.length > 0) {
      console.log('MindMap: Using provided data');
      setNodes(data.nodes);
      setEdges(data.edges || []);
    } else if (tags && tags.length > 0) {
      console.log('MindMap: Creating nodes from tags');
      const tagNodes = createTagNodes(tags);
      const tagEdges = createTagEdges(tags);
      setNodes(tagNodes);
      setEdges(tagEdges);
      
      // Immediately notify parent of the new structure
      if (onDataChange && !readOnly) {
        onDataChange({ nodes: tagNodes, edges: tagEdges });
      }
    } else {
      console.log('MindMap: No data or tags, clearing');
      setNodes([]);
      setEdges([]);
    }
  }, [data, tags, setNodes, setEdges, onDataChange, readOnly]);

  const onConnect = useCallback(
    (params: Connection) => {
      if (!readOnly) {
        setEdges((eds) => addEdge(params, eds));
      }
    },
    [readOnly, setEdges]
  );

  const handleNodesChange = useCallback(
    (changes: NodeChange[]) => {
      if (!readOnly) {
        onNodesChange(changes);
        // Use current state directly
        if (onDataChange) {
          setTimeout(() => {
            setNodes((currentNodes) => {
              setEdges((currentEdges) => {
                onDataChange({ nodes: currentNodes, edges: currentEdges });
                return currentEdges;
              });
              return currentNodes;
            });
          }, 50);
        }
      }
    },
    [readOnly, onNodesChange, onDataChange, setNodes, setEdges]
  );

  const handleEdgesChange = useCallback(
    (changes: EdgeChange[]) => {
      if (!readOnly) {
        onEdgesChange(changes);
        if (onDataChange) {
          setTimeout(() => {
            setNodes((currentNodes) => {
              setEdges((currentEdges) => {
                onDataChange({ nodes: currentNodes, edges: currentEdges });
                return currentEdges;
              });
              return currentNodes;
            });
          }, 50);
        }
      }
    },
    [readOnly, onEdgesChange, onDataChange, setNodes, setEdges]
  );

  return (
    <div className="w-full h-64 border rounded-lg overflow-hidden">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={handleNodesChange}
        onEdgesChange={handleEdgesChange}
        onConnect={onConnect}
        nodesDraggable={!readOnly}
        nodesConnectable={!readOnly}
        elementsSelectable={!readOnly}
        minZoom={0.5}
        maxZoom={2}
        defaultViewport={{ x: 0, y: 0, zoom: 0.8 }}
      >
        <Controls showInteractive={!readOnly} />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};