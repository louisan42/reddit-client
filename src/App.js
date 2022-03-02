import React from 'react';
import NavBar from './features/NavBar/NavBar';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import Subreddit from './features/Subreddits/Subreddit';
import Contents from './features/contents/Contents';

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Row className='gap-5'>
          <Col md={8} >
            <Contents />
          </Col>
          <Col>
            <Subreddit />
          </Col>

        </Row>

      </Container>
    </>
  );
}

export default App;
