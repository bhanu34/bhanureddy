{/* Top Hero Section: Name, Tagline & Mascot */}
<Hero type="index">
  <div
    className="hero-wrapper"
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '2rem',
    }}
  >
    <div style={{ flex: '1 1 auto' }}>
      <h1 className="flex-align-center gap" style={{ margin: 0 }}>
        Bhanu Pratap Reddy
      </h1>
      <p className="hero-description hero-tagline" style={{ marginTop: '0.5rem' }}>
        Computational Physicist
      </p>
    </div>

    <div
      className="hero-image-container"
      style={{ flex: '0 0 auto', textAlign: 'center' }}
    >
      <img
        src={mascot}
        className="hero-image"
        alt="Thermal Owl Mascot"
        width="180"
        height="180"
      />
      <aside className="hero-bubble">
        Curious about my career journey?{' '}
        <Link to="/resume">Explore my experience &rarr;</Link>
      </aside>
    </div>
  </div>
</Hero>
