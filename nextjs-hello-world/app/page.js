export default function Home() {
  return (
    <main className="main">
      <div className="container">
        <h1 className="title">
          Hello World! 👋
        </h1>
        <p className="description">
          Welcome to <span className="highlight">Next.js</span>
        </p>
        <div className="grid">
          <div className="card">
            <h2>📚 Documentation</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </div>
          <div className="card">
            <h2>🚀 Learn</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </div>
          <div className="card">
            <h2>💡 Examples</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </div>
          <div className="card">
            <h2>⚡ Deploy</h2>
            <p>Instantly deploy your Next.js site to a shareable URL.</p>
          </div>
        </div>
      </div>
    </main>
  )
}