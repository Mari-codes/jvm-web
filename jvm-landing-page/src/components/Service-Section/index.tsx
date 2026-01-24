import React from 'react';
import CircleBackground from './CircleBackground';

const ServiceSection: React.FC = () => {
    return (
        <div className="service-section">
            <CircleBackground />
            <h2>Nossos Serviços</h2>
            <p>Descrição dos serviços oferecidos.</p>
        </div>
    );
};

export default ServiceSection;