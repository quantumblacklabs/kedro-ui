import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'rsg-components/Styled';
import Heading from 'rsg-components/Heading';
import Link from 'rsg-components/Link';
import Para from 'rsg-components/Para';
import DefaultStyleGuideRenderer from 'react-styleguidist/lib/client/rsg-components/StyleGuide/StyleGuideRenderer';

const styles = () => ({
  section: {
    background: '#f7f7f9',
    border: '#ddd 1px solid',
    padding: '2em 3em',
    margin: '2em 0 4em'
  }
});

const P = (props) => <Para semantic='p' {...props} />;

export function StyleGuideRenderer({ children, classes, ...props }) {
  return (
    <DefaultStyleGuideRenderer {...props}>
      <section className={classes.section}>
        <Heading level={2}>Getting started with Kedro UI</Heading>
        <br/>
        <P>
          <Link href="https://www.npmjs.com/package/@quantumblack/kedro-ui"><img alt="npm version" src="https://badge.fury.io/js/%40quantumblack%2Fkedro-ui.svg" /></Link>
          &nbsp;&nbsp;
          <Link href="https://circleci.com/gh/quantumblacklabs/kedro-ui"><img alt="CircleCI build status" src="https://circleci.com/gh/quantumblacklabs/kedro-ui.svg?style=svg&circle-token=16d3f559b48b0890a5ee3adbc1d4be0e62f9637d" /></Link>
          &nbsp;&nbsp;
          <Link href="https://opensource.org/licenses/Apache-2.0"><img alt="License: Apache 2.0" src="https://img.shields.io/badge/license-Apache%202.0-blue.svg" /></Link>
        </P>
        <P>Kedro UI is a React component library for building web applications the <Link href="https://www.quantumblack.com">QuantumBlack</Link> way.</P>
        <P>Check out the <Link href="https://www.github.com/quantumblacklabs/kedro-ui">GitHub repo</Link> and <Link href="https://www.npmjs.com/package/@quantumblack/kedro-ui">npm package</Link> to get started.</P>
      </section>
      {children}
    </DefaultStyleGuideRenderer>
  );
}

StyleGuideRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node
};

export default Styled(styles)(StyleGuideRenderer);
