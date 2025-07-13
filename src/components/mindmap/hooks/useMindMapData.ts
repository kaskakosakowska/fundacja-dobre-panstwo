import { useCallback, useEffect } from 'react';
import { useNodesState, useEdgesState, NodeChange, EdgeChange, addEdge, Connection } from '@xyflow/react';
import { MindMapData } from '../types';
import { createTagNodes } from '../node-factory';
import { createTagEdges } from '../edge-factory';

interface UseMindMapDataProps {
  data?: MindMapData;
  tags: string[];
  readOnly: boolean;
  onDataChange?: (data: MindMapData) => void;
}

export const useMindMapData = ({ data, tags, readOnly, onDataChange }: UseMindMapDataProps) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  // Initialize once and stop recreation
  useEffect(() => {
    console.log('=== MindMap INIT ===');
    console.log('data:', data);
    console.log('tags:', tags);
    
    // If we have saved data, use it
    if (data && data.nodes && data.nodes.length > 0) {
      console.log('MindMap: Using saved data, nodes count:', data.nodes.length);
      setNodes(data.nodes);
      setEdges(data.edges || []);
    } 
    // Otherwise create from tags
    else if (tags && tags.length > 0) {
      console.log('MindMap: Creating from tags, count:', tags.length);
      const tagNodes = createTagNodes(tags);
      const tagEdges = createTagEdges(tags);
      setNodes(tagNodes);
      setEdges(tagEdges);
    }
    console.log('=== END MindMap INIT ===');
  }, []);

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

  return {
    nodes,
    edges,
    onConnect,
    handleNodesChange,
    handleEdgesChange
  };
};