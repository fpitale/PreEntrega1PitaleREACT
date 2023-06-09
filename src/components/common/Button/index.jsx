const Button= ({text, id, className, type, onClick}) => {
    return(
        <button id={id} className={className} type={type} onClick={onClick}>
            {text}
        </button>

    )
}

export {Button}