import Ui from "../../../3_controllers/helpers/ui.js";
import handleUrl from "../../../3_controllers/helpers/handleUrl.js";
import controller_experience from "../../../3_controllers/controller_experience.js";

export default function view_experience_page(data, da) {
   const { Div, ViewData, Label, Button } = Ui;

   return Div(
      [
         Div(
            [
               Label("Experiences", ".view-tittle-page experience-page-tittle"),
               ViewData(
                  data,
                  () => {
                     handleUrl.changePage({
                        target: { href: "/add/experience" },
                     });
                  },
                  (value, e) => controller_experience.delete(da, value)
               ),
            ],
            ".view-container-data experience-container-viewexperience"
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
      ".view-container-page experience-container-page"
   );
}
