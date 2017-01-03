import React from 'react'
import ReactGA from 'react-ga'
import Head from 'next/head'

import containerStyle from '../components/containerStyle';

export default class Wrapper extends React.Component {
  componentDidMount() {
    ReactGA.initialize('UA-62704802-1');
  }

  render() {
    const { chrome } = this.props;

    return (
      <div>
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="building the best software i know how. we who cut mere stones must always be envisioning cathedrals" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <title>Joel Burget</title>
        </Head>
        <div>
          <div className="host">
            {this.props.children}
          </div>
          {containerStyle}
        </div>
      </div>
    );
  }
}
