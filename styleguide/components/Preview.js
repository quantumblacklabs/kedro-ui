import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'rsg-components/Styled';
import DefaultPreview from 'react-styleguidist/lib/client/rsg-components/Preview/Preview';

const THEMES = ['light', 'dark'];
const BACKGROUND_COLOR = {
  light: '#f7f7f7',
  dark: '#1d2f3a'
};
const BORDER_COLOR = {
  light: '#ddd',
  dark: '#000'
};
const COLOR = {
  light: 'black',
  dark: 'white'
};

const styles = ({ fontFamily }) => ({
  previewBg: {
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 40
  },
  themeButtonWrapper: {
    position: 'relative'
  },
  themeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    background: 'none',
    padding: '5px 7px',
    fontSize: 13,
    fontFamily: fontFamily.base,
    border: 'none',
    boxShadow: 'none',
    cursor: 'pointer'
  }
});

export class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: THEMES[0]
    };
  }

  toggleTheme() {
    this.setState({
      theme: this.state.theme === THEMES[0] ? THEMES[1] : THEMES[0]
    });
  }

  render() {
    const { code, classes, children } = this.props;
    const { theme } = this.state;
    const themedCode = code.replace(/theme='light'/g, `theme='${theme}'`);

    return (
      <div>
        <div className={classes.themeButtonWrapper}>
          <button
            className={classes.themeButton}
            onClick={this.toggleTheme.bind(this)}
            style={{ color: COLOR[theme] }}>
            { theme.toUpperCase() }
          </button>
        </div>
        <div
          className={classes.previewBg}
          style={{
            background: BACKGROUND_COLOR[theme],
            borderColor: BORDER_COLOR[theme]
          }}>
          <DefaultPreview {...this.props} code={themedCode}>
            {children}
          </DefaultPreview>
        </div>
      </div>
    )
  }
}

Preview.propTypes = {
  classes: PropTypes.object.isRequired,
  code: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default Styled(styles)(Preview);
