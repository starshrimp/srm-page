import * as React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

export const App: React.FC = () => (
  <Container>
    <Jumbotron fluid className="mt-5">
      <Container>
        <h1>SRM Page</h1>
        <p>My cool web page</p>
      </Container>
    </Jumbotron>
  </Container>
);

export default App;
