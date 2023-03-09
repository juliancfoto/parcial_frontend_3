//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario
const Card = ({userName, animal}) => {

  return (
    <div className="card">
      <h2>Hola {userName}!
      <br></br>Tu animal favorito es: {animal}</h2>
    </div>
  );
};

export default Card;