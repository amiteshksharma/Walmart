import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import { withStyles } from '@material-ui/styles';
// import TextField from '@material-ui/core/TextField'; 
import '../Css/Home.css';

const DEFAULT_URL = 'https://api.github.com/repos/walmartlabs/thorax/issues';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            GithubURL: '',
            Error: false,
            IssuesList: []
        }

        this.getData = this.getData.bind(this);
    }

    getData(url) {
        let fetchUrl = url ? url : DEFAULT_URL;

        fetch(fetchUrl)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({ IssuesList: data});
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
                        <Form.Group controlId="exampleForm.ControlInput1" >
                            <Form.Control type="email" placeholder="Github Issues URL" id="form-github" 
                                onChange={(e) => this.setState({ GithubURL: e.target.value })}/>
                        </Form.Group>

                        <span>
                            <Button variant="primary" id="submit-button" 
                                onClick={() => this.getData(this.state.GithubURL)}>Submit</Button>

                            <Button variant="info" id="default-button" 
                                onClick={() => this.getData()}>Default</Button>
                        </span>
                    </Form>   
                </section>
            </div>
        )
    }
}

export default Home;