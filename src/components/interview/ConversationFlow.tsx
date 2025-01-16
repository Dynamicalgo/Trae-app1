import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { 
      label: '<div class="text-lg font-bold mb-2">Greeting</div><div class="text-sm">Hi {{first_name}}, It\'s Kelsey here from Hey Socket. Thanks for expressing your interest in our job post. Shall we go ahead and start this interview now?</div>',
      editable: true 
    },
    position: { x: 100, y: 25 },
    style: { width: 300 }
  },
  {
    id: '2',
    data: { 
      label: '<div class="text-lg font-bold mb-2">Opening Question</div><div class="text-sm">Start by saying: So {{first_name}} can you give me a brief introduction about yourself? And how you think your experience will fit the role that we are looking for?</div>',
      editable: true 
    },
    position: { x: 400, y: 25 },
    style: { width: 300 }
  },
  {
    id: '3',
    data: { 
      label: '<div class="text-lg font-bold mb-2">Further Questions</div><div class="text-sm">Continue to ask further questions and listen to the speaker answers.\n\nQuestion 1: Type your question..\nQuestion 2: Type your question..\nQuestion 3: Type your question..</div>',
      editable: true 
    },
    position: { x: 700, y: 25 },
    style: { width: 300 }
  },
  {
    id: '4',
    data: { 
      label: '<div class="text-lg font-bold mb-2">Explain Benefits and Perks</div><div class="text-sm">Explain to {{first_name}} conversions with the speaker to interest and explain the benefits and perks of the {{company}} and the {{job_requirement}}</div>',
      editable: true 
    },
    position: { x: 1000, y: 25 },
    style: { width: 300 }
  },
  {
    id: '5',
    type: 'output',
    data: { 
      label: '<div class="text-lg font-bold mb-2">Farewell</div><div class="text-sm">Say goodbye</div>',
      editable: true 
    },
    position: { x: 1300, y: 25 },
    style: { width: 300 }
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3', animated: true },
  { id: 'e3-4', source: '3', target: '4', animated: true },
  { id: 'e4-5', source: '4', target: '5', animated: true },
];

export function ConversationFlow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = (params: any) => setEdges((eds) => addEdge(params, eds));

  const onNodeDoubleClick = (event: any, node: any) => {
    const newLabel = prompt("Edit node content:", node.data.label);
    if (newLabel) {
      setNodes((nds) =>
        nds.map((n) => {
          if (n.id === node.id) {
            return {
              ...n,
              data: { ...n.data, label: newLabel },
            };
          }
          return n;
        })
      );
    }
  };

  return (
    <div className="w-2/3 bg-background rounded-lg border">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">Conversation Flow</h2>
        <p className="text-sm text-muted-foreground">Design your agent's conversation flow</p>
      </div>
      <div style={{ height: 'calc(100% - 85px)' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeDoubleClick={onNodeDoubleClick}
          fitView
          minZoom={0.1}
          maxZoom={1.5}
          defaultViewport={{ x: 0, y: 0, zoom: 0.8 }}
        >
          <Controls />
          <MiniMap />
          <Background />
        </ReactFlow>
      </div>
    </div>
  );
}
