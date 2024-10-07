import React from 'react';

const Button = ({ label }) => {
    return React.createElement("button", { type: 'button' }, label);
};

export { Button as B };
