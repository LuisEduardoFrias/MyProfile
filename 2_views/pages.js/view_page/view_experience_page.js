import { ui } from "../../../1_controllers/js/ui.js";
import { handleUrl } from "../../../1_controllers/js/handleUrl.js";

export default function viewExperience(data) {
   const { Div, ViewData, Label, Button } = Ui;

   return Div(
      [
         Div(
            [
               Label("reference", ".tittle-page experience-page-tittle"),
               ViewData(
                  data,
                  () => {
                     handleUrl.changePageEvenClick({
                        target: { href: "/add/experience" },
                     });
                  },
                  (key) => {
                     // skill.key = key;
                     /*  gate.delete((e) => alert(e), skill);*/
                  }
               ),
            ],
            ".view-container-data experience-container-viewexperience"
         ),
         Div(
            [Button("back", ".back-button", null, (e) => handleUrl.back())],
            ".view-container-back-btn"
         ),
      ],
      ".view-container-page experience-container-page"
   );
}
