import React from 'react';

const Features = () => {
    const featuresList = [
        { title: 'Feature 1', description: 'Description of feature 1' },
        { title: 'Feature 2', description: 'Description of feature 2' },
        { title: 'Feature 3', description: 'Description of feature 3' },
        { title: 'Feature 4', description: 'Description of feature 4' },
    ];

    return (
        <div className="features">
            <h2>Key Features</h2>
            <div className="features-grid">
                {featuresList.map((feature, index) => (
                    <div key={index} className="feature-item">
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;