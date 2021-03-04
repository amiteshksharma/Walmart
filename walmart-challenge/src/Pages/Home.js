import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import '../Css/Home.css';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const DEFAULT_URL = 'https://api.github.com/repos/walmartlabs/thorax/issues';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            GithubURL: '',
            Error: false,
            ErrorMessage: ''
        }

        this.getData = this.getData.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose(event, reason) {
        if (reason === 'clickaway') return;
      
        this.setState({ Error: false }); 
    }

    getData(url, isDefault) {
        let fetchUrl = !isDefault ? url : DEFAULT_URL;
        if(isDefault) {
            this.setState({ GithubURL: DEFAULT_URL });
        }

        if(!isDefault && !url.includes('https://api.github.com/repos')) {
            this.setState({
                Error: true,
                ErrorMessage: "Invalid Input. Please Input a valid URL or click 'Default'"
            });

            return;
        }

        fetch(fetchUrl)
        .then(res => res.json())
        .then(data => {
            this.props.setIssues(data);
            this.props.showTable(true);
        })
        .catch(err => {
            this.setState({ Error: true });
            console.log(err);
        })

    }


    render() { 
        return (
            <div className="home-page">
                <section className="section-description">
                    <Container>
                        <Row>
                            <Col lg={{ span: 8, offset: 2 }} id="title">
                                Welcome to Github Issue Browser!
                            </Col>
                            <Col lg={{ span: 8, offset: 2 }} id="description">
                                Start by simply clicking 'default' or input a custom Github url.
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="section-input">
                    <Form>    
                        <Form.Group>
                            <Form.Control type="email" placeholder="Github API Issues URL" id="form-github" 
                                onChange={(e) => this.setState({ GithubURL: e.target.value })} />
                        </Form.Group>

                        <span>
                            <Button variant="primary" id="submit-button" 
                                onClick={() => this.getData(this.state.GithubURL, false)}>Submit</Button>

                            <Button variant="info" id="default-button" 
                                onClick={() => this.getData(null, true)}>Default</Button>
                        </span>
                    </Form>   
                </section>

                <Snackbar open={this.state.Error} autoHideDuration={6000} 
                    onClose={(e) => this.handleClose()}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                    <Alert onClose={(e) => this.handleClose()} severity="error">
                        {this.state.ErrorMessage}
                    </Alert>
                </Snackbar>
            </div>
        )
    }
}

export default Home;