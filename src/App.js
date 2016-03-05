/* eslint-env es6 */
var React = require('react')
var Relay = require('react-relay')

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Employees</h2>
        <ul>
          {this.props.edges.map(edge =>
            <li key={edge.node.id}>{edge.node.name} (Global ID: {edge.node.id})</li>
          )}
        </ul>
      </div>
    )
  }
}

exports.Container = Relay.createContainer(App, {
  fragments: {
    allEmployees: () => Relay.QL`
      fragment on Employee {
        id
        name
      },
    `,
  },
})

exports.queries = {
  name: 'AppQueries',
  params: {},
  queries: {
    allEmployees: () => Relay.QL`query { allEmployees }`,
  },
}

