import Ui from "../../3_controllers/helpers/ui.js";

import cp_skill from "../components/component_skill.js";
import cp_experience from "../components/component_experience.js";
import cp_proyect from "../components/component_proyect.js";
import cp_education from "../components/component_education.js";
import cp_reference from "../components/component_reference.js";

export default function home_vertical_page(data) {
   const { Section, Div, Label, Line, Icon } = Ui;

   return Section(
      [
         Div(
            [
               Label("Habilidades", ".main-tittle"),
               Div(
                  data.skills?.map((i) => cp_skill(i)),
                  ".skills matches_container_into"
               ),
            ],
            ".matches-div matches_container_section"
         ),

         Div(
            [
               Line(),
               Label("Experiencia laboral", ".main-tittle"),
               Div(
                  [
                     Icon(
                        "arrow_back_ios",
                        ".experiences-arrow-button arrow-button"
                     ),
                     Div(
                        data.experiences?.map((i) => cp_experience(i)),
                        ".experiences matches_container_into"
                     ),
                     Icon(
                        "arrow_forward_ios",
                        ".experiences-arrow-button arrow-button"
                     ),
                  ],
                  ".matches_container_into slider_arrow"
               ),
            ],
            ".matches-div matches_container_section"
         ),

         Div(
            [
               Line(),
               Label("Proyectos personales", ".main-tittle"),
               Div(
                  [
                     Icon(
                        "arrow_back_ios",
                        ".proyect-arrow-button arrow-button"
                     ),
                     Div(
                        data.proyects?.map((i) => cp_proyect(i)),
                        ".proyects matches_container_into"
                     ),
                     Icon(
                        "arrow_forward_ios",
                        ".proyect-arrow-button arrow-button"
                     ),
                  ],
                  ".matches_container_into slider_arrow"
               ),
            ],
            ".matches-div matches_container_section"
         ),

         Div(
            [
               Line(),
               Label("Educacion", ".main-tittle"),
               Div(
                  data.educations?.map((i) => cp_education(i)) ,
                  ".educations matches_container_into"
               ),
            ],
            ".matches-div matches_container_section"
         ),

         Div(
            [
               Line(),
               Label("Referencia", ".main-tittle"),
               Div(
                  data.references?.map((i) => cp_reference(i)),
                  ".references matches_container_into"
               ),
            ],
            ".matches-div matches_container_section"
         ),
      ],
      ".container"
   );
}
