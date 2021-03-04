import React from 'react';
import Home from './Pages/Home';
import Table from './Pages/Table';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      IssuesList: [],
      isTable: false
    }

    this.setIssuesList = this.setIssuesList.bind(this);
    this.setIsTable = this.setIsTable.bind(this);
    this.renderHome = this.renderHome.bind(this);
    this.renderTable = this.renderTable.bind(this);
  }

  setIssuesList(issuesList) {
    this.setState({ IssuesList: issuesList})
  }

  setIsTable(show) {
    this.setState({ isTable: show });
  }

  renderHome() {
    return <Home setIssues={this.setIssuesList} showTable={this.setIsTable} />
  }

  renderTable() {
    return <Table data={this.state.IssuesList} showTable={this.setIsTable}/>
  }
  
  render() {
    return (
      <div>
        { !this.state.isTable ? this.renderHome() : this.renderTable() }
      </div>
    )
  }
}

export default App;
