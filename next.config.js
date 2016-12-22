module.exports = {
  webpack: (cfg, { dev }) => {
    // cfg.module.rules.push({ test: /\.md$/, loader: 'raw-loader' });
    cfg.module.loaders.push({ test: /\.md$/, loader: 'raw-loader' });
    return cfg;
  }
}
