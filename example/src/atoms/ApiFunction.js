import React from 'react';

export default function ApiFunction({ title, params, response }) {
    return (
        <h4 className="mb-3">
            <span className="text-blue-dark">{title}</span> ( {params.join(' , ')} )
            -> {response}
        </h4>
    );
}
