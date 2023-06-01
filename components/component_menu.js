import { Nav, Ul, Button } from '../js/tools.js'
 
export default function menu() {
    return Nav([
        Ul([
            Button("Habilidaded",".memu-btn-skill"),
            Button("Experiencia laboral",".menu-btn-experience"),
            Button("Educacion",".menu-btn-education"),
            Button("Proyectos persolanes",".menu-btn-proyect"),
            Button("Referencia",".menu-btn-reference"),
        ])
    ],".menu-container");
}