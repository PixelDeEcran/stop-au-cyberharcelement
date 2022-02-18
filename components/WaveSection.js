/**
 * @param {string} color 
 * @param {string} viewBox
 * @param {string} pathData 
 * @param {"up" | "down"} direction 
 */
export function WaveDef(color, backgroundColor, viewBox, pathData) {
  return (
    <div className="root">
      <svg height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}>
        <path fill={color} fillOpacity="1" d={pathData}></path>
      </svg>
      <style jsx>{`
        .root {
          background-color: ${backgroundColor};
        }
        svg {
          position: relative;
          display: block;
          width: 100%;
          height: 180px;
          filter: drop-shadow(0 0.25rem 1rem rgba(0, 0, 0, 0.25));
        }
      `}</style>
    </div>
  )
}

// This is not perfect at all, but at least it works! (so much pain to make it work ;-;)
export function WaveSection({ children, id, Wave1, Wave2, marginTop, contentMarginTop, backgroundColor, type = "section" }) {
  const ElementName = type;

  return (
    <ElementName className="root" id={id}>
      {Wave1 !== null && Wave1}

      <div className="container">
        <div className="content">
          {children}
        </div>
      </div>
      
      {Wave2 !== null && Wave2}

      <style jsx>{`
        .root {
          margin-top: ${marginTop}px;
        }

        .container {
          padding: 30px 0;
          position: relative;
          background-color: ${backgroundColor};
          z-index: 1;
          display: flex;
          justify-content: center;
        }

        .content {
          width: 85vw;
          max-width: 75rem;
          margin-top: ${contentMarginTop}px;
        }

        .root {
          margin-bottom: ${-contentMarginTop}px;
        }
      `}</style>
    </ElementName>
  )
}