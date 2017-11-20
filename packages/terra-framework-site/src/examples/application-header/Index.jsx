/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-application-header/docs/README.md';
import { version } from 'terra-application-header/package.json';

// Component Source
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import HeaderSrc from '!raw-loader!terra-application-header/src/ApplicationHeader.jsx';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */

// Example Files
import HeaderWireframe from './HeaderWireframe';

const NavigationExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props-header" src={HeaderSrc} componentName="Application Header" />
    <PropsTable id="props-logo" src={LogoSrc} componentName="Logo" />
    <PropsTable id="props-utility" src={UtilitySrc} componentName="Utility" />
    <h2 id="header-wireframe">Header Wireframe</h2>
    <HeaderWireframe />
  </div>
);

export default NavigationExamples;
