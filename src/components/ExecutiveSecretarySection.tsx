import React from 'react';

const ExecutiveSecretarySection: React.FC = () => {
  return (
    <section>
      <div className="es-section" style={{width: '100%', maxWidth: '500px', margin: '0 auto'}}>
        <img
          src="/executive-secretary-bictda.png"
          alt="Executive Secretary"
          style={{ width: '100%', height: '500px', objectFit: 'cover', display: 'block', margin: '0 auto' }}
        />
        <div>
          <div className="es-title" style={{fontWeight: 'bold', color: '#14532d', fontSize: '1.1rem', marginTop: '1rem'}}>Engr. Mohammed Kabir Wanori FNSE FNIEEE</div>
          <div className="es-role" style={{color: '#14b8a6', fontSize: '1rem', marginTop: '0.5rem'}}>Executive Secretary BICTDA</div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveSecretarySection;
