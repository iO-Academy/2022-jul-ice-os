const CloseButton = () => {

    const handleClose = () => {
        console.log("closed!");
    }

    return (
        <button onClick={handleClose} className={"closeButton"}>X</button>
    )
}

export default CloseButton