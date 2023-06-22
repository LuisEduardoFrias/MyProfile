import Ui from "../../3_controllers/helpers/ui.js";
 
export default function cp_menu() {
   const { Nav, Ul, Button } = Ui;
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