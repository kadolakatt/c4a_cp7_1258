import ProyectStatus from "./ProyectStatus";

function ProyectListItem (props) {

    const onCompletarProyecto = function (e) {
      e.preventDefault();
      props.completarProyecto(props.id);
    }

    const onEliminarProyecto = function (e) {
      e.preventDefault();
      props.eliminarProyecto(props.id);
    }

    return (
        <a href="none" className="list-group-item list-group-item-action" aria-current="true">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{ props.nombre }</h5>
                <small>{ props.fecha }</small>
              </div>
              <ProyectStatus status={props.completado} />
              <p className="mb-1">{ props.descripcion }</p>
              <small>{ props.director }</small>
              <button className="btn btn-danger btn-sm float-end mx-lg-2"
                      onClick={ onEliminarProyecto }>Eliminar</button>
              <button className="btn btn-success btn-sm float-end mx-lg-1">Editar</button>
              <button className="btn btn-primary btn-sm float-end"
                      onClick={ onCompletarProyecto }>
                { props.completado ? "Reabrir" : "Completar" }
              </button>
            </a>
    );
}

export default ProyectListItem;