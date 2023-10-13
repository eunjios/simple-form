/** @jsxImportSource @emotion/react */
import Form from './components/Form';
// import SimpleInput from './components/SimpleInput';
import { card, center } from './styles/app-style';

function App() {
  return (
    <div css={[card, center]}>
      <h2>Form</h2>
      <Form />
    </div>
  );
}

export default App;
