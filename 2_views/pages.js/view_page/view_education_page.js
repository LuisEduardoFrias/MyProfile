import { ui } from "../../../1_controllers/js/ui.js";
import { handleUrl } from "../../../1_controllers/js/handleUrl.js";

export default function viewEducation(data) {
   const { Div, ViewData, Label, Button } = Ui;

   return Div(
      [
         Div(
            [
               Label("reference", ".tittle-page education-page-tittle"),
               ViewData(
                  data,
                  () => {
                     handleUrl.changePageEvenClick({
                        target: { href: "/add/education" },
                     });
                  },
                  (key) => {
                     // skill.key = key;
                     /*  gate.delete((e) => alert(e), skill);*/
                  }
               ),
            ],
            ".view-container-data education-container-viewproyect"
         ),
         Div(
            [Button("back", ".back-button", null, (e) => handleUrl.back())],
            ".view-container-back-btn"
         ),
      ],
      ".view-container-page education-container-page"
   );
}
