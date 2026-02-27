import { Project, Expertise } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'luxe-residence-kuwait',
    title: 'Modern Oasis Residence',
    category: 'International',
    description: 'A seamless blend of contemporary luxury and traditional Middle Eastern architectural elements.',
    heroImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1920',
    concept: 'I developed the concept around "Filtered Light" – using intricate mashrabiya patterns to create dynamic shadows while maintaining privacy in a high-end residential setting in Kuwait City.',
    gallery: [
      'https://images.unsplash.com/photo-1600607687940-4e2a09695d51?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200'
    ],
    drawings: [
      'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=1200'
    ],
    execution: [
      'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    vrUrl: '#',
    testimonial: {
      text: "The 3D visualization was so realistic that seeing the finished project felt like stepping into the render. Truly exceptional work.",
      author: "Ahmed Al-Sayed, Client"
    }
  },
  {
    id: 'skyline-office-singapore',
    title: 'Vertex Corporate HQ',
    category: 'Commercial',
    description: 'High-performance workspace design for a leading tech firm in Singapore.',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920',
    concept: 'This project focused on biophilic integration within a corporate environment. I utilized vertical gardens and natural timber finishes to contrast the glass and steel of the Singapore skyline.',
    gallery: [
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=1200'
    ],
    drawings: [
      'https://images.unsplash.com/photo-1581291417004-6e7398463c68?auto=format&fit=crop&q=80&w=1200'
    ],
    execution: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200'
    ],
    testimonial: {
      text: "Vaishnavi transformed our vision of a 'green office' into a functional masterpiece. The spatial storytelling is evident in every corner.",
      author: "Sarah Chen, COO"
    }
  },
  {
    id: 'minimalist-villa-mumbai',
    title: 'The Monolith Villa',
    category: 'Residential',
    description: 'A brutalist-inspired residential project focusing on raw materials and pure geometry.',
    heroImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1920',
    concept: 'In this project, I explored the relationship between heavy concrete forms and light, airy interiors. Large floor-to-ceiling windows dissolve the boundary between inside and out.',
    gallery: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?auto=format&fit=crop&q=80&w=1200'
    ],
    drawings: [
      'https://images.unsplash.com/photo-1503387837-b15997621304?auto=format&fit=crop&q=80&w=1200'
    ],
    execution: [
      'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=1200'
    ]
  }
];

export const EXPERTISE: Expertise[] = [
  {
    title: 'Spatial Storytelling',
    description: 'Crafting narratives through the arrangement of space, light, and materiality.',
    expandedDescription: 'I believe every space has a story to tell. By carefully curating the sequence of experiences, I create environments that resonate emotionally with their occupants.',
    previews: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=400'
    ],
    icon: 'Layout'
  },
  {
    title: 'Concept Development',
    description: 'From initial sketches to a cohesive design philosophy that guides the project.',
    expandedDescription: 'My process begins with deep research and creative exploration. I develop unique design languages that translate abstract ideas into tangible architectural forms.',
    previews: [
      'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1581291417004-6e7398463c68?auto=format&fit=crop&q=80&w=400'
    ],
    icon: 'Lightbulb'
  },
  {
    title: 'Space Planning',
    description: 'Optimizing functionality and flow without compromising on aesthetic integrity.',
    expandedDescription: 'Precision in layout is the foundation of good design. I analyze human movement and interaction to create highly efficient yet beautiful spatial configurations.',
    previews: [
      'https://images.unsplash.com/photo-1600607687940-4e2a09695d51?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=400'
    ],
    icon: 'Maximize'
  },
  {
    title: '3D Visualization',
    description: 'Photorealistic renders and walkthroughs that bring concepts to life before construction.',
    expandedDescription: 'Bridging the gap between imagination and reality. My visualizations provide absolute clarity, allowing clients to experience their future spaces in stunning detail.',
    previews: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=400'
    ],
    icon: 'Box'
  },
  {
    title: 'High-Quality Renders',
    description: 'Cinematic quality imagery with meticulous attention to texture, lighting, and atmosphere.',
    expandedDescription: 'I focus on the subtle nuances—the play of light on a surface, the grain of wood, the softness of fabric—to create imagery that is indistinguishable from photography.',
    previews: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=400'
    ],
    icon: 'Camera'
  }
];
