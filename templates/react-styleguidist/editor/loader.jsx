import React, { Component } from 'react';
import EditorLoaderRenderer from '../../../node_modules/react-styleguidist/lib/rsg-components/Editor/EditorLoaderRenderer';

export default class EditorLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editor: null
    }
  }

  componentDidMount() {
    require.ensure(['./Editor'], require => {
      this.setState({
        editor: require('./Editor').default
      });
    });
  }

  render() {
    const Editor = this.state.editor;
    console.log(Editor);

    if (!Editor) {
      return <EditorLoaderRenderer />;
    }

    return <Editor {...this.props} />;
  }
}
