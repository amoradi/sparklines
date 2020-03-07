import Head from "next/head";
import { DefaultLine, Master } from "../components";

const Home = () => (
  <div className="container">
    <Head>
      <title>scintilla</title>
      {/*<link rel="icon" href="/favicon.ico" />*/}
    </Head>

    <main>
      <div className="grid">
        <div className="card primo">
          <h1 className="title">Scintilla</h1>
          <p className="description">A React sparklines component</p>

          <a href="/documentation" className="description">
            <h3>documentation</h3>
          </a>
        </div>
        {/* <Master /> */}
        {Master().map(([Example, codeString]) => {
          return (
            <div className="card">
              <DefaultLine codeString={codeString} Example={Example} />
            </div>
          );
        })}
      </div>
    </main>

    <footer>
      {/* <a
        href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by <img src="/zeit.svg" alt="ZEIT Logo" />
      </a> */}
      <a href="/documentation">
        <h3>documentation</h3>
      </a>
    </footer>

    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        padding: 0 0 5rem;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      footer {
        padding-bottom: 100px;
        width: 100%;
        height: 100px;
        //border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        margin: 100px 0 0;
        line-height: 1.15;
        font-size: 3rem;
        // text-transform: uppercase;
        // height: 150px;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        line-height: 1.5;
        font-size: 0.9rem;
      }

      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 100vw;
        margin-top: 3rem;
      }

      .grid > *,
      .card {
        min-width: 320px;
        max-width: 380px;
        margin: 1rem;
        flex-basis: 25%;
        padding: 1.5rem;
        align-self: flex-start;
      }

      .card pre {
        height: 240px;
        overflow-y: scroll;
      }

      .card.primo {
        align-self: center;
        color: #444;
        text-transform: lowercase;
      }

      h3 {
        font-weight: normal;
        margin-top: 60px;
        text-decoration: underline;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        background-color: #fffaf0;
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
);

export default Home;
