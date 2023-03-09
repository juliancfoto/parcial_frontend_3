const Button = ({givenType, content}) => {
    return (
        <button type={givenType}>
            {content}
        </button>
    );
};

export default Button;