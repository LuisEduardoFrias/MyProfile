import { ui } from "../../../1_controllers/js/ui.js";
import { handleUrl } from "../../../1_controllers/js/handleUrl.js";

export default function viewReference(data) {
   const { Div, ViewData, Label, Button } = Ui;

   return Div(
      [
         Div(
            [
               Label("reference", ".tittle-page reference-page-tittle"),
               ViewData(
                  data,
                  () => {
                     handleUrl.changePageEvenClick({
                        target: { href: "/add/reference" },
                     });
                  },
                  (key) => {
                     // skill.key = key;
                     /*  gate.delete((e) => alert(e), skill);*/
                  }
               ),
            ],
            ".view-container-data reference-container-viewreference"
         ),
         Div(
            [Button("back", ".back-button", null, (e) => handleUrl.back())],
            ".view-container-back-btn"
         ),
      ],
      ".view-container-page reference-container-page"
   );
}
