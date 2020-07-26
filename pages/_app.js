import App from 'next/app';
import '../styles.css';

export default class NextApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (<Component {...pageProps} />);
  }
}
