/** @jsxImportSource @emotion/react */
import SimpleInput from './components/SimpleInput';
import { card, center } from './styles/app-style';

function App() {
  return (
    <div css={[card, center]}>
      <h2>Form</h2>
      <SimpleInput />
    </div>
  );
}

export default App;
