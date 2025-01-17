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
import { Button } from "@/components/ui/button";

const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { 
      label: '<div class="text-lg font-bold mb-2">Conversation Trigger</div><div class="text-base">Start the conversation with the candidate</div>',
      editable: true 
    },
    position: { x: 0, y: 25 },
    style: { width: 300 }
  },
  {
    id: '2',
    data: { 
      label: '<div class="text-lg font-bold mb-2">Greeting</div><div class="text-base">Hi {{first_name}}, It\'s Kelsey here from Hey Socket. Thanks for expressing your interest in our job post.</div>',
      editable: true 
    },
    position: { x: 350, y: 25 },
    style: { width: 300 }
  },
  {
    id: '3',
    data: { 
      label: '<div class="text-lg font-bold mb-2">Opening Question</div><div class="text-base">So {{first_name}} can you give me a brief introduction about yourself?</div>',
      editable: true 
    },
    position: { x: 700, y: 25 },
    style: { width: 300 }
  },
  {
    id: '4',
    data: { 
      label: '<div class="text-lg font-bold mb-2">Further Questions</div><div class="text-base">Continue to ask further questions and listen to the speaker answers.</div>',
      editable: true 
    },
    position: { x: 1050, y: 25 },
    style: { width: 300 }
  },
  {
    id: '5',
    data: { 
      label: '<div class="text-lg font-bold mb-2">Explain Benefits</div><div class="text-base">Explain to {{first_name}} the benefits and perks of {{company}} and the {{job_requirement}}</div>',
      editable: true 
    },
    position: { x: 1400, y: 25 },
    style: { width: 300 }
  },
  {
    id: '6',
    type: 'output',
    data: { 
      label: '<div class="text-lg font-bold mb-2">End Conversation</div><div class="text-base">Thank the candidate and end the conversation</div>',
      editable: true 
    },
    position: { x: 1750, y: 25 },
    style: { width: 300 }
  },
];

const initialEdges = [
  { id: ', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3', animated: true },
  { id: 'e3-4', source: '3', target: '4', animated: true },
  { id: 'e4-5', source: '4', target: '5', animated: true },
  { id: 'e5-6', source: '5', target: '6', animated: true },
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
    <div className="w-full bg-background rounded-lg border relative">
      <div className="p-4 border-b flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">Conversation Flow</h2>
          <p className="text-sm text-muted-foreground">Design your agent's conversation flow</p>
        </div>
        <Button 
          variant="default"
          className="bg-blue-500 hover:bg-blue-600"
          onClick={() => window.open('https://dashboard.retellai.com/agents/agent_98e7f1d1c951078b86a23f3ddb', '_blank')}
        >
          Test
        </Button>
      </div>
      <div style={{ height: 'calc(100vh - 200px)' }}>
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
          defaultViewport={{ x: 0, y: 0, zoom: 0.35 }}
        >
          <Controls />
          <MiniMap />
          <Background />
        </ReactFlow>
      </div>
    </div>
  );
}