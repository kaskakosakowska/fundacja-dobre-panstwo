import { useCallback, useEffect, useState } from 'react';
import {
  ReactFlow,
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
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

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

export const MindMap = ({ data, tags = [], readOnly = false, onDataChange }: MindMapProps) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  // Force update when tags change
  useEffect(() => {
    console.log('=== MindMap DEBUG ===');
    console.log('data:', data);
    console.log('tags:', tags);
    console.log('readOnly:', readOnly);
    
    if (data && data.nodes && data.nodes.length > 0) {
      console.log('MindMap: Using provided data, nodes count:', data.nodes.length);
      setNodes(data.nodes);
      setEdges(data.edges || []);
    } else if (tags && tags.length > 0) {
      console.log('MindMap: Creating nodes from tags, tag count:', tags.length);
      const tagNodes = createTagNodes(tags);
      const tagEdges = createTagEdges(tags);
      console.log('Created nodes:', tagNodes);
      console.log('Created edges:', tagEdges);
      setNodes(tagNodes);
      setEdges(tagEdges);
      
      // Immediately notify parent of the new structure
      if (onDataChange && !readOnly) {
        console.log('MindMap: Notifying parent of new structure');
        onDataChange({ nodes: tagNodes, edges: tagEdges });
      }
    } else {
      console.log('MindMap: No data or tags, clearing');
      setNodes([]);
      setEdges([]);
    }
    console.log('=== END MindMap DEBUG ===');
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
      console.log('=== handleNodesChange CALLED ===');
      console.log('changes:', changes);
      console.log('readOnly:', readOnly);
      
      if (!readOnly) {
        onNodesChange(changes);
        console.log('onNodesChange called');
        
        // Notify parent immediately
        if (onDataChange) {
          console.log('Calling onDataChange from handleNodesChange');
          // Use setTimeout to get updated state
          setTimeout(() => {
            setNodes((currentNodes) => {
              setEdges((currentEdges) => {
                const newData = { nodes: currentNodes, edges: currentEdges };
                console.log('Sending data to parent:', newData);
                onDataChange(newData);
                return currentEdges;
              });
              return currentNodes;
            });
          }, 0);
        }
      } else {
        console.log('ReadOnly mode - changes ignored');
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
    return (
      <div className="w-full h-96 border-2 border-dashed border-gray-300 flex items-center justify-center">
        <p className="text-gray-500">Brak danych do wyświetlenia mapy myśli</p>
      </div>
    );
  }

  return (
    <div className="w-full h-96 border border-gray-300">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={handleNodesChange}
        onEdgesChange={handleEdgesChange}
        onConnect={onConnect}
        nodesDraggable={!readOnly}
        nodesConnectable={!readOnly}
        elementsSelectable={!readOnly}
        fitView
        style={{ width: '100%', height: '100%' }}
      >
        <Controls showInteractive={!readOnly} />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};