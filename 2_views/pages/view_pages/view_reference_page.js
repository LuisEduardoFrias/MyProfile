import Ui from "../../../3_controllers/helpers/ui.js";
import handleUrl from "../../../3_controllers/helpers/handleUrl.js";
import controller_reference from "../../../3_controllers/controller_reference.js";

export default function view_reference_page(data, gate) {
   const { Div, ViewData, Label, Button } = Ui;

   return Div(
      [
         Div(
            [
               Label("References", ".view-tittle-page reference-page-tittle"),
               ViewData(
                  data,
                  () => {
                     handleUrl.changePage({
                        target: { href: "/add/reference" },
                     });
                  },
                                   (obj) => controller_reference.delete(gate, obj.Key)
               ),
            ],
            ".view-container-data reference-container-viewreference"
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
      ".view-container-page reference-container-page"
   );
}
