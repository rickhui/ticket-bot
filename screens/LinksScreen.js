import React from 'react';
import { WebView, StyleSheet } from 'react-native';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  state = {
    url: 'https://www.cityline.com/Events.do',
  };

  componentDidMount(props) {
    this.setState({ url: this.props.navigation.getParam('url') });
  }

  componentDidUpdate(prevProps) {
    if (this.props.navigation.getParam('url') !== prevProps.getParam('url')) {
      this.state.setState({ url: this.props.navigation.getParam('url') });
    }
  }

  render() {
    return (
      <WebView
        source={{
          uri: this.state.url,
        }}
        style={{
          marginTop: 10,
          marginBottom: 10,
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
