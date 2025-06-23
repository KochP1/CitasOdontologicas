import { useFetch } from '../../hooks/useFetch/useFetch';
import { type Paciente, type Profesional } from '../../components/models';

import './citas.css'

const urlDoctores = 'http://127.0.0.1:8000/doctores/crear_doctor/';
const urlPacientes = 'http://127.0.0.1:8000/pacientes/crear_paciente/';

interface HorarioSeleccionado {
    celdaId: string;
    dia: string | null;
    horaInicio: string | null;
    horaFin: string | null;
    color: string;
}

const horariosSeleccionados: HorarioSeleccionado[] = []

export const CrearCitaPage = () => {

    function getRandomColor() {
        const colors = ['#FFD700', '#98FB98', '#ADD8E6', '#FFB6C1', '#E6E6FA', '#FFA07A', '#90EE90', '#87CEFA', '#FFC0CB'];
        return colors[Math.floor(Math.random() * colors.length)];
    }


    const handleCellClick = (id: string) => {
        console.log(`Celda clickeada: ${id}`);
        const celda = document.getElementById(id);

        if (!celda) {
            return;
        }

        const color = getRandomColor();
        const dia = celda.getAttribute('data-dia');
        const horaInicio = celda.getAttribute('data-hora-inicio');
        const horaFin = celda.getAttribute('data-hora-fin');

        const existe = horariosSeleccionados.some(item => 
            item.celdaId === celda.id
        );

        if (!existe) {
            celda.style.backgroundColor = color;

            horariosSeleccionados.push({
                celdaId: celda.id,
                dia: dia,
                horaInicio: horaInicio,
                horaFin: horaFin,
                color: color
            });

        } else {
            celda.style.backgroundColor = '';

            const index = horariosSeleccionados.findIndex(item => 
                item.celdaId === celda.id
            );

            if (index !== -1) {
                horariosSeleccionados.splice(index, 1);
            }
        }
    };

    const { data: doctoresData, error: doctoresError} = useFetch<Profesional[]>(urlDoctores)
    const { data: pacientesData, error: pacientesError} = useFetch<Paciente[]>(urlPacientes)

    return (
        <>
            <div className='options-menu__container'>
                <h1>Crear cita</h1>
                <hr />
            </div>

            <div className='crear-cita__wrapper'>

                <form className='crear-cita__form'>

                        <div className='crear-cita__container'>

                            <div className="imagen-cita__container">
                                <img src="/images/cita-medica.png" alt="user" />
                            </div>

                            <div className='crear-cita__form-control'>
                                <label>Odontólogo</label>
                                <select>
                                    <option value="">Selecciona un odontólogo</option>
                                    {doctoresData !== null && !doctoresError && doctoresData.map((doctor) => (
                                        <option value={doctor.id}>{doctor.nombre} {doctor.apellido}</option>
                                    ))}
                                </select>
                            </div>

                            <div className='crear-cita__form-control'>
                                <label>Paciente</label>
                                <select>
                                    <option value="">Selecciona un paciente</option>
                                    {pacientesData !== null && !pacientesError && pacientesData.map((paciente) => (
                                        <option value={paciente.id}>{paciente.nombre} {paciente.apellido}</option>
                                    ))}
                                </select>
                            </div>

                            <button type='submit' className='btn btn-primary btn-crear-cita'>Crear</button>
                        </div>

                        <div className="table-responsive horario__container crear-horario" id="horario__container">
                            <table className="table table-bordered border-dark table-horario" id="tabla-horario">
                                <thead>
                                    <tr>
                                    <th>Hora</th>
                                    <th>Lunes</th>
                                    <th>Martes</th>
                                    <th>Miércoles</th>
                                    <th>Jueves</th>
                                    <th>Viernes</th>
                                    <th>Sábado</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {/* Fila 8:00-9:00 am */}
                                    <tr>
                                        <td className="hora-td">8:00-9:00 am</td>
                                        <td 
                                            data-dia="Lunes" 
                                            data-hora-inicio="08:00:00" 
                                            data-hora-fin="09:00:00" 
                                            id="columna-lunes-8-9"
                                            onClick={() => handleCellClick('columna-lunes-8-9')}
                                        ></td>
                                        <td 
                                            data-dia="Martes" 
                                            data-hora-inicio="08:00:00" 
                                            data-hora-fin="09:00:00" 
                                            id="columna-martes-8-9"
                                            onClick={() => handleCellClick('columna-martes-8-9')}
                                        ></td>
                                        <td 
                                            data-dia="Miércoles" 
                                            data-hora-inicio="08:00:00" 
                                            data-hora-fin="09:00:00" 
                                            id="columna-miércoles-8-9"
                                            onClick={() => handleCellClick('columna-miércoles-8-9')}
                                        ></td>
                                        <td 
                                            data-dia="Jueves" 
                                            data-hora-inicio="08:00:00" 
                                            data-hora-fin="09:00:00" 
                                            id="columna-jueves-8-9"
                                            onClick={() => handleCellClick('columna-jueves-8-9')}
                                        ></td>
                                        <td 
                                            data-dia="Viernes" 
                                            data-hora-inicio="08:00:00" 
                                            data-hora-fin="09:00:00" 
                                            id="columna-viernes-8-9"
                                            onClick={() => handleCellClick('columna-viernes-8-9')}
                                        ></td>
                                        <td 
                                            data-dia="Sábado" 
                                            data-hora-inicio="08:00:00" 
                                            data-hora-fin="09:00:00" 
                                            id="columna-sabado-8-9"
                                            onClick={() => handleCellClick('columna-sabado-8-9')}
                                        ></td>
                                    </tr>

                                    {/* Fila 9:00-10:00 am */}
                                    <tr>
                                        <td className="hora-td">9:00-10:00 am</td>
                                        <td 
                                            data-dia="Lunes" 
                                            data-hora-inicio="09:00:00" 
                                            data-hora-fin="10:00:00" 
                                            id="columna-lunes-9-10"
                                            onClick={() => handleCellClick('columna-lunes-9-10')}
                                        ></td>
                                        <td 
                                            data-dia="Martes" 
                                            data-hora-inicio="09:00:00" 
                                            data-hora-fin="10:00:00" 
                                            id="columna-martes-9-10"
                                            onClick={() => handleCellClick('columna-martes-9-10')}
                                        ></td>
                                        <td 
                                            data-dia="Miércoles" 
                                            data-hora-inicio="09:00:00" 
                                            data-hora-fin="10:00:00" 
                                            id="columna-miercoles-9-10"
                                            onClick={() => handleCellClick('columna-miercoles-9-10')}
                                        ></td>
                                        <td 
                                            data-dia="Jueves" 
                                            data-hora-inicio="09:00:00" 
                                            data-hora-fin="10:00:00" 
                                            id="columna-jueves-9-10"
                                            onClick={() => handleCellClick('columna-jueves-9-10')}
                                        ></td>
                                        <td 
                                            data-dia="Viernes" 
                                            data-hora-inicio="09:00:00" 
                                            data-hora-fin="10:00:00" 
                                            id="columna-viernes-9-10"
                                            onClick={() => handleCellClick('columna-viernes-9-10')}
                                        ></td>
                                        <td 
                                            data-dia="Sábado" 
                                            data-hora-inicio="09:00:00" 
                                            data-hora-fin="10:00:00" 
                                            id="columna-sabado-9-10"
                                            onClick={() => handleCellClick('columna-sabado-9-10')}
                                        ></td>
                                    </tr>

                                    {/* Fila 10:00-11:00 am */}
                                    <tr>
                                        <td className="hora-td">10:00-11:00 am</td>
                                        <td 
                                            data-dia="Lunes" 
                                            data-hora-inicio="10:00:00" 
                                            data-hora-fin="11:00:00" 
                                            id="columna-lunes-10-11"
                                            onClick={() => handleCellClick('columna-lunes-10-11')}
                                        ></td>
                                        <td 
                                            data-dia="Martes" 
                                            data-hora-inicio="10:00:00" 
                                            data-hora-fin="11:00:00" 
                                            id="columna-martes-10-11"
                                            onClick={() => handleCellClick('columna-martes-10-11')}
                                        ></td>
                                        <td 
                                            data-dia="Miércoles" 
                                            data-hora-inicio="10:00:00" 
                                            data-hora-fin="11:00:00" 
                                            id="columna-miercoles-10-11"
                                            onClick={() => handleCellClick('columna-miercoles-10-11')}
                                        ></td>
                                        <td 
                                            data-dia="Jueves" 
                                            data-hora-inicio="10:00:00" 
                                            data-hora-fin="11:00:00" 
                                            id="columna-jueves-10-11"
                                            onClick={() => handleCellClick('columna-jueves-10-11')}
                                        ></td>
                                        <td 
                                            data-dia="Viernes" 
                                            data-hora-inicio="10:00:00" 
                                            data-hora-fin="11:00:00" 
                                            id="columna-viernes-10-11"
                                            onClick={() => handleCellClick('columna-viernes-10-11')}
                                        ></td>
                                        <td 
                                            data-dia="Sábado" 
                                            data-hora-inicio="10:00:00" 
                                            data-hora-fin="11:00:00" 
                                            id="columna-sabado-10-11"
                                            onClick={() => handleCellClick('columna-sabado-10-11')}
                                        ></td>
                                    </tr>

                                    {/* Fila 11:00-12:00 am */}
                                    <tr>
                                        <td className="hora-td">11:00-12:00 am</td>
                                        <td 
                                            data-dia="Lunes" 
                                            data-hora-inicio="11:00:00" 
                                            data-hora-fin="12:00:00" 
                                            id="columna-lunes-11-12"
                                            onClick={() => handleCellClick('columna-lunes-11-12')}
                                        ></td>
                                        <td 
                                            data-dia="Martes" 
                                            data-hora-inicio="11:00:00" 
                                            data-hora-fin="12:00:00" 
                                            id="columna-martes-11-12"
                                            onClick={() => handleCellClick('columna-martes-11-12')}
                                        ></td>
                                        <td 
                                            data-dia="Miércoles" 
                                            data-hora-inicio="11:00:00" 
                                            data-hora-fin="12:00:00" 
                                            id="columna-miercoles-11-12"
                                            onClick={() => handleCellClick('columna-miercoles-11-12')}
                                        ></td>
                                        <td 
                                            data-dia="Jueves" 
                                            data-hora-inicio="11:00:00" 
                                            data-hora-fin="12:00:00" 
                                            id="columna-jueves-11-12"
                                            onClick={() => handleCellClick('columna-jueves-11-12')}
                                        ></td>
                                        <td 
                                            data-dia="Viernes" 
                                            data-hora-inicio="11:00:00" 
                                            data-hora-fin="12:00:00" 
                                            id="columna-viernes-11-12"
                                            onClick={() => handleCellClick('columna-viernes-11-12')}
                                        ></td>
                                        <td 
                                            data-dia="Sábado" 
                                            data-hora-inicio="11:00:00" 
                                            data-hora-fin="12:00:00" 
                                            id="columna-sabado-11-12"
                                            onClick={() => handleCellClick('columna-sabado-11-12')}
                                        ></td>
                                    </tr>

                                    {/* Fila 12:00-01:00 pm */}
                                    <tr>
                                        <td className="hora-td">12:00-01:00 pm</td>
                                        <td 
                                            data-dia="Lunes" 
                                            data-hora-inicio="12:00:00" 
                                            data-hora-fin="13:00:00" 
                                            id="columna-lunes-12-1"
                                            onClick={() => handleCellClick('columna-lunes-12-1')}
                                        ></td>
                                        <td 
                                            data-dia="Martes" 
                                            data-hora-inicio="12:00:00" 
                                            data-hora-fin="13:00:00" 
                                            id="columna-martes-12-1"
                                            onClick={() => handleCellClick('columna-martes-12-1')}
                                        ></td>
                                        <td 
                                            data-dia="Miércoles" 
                                            data-hora-inicio="12:00:00" 
                                            data-hora-fin="13:00:00" 
                                            id="columna-miercoles-12-1"
                                            onClick={() => handleCellClick('columna-miercoles-12-1')}
                                        ></td>
                                        <td 
                                            data-dia="Jueves" 
                                            data-hora-inicio="12:00:00" 
                                            data-hora-fin="13:00:00" 
                                            id="columna-jueves-12-1"
                                            onClick={() => handleCellClick('columna-jueves-12-1')}
                                        ></td>
                                        <td 
                                            data-dia="Viernes" 
                                            data-hora-inicio="12:00:00" 
                                            data-hora-fin="13:00:00" 
                                            id="columna-viernes-12-1"
                                            onClick={() => handleCellClick('columna-viernes-12-1')}
                                        ></td>
                                        <td 
                                            data-dia="Sábado" 
                                            data-hora-inicio="12:00:00" 
                                            data-hora-fin="13:00:00" 
                                            id="columna-sabado-12-1"
                                            onClick={() => handleCellClick('columna-sabado-12-1')}
                                        ></td>
                                    </tr>

                                    {/* Fila 01:00-02:00 pm */}
                                    <tr>
                                        <td className="hora-td">01:00-02:00 pm</td>
                                        <td 
                                            data-dia="Lunes" 
                                            data-hora-inicio="13:00:00" 
                                            data-hora-fin="14:00:00" 
                                            id="columna-lunes-1-2"
                                            onClick={() => handleCellClick('columna-lunes-1-2')}
                                        ></td>
                                        <td 
                                            data-dia="Martes" 
                                            data-hora-inicio="13:00:00" 
                                            data-hora-fin="14:00:00" 
                                            id="columna-martes-1-2"
                                            onClick={() => handleCellClick('columna-martes-1-2')}
                                        ></td>
                                        <td 
                                            data-dia="Miércoles" 
                                            data-hora-inicio="13:00:00" 
                                            data-hora-fin="14:00:00" 
                                            id="columna-miercoles-1-2"
                                            onClick={() => handleCellClick('columna-miercoles-1-2')}
                                        ></td>
                                        <td 
                                            data-dia="Jueves" 
                                            data-hora-inicio="13:00:00" 
                                            data-hora-fin="14:00:00" 
                                            id="columna-jueves-1-2"
                                            onClick={() => handleCellClick('columna-jueves-1-2')}
                                        ></td>
                                        <td 
                                            data-dia="Viernes" 
                                            data-hora-inicio="13:00:00" 
                                            data-hora-fin="14:00:00" 
                                            id="columna-viernes-1-2"
                                            onClick={() => handleCellClick('columna-viernes-1-2')}
                                        ></td>
                                        <td 
                                            data-dia="Sábado" 
                                            data-hora-inicio="13:00:00" 
                                            data-hora-fin="14:00:00" 
                                            id="columna-sabado-1-2"
                                            onClick={() => handleCellClick('columna-sabado-1-2')}
                                        ></td>
                                    </tr>

                                    {/* Fila 02:00-03:00 pm */}
                                    <tr>
                                        <td className="hora-td">02:00-03:00 pm</td>
                                        <td 
                                            data-dia="Lunes" 
                                            data-hora-inicio="14:00:00" 
                                            data-hora-fin="15:00:00" 
                                            id="columna-lunes-2-3"
                                            onClick={() => handleCellClick('columna-lunes-2-3')}
                                        ></td>
                                        <td 
                                            data-dia="Martes" 
                                            data-hora-inicio="14:00:00" 
                                            data-hora-fin="15:00:00" 
                                            id="columna-martes-2-3"
                                            onClick={() => handleCellClick('columna-martes-2-3')}
                                        ></td>
                                        <td 
                                            data-dia="Miércoles" 
                                            data-hora-inicio="14:00:00" 
                                            data-hora-fin="15:00:00" 
                                            id="columna-miercoles-2-3"
                                            onClick={() => handleCellClick('columna-miercoles-2-3')}
                                        ></td>
                                        <td 
                                            data-dia="Jueves" 
                                            data-hora-inicio="14:00:00" 
                                            data-hora-fin="15:00:00" 
                                            id="columna-jueves-2-3"
                                            onClick={() => handleCellClick('columna-jueves-2-3')}
                                        ></td>
                                        <td 
                                            data-dia="Viernes" 
                                            data-hora-inicio="14:00:00" 
                                            data-hora-fin="15:00:00" 
                                            id="columna-viernes-2-3"
                                            onClick={() => handleCellClick('columna-viernes-2-3')}
                                        ></td>
                                        <td 
                                            data-dia="Sábado" 
                                            data-hora-inicio="14:00:00" 
                                            data-hora-fin="15:00:00" 
                                            id="columna-sabado-2-3"
                                            onClick={() => handleCellClick('columna-sabado-2-3')}
                                        ></td>
                                    </tr>

                                    {/* Fila 03:00-04:00 pm */}
                                    <tr>
                                        <td className="hora-td">03:00-04:00 pm</td>
                                        <td 
                                            data-dia="Lunes" 
                                            data-hora-inicio="15:00:00" 
                                            data-hora-fin="16:00:00" 
                                            id="columna-lunes-3-4"
                                            onClick={() => handleCellClick('columna-lunes-3-4')}
                                        ></td>
                                        <td 
                                            data-dia="Martes" 
                                            data-hora-inicio="15:00:00" 
                                            data-hora-fin="16:00:00" 
                                            id="columna-martes-3-4"
                                            onClick={() => handleCellClick('columna-martes-3-4')}
                                        ></td>
                                        <td 
                                            data-dia="Miércoles" 
                                            data-hora-inicio="15:00:00" 
                                            data-hora-fin="16:00:00" 
                                            id="columna-miercoles-3-4"
                                            onClick={() => handleCellClick('columna-miercoles-3-4')}
                                        ></td>
                                        <td 
                                            data-dia="Jueves" 
                                            data-hora-inicio="15:00:00" 
                                            data-hora-fin="16:00:00" 
                                            id="columna-jueves-3-4"
                                            onClick={() => handleCellClick('columna-jueves-3-4')}
                                        ></td>
                                        <td 
                                            data-dia="Viernes" 
                                            data-hora-inicio="15:00:00" 
                                            data-hora-fin="16:00:00" 
                                            id="columna-viernes-3-4"
                                            onClick={() => handleCellClick('columna-viernes-3-4')}
                                        ></td>
                                        <td 
                                            data-dia="Sábado" 
                                            data-hora-inicio="15:00:00" 
                                            data-hora-fin="16:00:00" 
                                            id="columna-sabado-3-4"
                                            onClick={() => handleCellClick('columna-sabado-3-4')}
                                        ></td>
                                    </tr>

                                    {/* Fila 04:00-05:00 pm */}
                                    <tr>
                                        <td className="hora-td">04:00-05:00 pm</td>
                                        <td 
                                            data-dia="Lunes" 
                                            data-hora-inicio="16:00:00" 
                                            data-hora-fin="17:00:00" 
                                            id="columna-lunes-4-5"
                                            onClick={() => handleCellClick('columna-lunes-4-5')}
                                        ></td>
                                        <td 
                                            data-dia="Martes" 
                                            data-hora-inicio="16:00:00" 
                                            data-hora-fin="17:00:00" 
                                            id="columna-martes-4-5"
                                            onClick={() => handleCellClick('columna-martes-4-5')}
                                        ></td>
                                        <td 
                                            data-dia="Miércoles" 
                                            data-hora-inicio="16:00:00" 
                                            data-hora-fin="17:00:00" 
                                            id="columna-miercoles-4-5"
                                            onClick={() => handleCellClick('columna-miercoles-4-5')}
                                        ></td>
                                        <td 
                                            data-dia="Jueves" 
                                            data-hora-inicio="16:00:00" 
                                            data-hora-fin="17:00:00" 
                                            id="columna-jueves-4-5"
                                            onClick={() => handleCellClick('columna-jueves-4-5')}
                                        ></td>
                                        <td 
                                            data-dia="Viernes" 
                                            data-hora-inicio="16:00:00" 
                                            data-hora-fin="17:00:00" 
                                            id="columna-viernes-4-5"
                                            onClick={() => handleCellClick('columna-viernes-4-5')}
                                        ></td>
                                        <td 
                                            data-dia="Sábado" 
                                            data-hora-inicio="16:00:00" 
                                            data-hora-fin="17:00:00" 
                                            id="columna-sabado-4-5"
                                            onClick={() => handleCellClick('columna-sabado-4-5')}
                                        ></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                </form>
            </div>
        </>
    )
}