import React from 'react';
import { connect } from 'react-redux';
import { getGraph } from '../actions/actions.js';

let defaultQueryText = `query
{allEmployees {
  edges {
    node {
      id
      name
      hiredOn
      department {
        id
        name
      }
    }
  }
  pageInfo {
    hasPreviousPage
    startCursor
    endCursor
    hasNextPage
  }
}}`;

let Query = React.createClass({
  componentDidMount() {
    this.props.dispatch(
      getGraph(defaultQueryText)
    );
  },
  render() {
    let dispatch = this.props.dispatch;
    let fetchInProgress = String(this.props.store.get('fetching'));
    let queryText;
    let data = this.props.store.get('data').toObject();
    var employees = "";

    if (data.allEmployees !== undefined) {
      employees = data.allEmployees.edges.map(edge =>
        <li key={edge.node.id}>{edge.node.name} (Global ID: {edge.node.id})
           <div>
             Department: {edge.node.department.name}
           </div>
        </li>
      )
    }
    
    return (
      <div>
        <textarea rows={20} cols={40} defaultValue={defaultQueryText} ref={node => {queryText = node}}></textarea>
        <button onClick={() => {
          dispatch(getGraph(queryText.value))}
        }>
          query
        </button>

        <p>Fetch in progress: {fetchInProgress}</p>

        <ul>
          {employees}
        </ul>
      </div>
    )
  }
});

const mapStateToProps = (state) => {
  return {
    store: state
  }
};
export const QueryContainer = connect(
 mapStateToProps
)(Query);


