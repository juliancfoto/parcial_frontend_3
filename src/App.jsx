import { useState } from 'react';
import './App.css';
import Form from './components/form';
import Card from './components/Card';
import Error from './components/Error';

const App = () => {
  //Aqui deberias agregar los estados y los handlers para los inputs
  // Each input's state
  const [userName, setUserName] = useState("");
  const [animal, setAnimal] = useState("");

  // Input's event handler
  const onChangeUserName = (e) => setUserName(e.target.value);
  const onChangeAnimal = (e) => setAnimal(e.target.value);

  // Input's validations
  const validateUserName = (userName) => {
      const withoutSpaces = userName.trim();

      if (withoutSpaces.length >= 3) {
          return true;
      } else {
          return false;
      };
  };

  const validateAnimal = (animal) => {
      const withoutSpaces = animal.trim();

      if (withoutSpaces.length >= 6) {
          return true;
      } else {
          return false;
      }
  };

  const [isInputValid, setValidation] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  // Submit handler
  const onSubmitForm = (e) => {
      e.preventDefault();

      const isUserNameValid = validateUserName(userName);
      const isAnimalValid = validateAnimal(animal);

      if (!isUserNameValid || !isAnimalValid) {
          setErrorMessage("Por favor chequea que la información sea correcta.");
          setValidation(false);

      } else {
          // RENDERIZAR COMPONENTE CARDDDDD
          setValidation(true);
          setErrorMessage("");
      }
  };

  return (
    <div className="App">
      <section className="form">
        {/* <form onSubmit={onSubmitForm}>
            <input type="text" placeholder="Ingresa tu nombre" value={userName} onChange={onChangeUserName} />

            <input type="text" placeholder="¿Cuál es tu animal favorito?" value={animal} onChange={onChangeAnimal}/>

            <Button givenType="submit" content="Enviar"></Button>
        </form> */}

        <Form
        onSubmitForm={onSubmitForm}
        title="¡Elige un animal!"
        userName={userName}
        animal={animal}
        onChangeUserName={onChangeUserName}
        onChangeAnimal={onChangeAnimal}>
        </Form>

        <div className='advice'>
          <ul>
            <li><code>Tu nombre debe tener al menos 3 carácteres.</code></li>
            <li><code>El animal debe tener al menos 6 carácteres.</code></li>
          </ul>
        </div>

        {errorMessage && <Error message={"¡Por favor chequea que la información sea correcta!"}></Error>}
        {isInputValid && <Card userName={userName} animal={animal}></Card>}
      </section>
    </div>
  );
};

export default App;