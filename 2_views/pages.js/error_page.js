import { Ui, handleUrl } from "../../1_controllers/js/tools.js";

export default function error() {
   const { Div, Label, Line, Button } = Ui;

   return Div(
      [
         Label("error", ".error-tittle"),

         Label("400", ".error-tittle-error-code"),

         Label("add new skill", ".error-subtittle"),

         Line(""),

         Button(
            "back",
            ".error-btn-back",
            `
            background-color:gray;
            border-radius:10px 10px;
            width:100px;
            height:35px;`,
            (e) => handleUrl.back()
         ),
      ],
      ".error-container"
   );
}
