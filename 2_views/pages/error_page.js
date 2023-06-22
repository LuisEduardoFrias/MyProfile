import Ui from "../../3_controllers/helpers/ui.js";
import handleUrl from "../../3_controllers/helpers/handleUrl.js";

export default function error_page() {
   const { Div, Label, Line, Button } = Ui;

   return Div(
      [
         Label("error", ".error-tittle"),

         Label("400", ".error-tittle-error-code"),

         Label("add new skill", ".error-subtittle"),

         Line(""),

         Button("back", ".back-btn", null, (e) =>{ handleUrl.back()}),
      ],
      ".error-container"
   );
}
