import './Experiencia.css'

export function Experiencia() {
    return (
        <>
            <section className="container my-4">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2>Mi Experiencia</h2>
                        <hr />
                    </div>
                </div>
            </section>

            <section className="container my-4">
                <div className="row">
                    <div className="col-12">
                        <div className="progress" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar barra" style={{ width: '50%' }}>50%</div>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
            <section className="container my-4">
                <section className="row">
                    <div className="col-12 col-md-6 mt-5">
                        <div className="card-p3 shadow h-100">
                            <h2>Logica de Programación</h2>
                            <img src="../../../../src/assets/img/programacion js.jpg" alt="Programación JavaScript" className="img-fluid" />
                            <p>Variables, condicionales, ciclos.</p>
                            <div className="progress" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar barra" style={{ width: '60%' }}>60%</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-5">
                        <div className="card-p3 shadow h-100">
                            <h2>Base de datos</h2>
                            <img src="../../../../src/assets/img/base de datos.jpg" alt="Base de Datos" className="img-fluid" />
                            <p>Conceptos básicos, modelo entidad-relación, normalización, SQL.</p>
                            <div className="progress" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar barra" style={{ width: '30%' }}>30%</div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            <hr />

            <section className="container my-4">
                <section className="row">
                    <div className="col-12 col-md-6 mt-5">
                        <div className="card-p3 shadow h-100">
                            <h2>Maquetación HTML + CSS</h2>
                            <img src="../../../../src/assets/img/maquetacion.png" alt="Maquetación HTML + CSS" className="img-fluid" />
                            <p>Construcción de la estructura visual y funcional de una página web.</p>
                            <div className="progress" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar barra" style={{ width: '80%' }}>80%</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-5">
                        <div className="card-p3 shadow h-100">
                            <h2>Programación JS</h2>
                            <img src="../../../../src/assets/img/logica de programacion.jpg" alt="Programación JavaScript" className="img-fluid" />
                            <p>Agregar interactividad y lógica a una página web.</p>
                            <div className="progress" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar barra" style={{ width: '70%' }}>70%</div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <hr />
            <section className="container">
                <section className="row">
                    <div className="col-12 col-md-6 mt-5">
                        <div className="card-p3 shadow h-100">
                            <h2>Uso de git</h2>
                            <img src="../../../../src/assets/img/git foto.jpg" alt="Git" className="img-fluid" />
                            <p>Control de versiones para rastrear cambios en el código.</p>
                            <div className="progress" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar barra" style={{ width: '40%' }}>40%</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-4">
                        <div className="card-p3 shadow h-100">
                            <h2>React</h2>
                            <img src="../../../../src/assets/img/react.png" alt="React" className="img-fluid" />
                            <p>Construcción de interfaces de usuario interactivas con componentes reutilizables.</p>
                            <div className="progress" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar barra" style={{ width: '40%' }}>40%</div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}
