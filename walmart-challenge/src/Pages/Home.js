import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { withStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField'; 
import '../Css/Home.css';

const styles = theme => ({
    textfield: {
        width: 'calc(40vw)',
        color: 'white',
        backgroundColor: 'white'
    },
  });

class Home extends React.Component {
    render() {
        const classes = this.props; 
        return (
            <div className="home-page">
                <section className="section-description">
                    <Container>
                        <Row>
                            <Col lg={{ span: 8, offset: 2 }} id="title">
                                Welcome to Github Issue Browser!
                            </Col>
                            <Col lg={{ span: 8, offset: 2 }} id="description">
                                Start by simply clicking 'default' or input a custom url.
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="section-input">
                    <TextField id="standard-basic" label="Enter github URL" className={classes.textfield} 
                        color="primary"
                    />
                </section>
            </div>
        )
    }
}

export default withStyles(styles)(Home);