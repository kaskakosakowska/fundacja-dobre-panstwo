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
  console.log('=== createTagNodes DEBUG ===');
  console.log('tags received:', tags);
  console.log('tags length:', tags.length);
  
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
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        border: '3px solid #ffffff',
        borderRadius: '50%',
        width: 140,
        height: 140,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '13px',
        fontWeight: 'bold',
        color: '#ffffff',
        boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)',
        textAlign: 'center'
      }
    }
  ];

  const colors = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', 
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)'
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
        background: colors[index % colors.length],
        border: '2px solid #ffffff',
        borderRadius: '25px',
        padding: '10px 16px',
        fontSize: '12px',
        fontWeight: '600',
        color: '#ffffff',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
        textAlign: 'center' as const,
        minWidth: '80px'
      }
    };
    
    console.log(`Created node ${index}:`, newNode);
    nodes.push(newNode);
  });

  console.log('Final nodes:', nodes);
  console.log('=== END createTagNodes DEBUG ===');
  return nodes;
};

const createTagEdges = (tags: string[]): Edge[] => {
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

export const MindMap = ({ data, tags = [], readOnly = false, onDataChange }: MindMapProps) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  // Force update when tags change
  useEffect(() => {
    console.log('=== MindMap DEBUG ===');
    console.log('data:', data);
    console.log('tags:', tags);
    console.log('readOnly:', readOnly);
    
    // ALWAYS prioritize current tags over old data from database
    if (tags && tags.length > 0) {
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
    } else if (data && data.nodes && data.nodes.length > 0) {
      console.log('MindMap: Using provided data as fallback, nodes count:', data.nodes.length);
      setNodes(data.nodes);
      setEdges(data.edges || []);
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
    <div className="w-full h-full border-2 border-gray-200 rounded-lg overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
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