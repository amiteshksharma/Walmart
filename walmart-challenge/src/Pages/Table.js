import React from 'react';
import TableData from '../Components/TableData';
import { Button } from 'react-bootstrap';
import '../Css/Table.css';

export default class Table extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }

        this.formatData = this.formatData.bind(this);
        this.formatDate = this.formatDate.bind(this);
    }

    formatDate(date) {
        const split = date.split(" ");
        return split[0] + ", " + split[1] + " " + split[2] + " " + split[3];
    }

    formatData(getIssue) {
        let temp = [];
        const date = new Date(getIssue.created_at);

        temp.push(getIssue.number);
        temp.push(getIssue.title);
        temp.push(getIssue.state);
        temp.push(getIssue.user.login);
        temp.push(this.formatDate(date.toString()));

        let expandRowData = [];
        expandRowData.push(getIssue.body);
        expandRowData.push(this.formatDate(new Date(getIssue.updated_at).toString()))
        expandRowData.push(getIssue.user.avatar_url);
        expandRowData.push(getIssue.url);
        expandRowData.push(getIssue.comments_url);

        temp.push(expandRowData);
        
        return temp;
    }

    componentDidMount() {
        const issues = this.props.data;
        let arr = [];

        for(let i in issues) {
            const getIssue = issues[i];
            arr.push(this.formatData(getIssue));
        }

        this.setState({ data: arr });
    }
    
    render() {
        return (
            <div className="table-page">
                <Button variant="primary" id="return-home-page" 
                    onClick={() => this.props.showTable(false)}>Return to Home Page</Button>
                <TableData data={this.state.data}/>
            </div>
        )
    }
}