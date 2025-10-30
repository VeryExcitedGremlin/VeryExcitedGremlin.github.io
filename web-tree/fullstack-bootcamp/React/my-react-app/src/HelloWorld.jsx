// Inline Style
function HelloWorldInline({name}) {
    const inlineStyle = {
        color: 'blue',
        fontSize: '2rem',
        textAlign: 'center',
        margin: '20px 0'
    };
    return <h1 style={inlineStyle}>Hello {name ? name : 'World'}!</h1>;
}

export const HelloWorld = ({name}) => {
    return <h1>Hello {name ? name : 'World'}!</h1>;
}


export default HelloWorldInline;