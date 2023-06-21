import Ui from "../../../3_controllers/helpers/ui.js";
import handleUrl from "../../../3_controllers/helpers/handleUrl.js";
import controller_education from "../../../3_controllers/controller_education.js";

export default function view_education_page(data, da) {
   const { Div, ViewData, Label, Button } = Ui;

   return Div(
      [
         Div(
            [
               Label("Educations", ".view-tittle-page education-page-tittle"),
               ViewData(
                  data,
                  () => {
                     handleUrl.changePage({
                        target: { href: "/add/education" },
                     });
                  },
                  (value, e) => controller_education.delete(da, value)
               ),
            ],
            ".view-container-data education-container-viewproyect"
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
      ".view-container-page education-container-page"
   );
}
