var Header = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Esther S. Weon Portfolio</h1>
        <h3>Renovated site coming soon.</h3>
      </div>
    )
  }
});

React.render(
  <Header />,
  document.getElementById('header')
);