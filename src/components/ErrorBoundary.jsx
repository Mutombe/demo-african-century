import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('African Century error boundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[70vh] flex items-center justify-center px-6 bg-ivory-100">
          <div className="text-center max-w-md">
            <p className="kicker text-gold-500">An unexpected pause</p>
            <h1 className="mt-3 font-display text-4xl text-forest-800">
              Something didn't quite balance.
            </h1>
            <div className="rule-gold w-16 mx-auto my-6" />
            <p className="text-ink-400 text-sm leading-relaxed">
              Please refresh the page. If the issue persists, reach out directly
              and we will look into it.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                onClick={() => window.location.reload()}
                className="px-7 py-3 bg-forest-700 text-ivory-100 text-xs tracking-[0.2em] uppercase hover:bg-forest-800"
              >
                Refresh
              </button>
              <a
                href="/"
                className="px-7 py-3 border border-forest-700 text-forest-700 text-xs tracking-[0.2em] uppercase hover:bg-forest-700 hover:text-ivory-100 transition-colors"
              >
                Home
              </a>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
