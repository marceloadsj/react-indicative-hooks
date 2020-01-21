import React from 'react';

import Section from '../atoms/Section';
import SectionDescription from '../atoms/SectionDescription';
import CodeBlock from '../atoms/CodeBlock';
import Divider from '../atoms/Divider';

export default function InstallSection() {
  return (
    <Section name="install" title="Installing">
      <SectionDescription>
        Check how you can install and use the library with validation integrated
        with{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://indicative.adonisjs.com"
        >
          Indicative
        </a>
      </SectionDescription>

      <CodeBlock>npm install react-indicative-hooks --save</CodeBlock>

      <CodeBlock>yarn add react-indicative-hooks</CodeBlock>

      <Divider />
    </Section>
  );
}
