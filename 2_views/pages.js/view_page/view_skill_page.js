import { ui } from "../../../1_controllers/js/ui.js";
import { handleUrl } from "../../../1_controllers/js/handleUrl.js";

export default function viewSkill(data) {
   const { Div, ViewData, Label, Button } = Ui;

   return Div(
      [
         Div(
            [
               Label("skill", ".tittle-page skill-page-tittle"),
               ViewData(
                  data,
                  () => {
                     handleUrl.changePageEvenClick({
                        target: { href: "/add/skill" },
                     });
                  },
                  (key) => {
                     // skill.key = key;
                     /*  gate.delete((e) => alert(e), skill);*/
                  }
               ),
            ],
            ".view-container-data skill-container-viewskill"
         ),
         Div(
            [Button("back", ".back-button", null, (e) => handleUrl.back())],
            ".view-container-back-btn"
         ),
      ],
      ".view-container-page skill-container-page"
   );
}
