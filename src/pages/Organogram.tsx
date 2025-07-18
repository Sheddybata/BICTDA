import React from 'react';

const departments = [
  {
    name: 'Human Resource, Management and Finance Department',
    color: 'bg-green-100',
    units: [
      'Human Resources Unit',
      'Training and Development Unit',
      'Finance unit',
      'Management Unit',
      'Budget unit',
      'Financial Planning Unit',
    ],
  },
  {
    name: 'eGovernment Development, Digital Literacy and Economy Department',
    color: 'bg-green-50',
    units: [
      'eGovernment Strategy Unit',
      'Application Development Unit',
      'Infrastructure Operations Unit',
      'Digital Economy and Delivery Services Unit',
      'Business Development Unit',
      'Partnership and Collaboration Unit',
      'Capacity building and Training',
    ],
  },
  {
    name: 'Data Governance and Cyber Security Department',
    color: 'bg-green-100',
    units: [
      'Cyber Security and Threats Intelligence Unit',
      'Incident Response Unit',
      'Data Analytics, Management and mining',
      'Data Governance Unit',
    ],
  },
  {
    name: 'Authorization, Research, Monitoring, Evaluation and Innovation Department',
    color: 'bg-green-50',
    units: [
      'Strategic Planning Unit',
      'Research, Development Unit',
      'Entrepreneurship and Innovation Support Unit',
      'Emerging Technologies unit',
      'Monitoring and Evaluation Unit',
      'Authorization, Licensing and Registration unit',
    ],
  },
];

const supportUnits = [
  'Identity Data Management Directorate',
  'Special Duties Unit',
  'Protocol and Public Relation unit',
  'Audit Unit',
  'Legal Unit',
  'Procurement Unit',
  'Technical Advisers and Consultants',
];

const Organogram: React.FC = () => {
  // Ref for the Executive Secretary and department cards
  const execRef = React.useRef<HTMLDivElement>(null);
  const deptRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const [arrowPositions, setArrowPositions] = React.useState<{start: {x: number, y: number}, end: {x: number, y: number}}[]>([]);

  React.useEffect(() => {
    if (!execRef.current || deptRefs.current.length !== departments.length) return;
    const execRect = execRef.current.getBoundingClientRect();
    const positions = deptRefs.current.map((dept, idx) => {
      if (!dept) return { start: { x: 0, y: 0 }, end: { x: 0, y: 0 } };
      const deptRect = dept.getBoundingClientRect();
      // Start: bottom center of Executive Secretary
      const start = {
        x: execRect.left + execRect.width / 2,
        y: execRect.bottom,
      };
      // End: top center of department card
      const end = {
        x: deptRect.left + deptRect.width / 2,
        y: deptRect.top,
      };
      return { start, end };
    });
    setArrowPositions(positions);
  }, []);

  // Helper to get SVG container bounds
  const [svgDims, setSvgDims] = React.useState<{left: number, top: number, width: number, height: number}>({left: 0, top: 0, width: 0, height: 0});
  React.useEffect(() => {
    if (!execRef.current || deptRefs.current.length !== departments.length) return;
    const allRects = [execRef.current, ...deptRefs.current.filter(Boolean)].map(el => el!.getBoundingClientRect());
    const left = Math.min(...allRects.map(r => r.left));
    const top = Math.min(...allRects.map(r => r.top));
    const right = Math.max(...allRects.map(r => r.right));
    const bottom = Math.max(...allRects.map(r => r.bottom));
    setSvgDims({ left, top, width: right - left, height: bottom - top });
  }, [arrowPositions]);

  return (
    <section className="py-16 min-h-screen bg-gradient-to-br from-bictda-light/40 via-white to-bictda-accent/10">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-bictda-dark mb-3 tracking-tight drop-shadow-sm">Organogram</h1>
          <div className="w-24 h-1 bg-bictda-accent mx-auto rounded-full"></div>
          <p className="text-lg text-bictda-dark/80 mt-4 max-w-2xl mx-auto font-medium">
            Structure of the Borno State Information and Communication Technology Development Agency (BICTDA)
          </p>
        </div>
        <div className="flex flex-col items-center mb-12">
          <div className="flex flex-row items-start justify-center gap-8 w-full">
            <div className="flex flex-col items-center">
              <div className="bg-bictda-accent text-white font-extrabold px-12 py-5 rounded-2xl shadow mb-6 text-2xl md:text-3xl">Governing Board</div>
              <div className="w-1 h-6 bg-bictda-accent mb-2"></div>
              <div ref={execRef} className="bg-bictda-accent/90 text-white font-extrabold px-12 py-5 rounded-2xl shadow mb-6 text-2xl md:text-3xl">Executive Secretary</div>
              <div className="w-1 h-6 bg-bictda-accent mb-2"></div>
            </div>
            <div
              ref={el => (deptRefs.current[4] = el)}
              className="bg-white border border-bictda-accent/30 rounded-xl shadow p-4 min-w-[260px] max-w-xs mt-2"
              style={{ zIndex: 2 }}
            >
              <h3 className="text-bictda-accent font-bold mb-2 text-base">Support Units</h3>
              <ul className="text-bictda-dark/90 text-sm grid grid-cols-1 sm:grid-cols-1 gap-x-8 gap-y-1">
                {supportUnits.map((unit, idx) => (
                  <li key={idx} className="list-disc ml-4">{unit}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* SVG Arrows */}
        {arrowPositions.length === departments.length + 1 && (
          <svg
            style={{
              position: 'absolute',
              left: svgDims.left - (document.querySelector('.container')?.getBoundingClientRect().left || 0),
              top: svgDims.top - (document.querySelector('.container')?.getBoundingClientRect().top || 0),
              pointerEvents: 'none',
              width: svgDims.width,
              height: svgDims.height,
              zIndex: 10,
            }}
            width={svgDims.width}
            height={svgDims.height}
          >
            {/* Arrows to departments */}
            {arrowPositions.slice(0, departments.length).map((pos, idx) => {
              const startX = pos.start.x - svgDims.left;
              const startY = pos.start.y - svgDims.top;
              const endX = pos.end.x - svgDims.left;
              const endY = pos.end.y - svgDims.top;
              const curveY = startY + (endY - startY) * 0.5;
              return (
                <path
                  key={idx}
                  d={`M${startX},${startY} C${startX},${curveY} ${endX},${curveY} ${endX},${endY}`}
                  stroke="#16a34a"
                  strokeWidth={3}
                  fill="none"
                  markerEnd="url(#arrowhead)"
                  opacity={0.85}
                />
              );
            })}
            {/* Arrow to Support Units */}
            {(() => {
              const pos = arrowPositions[departments.length];
              if (!pos) return null;
              const startX = pos.start.x - svgDims.left;
              const startY = pos.start.y - svgDims.top;
              const endX = pos.end.x - svgDims.left;
              const endY = pos.end.y - svgDims.top;
              // Curve to the right
              const curveX = startX + (endX - startX) * 0.7;
              return (
                <path
                  key="support-arrow"
                  d={`M${startX},${startY} C${curveX},${startY} ${curveX},${endY} ${endX},${endY}`}
                  stroke="#16a34a"
                  strokeWidth={3}
                  fill="none"
                  markerEnd="url(#arrowhead)"
                  opacity={0.85}
                />
              );
            })()}
            <defs>
              <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto" markerUnits="strokeWidth">
                <polygon points="0 0, 8 4, 0 8" fill="#16a34a" />
              </marker>
            </defs>
          </svg>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {departments.map((dept, idx) => (
            <div
              key={idx}
              ref={el => (deptRefs.current[idx] = el)}
              className={`rounded-2xl shadow-lg border border-bictda-accent/20 p-3 md:p-6 flex flex-col ${dept.color}`}
            >
              <h2 className="text-base md:text-lg font-bold text-bictda-accent mb-2 md:mb-3 text-center">{dept.name}</h2>
              <ul className="text-bictda-dark/90 text-xs md:text-sm font-medium space-y-1">
                {dept.units.map((unit, i) => (
                  <li key={i} className="list-disc ml-4">{unit}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Organogram; 