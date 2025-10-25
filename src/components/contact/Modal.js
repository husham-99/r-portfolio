import './Modal.css'

export default function Modal({isVisible,errorMessage=null}){


    if (isVisible){
        return(

            <div className="modal">
                <div className="modal-content">
                    
                    <h1 style={{color: errorMessage ? "red" : "green" }}>{errorMessage !== null ? errorMessage : "The message has been submited successfully 😊😊"}</h1>
                </div>
            </div>
        )

    }else{
        return (<></>)
    }
    
};