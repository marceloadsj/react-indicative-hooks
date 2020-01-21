import React, { Fragment } from 'react';

export default function ApiIndicativeParams({ options }) {
    return (
        <Fragment>
            <li>
                rules: Check all available rules{' '}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://indicative.adonisjs.com/"
                >
                here.
                </a>
            </li>

            <li>
                messages (optional): Check how you can use messages{' '}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://indicative.adonisjs.com/docs/templating"
                >
                here.
                </a>
                <br />
                You can use options in the place of messages, we try to find all options inside the object, if found, we use in the hook.
            </li>
        </Fragment>
    );
}
