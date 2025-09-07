
import * as d3 from 'd3';

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface Book {
  title: string;
  author: string;
  description: string;
  image: string;
  category: string;
}

export interface Service {
  icon: JSX.Element;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  category: string;
}

export interface Collaboration {
    icon: JSX.Element;
    title: string;
    subtitle: string;
    description: string;
    buttonText: string;
}

export interface MindMapNode extends d3.SimulationNodeDatum {
  id: string;
  group: string;
  label: string;
  radius: number;
  color: string;
}

export interface MindMapLink extends d3.SimulationLinkDatum<MindMapNode> {
  source: string | MindMapNode;
  target: string | MindMapNode;
}