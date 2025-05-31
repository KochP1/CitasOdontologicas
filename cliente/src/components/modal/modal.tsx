import './modal.css'

interface Params {
    modulo: string
}

export const Modal = ({modulo}: Params) => {
    return (
        <div 
            className="modal fade" 
            id={modulo} 
            tabIndex={-1 }
            aria-labelledby="exampleModalLabel" 
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Editar {modulo}</h1>
                        <button 
                            type="button" 
                            className="btn-close" 
                            data-bs-dismiss="modal" 
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        {/* Contenido del modal aquí */}
                    </div>
                </div>
            </div>
        </div>
    )
}