import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as d3 from 'd3';
import type { MindMapNode, MindMapLink } from '../types';
import { mindMapData } from '../constants';

interface InteractiveMapProps {
    activeFilter: string;
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({ activeFilter }) => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const [nodes, setNodes] = useState<MindMapNode[]>([]);
    const [links, setLinks] = useState<MindMapLink[]>([]);
    const simulationRef = useRef<d3.Simulation<MindMapNode, MindMapLink>>();

    const [hoveredNode, setHoveredNode] = useState<MindMapNode | null>(null);
    // FIX: Wrap d3.zoomIdentity in a function for lazy initialization with useState.
    // This prevents React from misinterpreting it as a functional update and trying to call it.
    const [zoomTransform, setZoomTransform] = useState<d3.ZoomTransform>(() => d3.zoomIdentity);

    const linkedByIndex = useMemo(() => {
        const index: { [key: string]: boolean } = {};
        mindMapData.links.forEach(d => {
            index[`${d.source},${d.target}`] = true;
            index[`${d.target},${d.source}`] = true;
        });
        return index;
    }, []);

    // Setup simulation and zoom
    useEffect(() => {
        const svgElement = d3.select(svgRef.current);
        if (!svgElement.node()) return;
        const width = svgElement.node()!.getBoundingClientRect().width;
        const height = svgElement.node()!.getBoundingClientRect().height;
        
        const initialNodes: MindMapNode[] = JSON.parse(JSON.stringify(mindMapData.nodes));
        const initialLinks: MindMapLink[] = JSON.parse(JSON.stringify(mindMapData.links));

        const simulation = d3.forceSimulation<MindMapNode>(initialNodes)
            .force('link', d3.forceLink<MindMapNode, MindMapLink>(initialLinks).id(d => d.id).distance(100).strength(0.5))
            .force('charge', d3.forceManyBody().strength(-400))
            .force('center', d3.forceCenter(width / 2, height / 2))
            .force('collide', d3.forceCollide<MindMapNode>(d => d.radius + 10).strength(0.8));
        
        simulationRef.current = simulation;

        simulation.on('tick', () => {
            setNodes([...simulation.nodes()]);
            setLinks([...(simulation.force('link') as d3.ForceLink<MindMapNode, MindMapLink>).links()]);
        });
        
        const zoomBehavior = d3.zoom<SVGSVGElement, unknown>()
            .scaleExtent([0.2, 5])
            .on('zoom', (event) => {
                setZoomTransform(event.transform);
            });

        svgElement.call(zoomBehavior);

        return () => {
            simulation.stop();
            svgElement.on('.zoom', null);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Drag handlers
    const drag = (sim: d3.Simulation<MindMapNode, MindMapLink>) => {
        function dragstarted(event: d3.D3DragEvent<Element, MindMapNode, MindMapNode>, d: MindMapNode) {
            if (!event.active) sim.alphaTarget(0.3).restart();
            d.fx = d.x!;
            d.fy = d.y!;
        }
        function dragged(event: d3.D3DragEvent<Element, MindMapNode, MindMapNode>, d: MindMapNode) {
            d.fx = event.x;
            d.fy = event.y;
        }
        function dragended(event: d3.D3DragEvent<Element, MindMapNode, MindMapNode>, d: MindMapNode) {
            if (!event.active) sim.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }
        return d3.drag<SVGGElement, MindMapNode>().on("start", dragstarted).on("drag", dragged).on("end", dragended);
    };
    
    // Apply drag handlers to nodes when they are rendered
    useEffect(() => {
        if (nodes.length > 0 && simulationRef.current) {
            d3.selectAll<SVGGElement, MindMapNode>('.node').call(drag(simulationRef.current));
        }
    }, [nodes]);


    const isNodeActive = (node: MindMapNode) => {
        if (activeFilter === 'All Areas') return true;
        return node.group === activeFilter;
    };

    const handleMouseEnter = (node: MindMapNode) => {
        setHoveredNode(node);
    };

    const handleMouseLeave = () => {
        setHoveredNode(null);
    };
    
    const getNodeTransform = (node: MindMapNode) => {
        let scale = 1;
        if (hoveredNode && node.id === hoveredNode.id) {
            scale = 1.2;
        }
        return `translate(${node.x!},${node.y!}) scale(${scale})`;
    };

    const getNodeOpacity = (node: MindMapNode) => {
        if (!hoveredNode) {
            return isNodeActive(node) ? 1 : 0.2;
        }
        if (node.id === hoveredNode.id || linkedByIndex[`${node.id},${hoveredNode.id}`]) {
            return 1;
        }
        return 0.1;
    };

    const getLinkOpacity = (link: MindMapLink) => {
        const sourceNode = link.source as MindMapNode;
        const targetNode = link.target as MindMapNode;
        
        if (!hoveredNode) {
            return (isNodeActive(sourceNode) && isNodeActive(targetNode)) ? 0.6 : 0.1;
        }
        if (sourceNode.id === hoveredNode.id || targetNode.id === hoveredNode.id) {
            return 0.8;
        }
        return 0.05;
    };

    return (
        <svg ref={svgRef} className="w-full h-full cursor-grab active:cursor-grabbing">
           <g transform={zoomTransform.toString()}>
                <g className="links">
                    {links.map((link, i) => (
                        <line
                            key={i}
                            x1={(link.source as MindMapNode).x!}
                            y1={(link.source as MindMapNode).y!}
                            x2={(link.target as MindMapNode).x!}
                            y2={(link.target as MindMapNode).y!}
                            stroke="#9ca3af"
                            strokeWidth={1.5}
                            style={{ transition: 'opacity 0.3s ease', opacity: getLinkOpacity(link) }}
                        />
                    ))}
                </g>
                <g className="nodes">
                    {nodes.map(node => (
                        <g 
                            key={node.id}
                            className="node cursor-pointer"
                            transform={getNodeTransform(node)}
                            style={{ transition: 'opacity 0.3s ease, transform 0.3s ease', opacity: getNodeOpacity(node) }}
                            onMouseEnter={() => handleMouseEnter(node)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <circle r={node.radius} fill={node.color} stroke="#111827" strokeWidth="3" />
                            <text
                                textAnchor="middle"
                                dy=".3em"
                                fill="white"
                                fontSize={node.radius / 3.5}
                                fontWeight="bold"
                                style={{ pointerEvents: 'none' }}
                            >
                                {node.label}
                            </text>
                        </g>
                    ))}
                </g>
            </g>
        </svg>
    );
};

export default InteractiveMap;