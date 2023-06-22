import Ui from "../../../3_controllers/helpers/ui.js";
import handleUrl from "../../../3_controllers/helpers/handleUrl.js";
import controller_skill from "../../../3_controllers/controller_skill.js";

export default function view_skill_page(data, gate) {
   const { Div, ViewData, Label, Button } = Ui;

   return Div(
      [
         Div(
            [
               Label("Skills", ".view-tittle-page skill-page-tittle"),
               ViewData(
                  data,
                  () => {
                     handleUrl.changePage({
                        target: { href: "/add/skill" },
                     });
                  },
                  (obj) => controller_skill.delete(gate, obj.Key)
               ),
            ],
            ".view-container-data skill-container-viewskill"
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
      ".view-container-page skill-container-page"
   );
}
