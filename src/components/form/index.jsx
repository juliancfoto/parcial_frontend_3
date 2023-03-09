import Button from "../Button";

const Form = ({onSubmitForm, title, userName, animal, onChangeUserName, onChangeAnimal}) => {

    return (
        <form onSubmit={onSubmitForm}>
            <h1>{title}</h1>
            <input type="text" placeholder="Ingresa tu nombre" value={userName} onChange={onChangeUserName} />

            <input
            type="text"
            placeholder="¿Cuál es tu animal favorito?"
            value={animal}
            onChange={onChangeAnimal}/>

            <Button givenType="submit" content="Enviar" />
        </form>
    );
};

export default Form;