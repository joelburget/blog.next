import React from 'react';
import ReactGA from 'react-ga';
import Head from 'next/head';
import Link from 'next/link';
import remark from 'remark';
import reactRenderer from 'remark-react';

// next/link throws if passed multiple children...
function MyLink({ children, href, as }) {
  let validChildren = children;
  if (Array.isArray(children) && children.length == 1) {
    validChildren = children[0];
  }
  const props = {children: validChildren, href, as};
  return <Link {...props} />;
}

const remarkOpts = {
  remarkReactComponents: {
    a: MyLink,
  },
};

export default class Wrapper extends React.Component {
  componentDidMount() {
    ReactGA.initialize('UA-62704802-1');
  }

  render() {
    const { children: content } = this.props;

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
            <nav>
              <ul>
                <li><Link href="/">joelburget.com</Link></li>
                <li style={{margin: '0 2em 0 1em'}}>(<Link href="https://github.com/joelburget/blog.next">src</Link>)</li>
                <li><Link href="/posts">/posts</Link></li>
              </ul>
            </nav>
            {remark().use(reactRenderer, remarkOpts).processSync(content).contents}
          </div>
          <style jsx global>{`
        .host {
          margin: 0 auto;
          padding: 40px 20px;
          line-height: 2;
          max-width: 900px;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera San;
          text-rendering: geometricPrecision;
        }
        nav {
          margin-bottom: 80px;
          font-size: 14px;
        }

        nav ul {
          display: flex;
          padding: 0; /* remove left padding */
        }

        nav li {
          list-style-type: none;
        }

        h1, h2, h3 {
          font-weight: 700;
          color: #000;
        }
        h1 {
          font-size: 16px;
        }
        h2 {
          font-size: 14px;
        }
        h3 {
          font-size: 13px;
        }
        h1::before {
          content: '# ';
          color: rgba(0, 0, 0, 0.5);

        }
        h2::before {
          content: '## ';
          color: rgba(0, 0, 0, 0.5);
        }
        h3::before {
          content: '### ';
          color: rgba(0, 0, 0, 0.5);
        }
        p {
          padding-bottom: 2em;
        }
        p, li {
          color: #424242;
          font-size: 13px;
          line-height: 22px;
        }

        em::before, em::after {
          content: '/';
          color: rgba(0, 0, 0, 0.5);
        }

        strong::before, strong::after {
          content: '*';
          color: rgba(0, 0, 0, 0.5);
        }

        li > p {
        }

        /* not sure if a good idea / used? */
        u::before, u::after {
          content: '_';
          color: rgba(0, 0, 0, 0.5);
        }
        /*
        li {
          fontSize: 13px;
        }
        */
          `}</style>
        </div>
      </div>
    );
  }
}
