import Ui from "../../../3_controllers/helpers/ui.js";
import handleUrl from "../../../3_controllers/helpers/handleUrl.js";
import controller_proyect from "../../../3_controllers/controller_proyect.js";

export default function view_proyect_page(data,da) {
   const { Div, ViewData, Label, Button } = Ui;

   return Div(
      [
         Div(
            [
               Label("Proyects", ".view-tittle-page proyect-page-tittle"),
               ViewData(
                  data,
                  () => {
                     handleUrl.changePage({
                        target: { href: "/add/proyect" },
                     });
                  },
                  (obj) => controller_skill.delete(gate, obj.Key)
               ),
            ],
            ".view-container-data proyect-container-viewproyect"
         ),
         Div(
            [
               Button("back", ".back-btn", null, (e) => {
                  handleUrl.back();
               }),
            ],
            ".view-container-back-btn"
         ),
      ],
      ".view-container-page proyect-container-page"
   );
}
