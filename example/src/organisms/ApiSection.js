import React from 'react';

import Divider from '../atoms/Divider';
import Section from '../atoms/Section';
import SectionDescription from '../atoms/SectionDescription';
import ApiUseValidate from '../molecules/ApiUseValidate';
import ApiUseValidateAll from '../molecules/ApiUseValidateAll';
import ApiUseStateValidator from '../molecules/ApiUseStateValidator';

export default function ApiSection() {
    return (
        <Section name="api" title="API & Examples">
            <SectionDescription>
                Validate a single state with some direct configurations, using the validate Indicative function:{' '}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://indicative.adonisjs.com/docs/api/validate"
                >
                    validate.
                </a>
                <br />
                The functions validate and validateAll are re exported from indicative.
            </SectionDescription>

            <ApiUseValidate />

            <Divider />

            <ApiUseValidateAll />

            <Divider />

            <ApiUseStateValidator />
        </Section>
    );
}
