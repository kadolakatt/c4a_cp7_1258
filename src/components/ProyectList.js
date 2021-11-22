import ProyectListItem from "./ProyectListItem";
import Paginator from "./Paginator";

function ProyectList(props) {

    const proyectos = props.proyectos;
    
    //Asignación de props a ProyectListItem de forma estática
    /*const listaProyectos = proyectos.map( p => 
            <ProyectListItem
                id={p.id}
                nombre={p.nombre}
                descripcion={p.descripcion}
                fecha={p.fecha}
                director={p.director}
                completado={p.completado}
            />);*/
    
    //Esto hace lo mismo que las lineas anteriores asignando props
    //pero con destructuración de objetos logramos que se desea dinámica y menos codigo.
    const listaProyectos = proyectos.map((p) =>  
        <ProyectListItem key={p.id} 
        completarProyecto={props.completarProyecto} 
        eliminarProyecto={props.eliminarProyecto} 
        {...p} 
    />);

    return (
        <div className="container-fluid" >
        <div className="card mt-5">
            <div className="card-body">
                <button id="btnRegistrarNov" className="btn btn-lg btn-success float-end">Registrar Novedad</button>
                <h3>Dashboard</h3>
                <h5 className="text-muted">Bienvenido al portal de MINTIC de Proyectos y Noticias</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit massa, placerat ac turpis vel, fringilla aliquet ex. Sed quis ante aliquet, venenatis turpis eget, ultricies lacus</p>
            </div>
        </div>
        <div className="list-group m-5">
            { listaProyectos }
        </div>
        <Paginator />
      </div>
    );
}

export default ProyectList;