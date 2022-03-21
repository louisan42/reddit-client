import React,{lazy,Suspense} from 'react';
import './App.css';
import { Col, Container, Row,Spinner } from 'react-bootstrap';

const NavBar = lazy(()=> import ('./features/NavBar/NavBar'));
const Subreddit = lazy(()=> import('./features/Subreddits/Subreddit'));
const Contents = lazy(()=> import('./features/contents/Contents'));



const style = { position: "fixed", top: "50%", left: "50%" };
function App() {

  const componentLoader =()=> <Spinner animation="border" role="status" style={style}>
  <span className="visually-hidden">Loading</span>
</Spinner>


  return (
    <Suspense fallback={componentLoader()}>
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
    </Suspense>
  );
}

export default App;
