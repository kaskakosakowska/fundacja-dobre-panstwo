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

  return {
    nodes,
    edges,
    onConnect,
    handleNodesChange,
    handleEdgesChange
  };
};