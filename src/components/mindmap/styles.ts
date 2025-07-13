export const MIND_MAP_CONSTANTS = {
  centerX: 250,
  centerY: 200,
  radius: 150,
};

export const GRADIENT_COLORS = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', 
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
  'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
  'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)'
];

export const CENTER_NODE_STYLE = {
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
  textAlign: 'center' as const
};

export const TAG_NODE_STYLE_BASE = {
  border: '2px solid #ffffff',
  borderRadius: '25px',
  padding: '10px 16px',
  fontSize: '12px',
  fontWeight: '600',
  color: '#ffffff',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
  textAlign: 'center' as const,
  minWidth: '80px'
};

export const EDGE_STYLE = {
  stroke: '#667eea', 
  strokeWidth: 3,
  strokeDasharray: '5,5'
};