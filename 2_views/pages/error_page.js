import Ui from "../../3_controllers/helpers/ui.js";
import handleUrl from "../../3_controllers/helpers/handleUrl.js";

export default function error_page() {
  const { Div, Label, Line, Button } = Ui;

  return Div(
    [
      Div(
        [


          Label("404", ".error-tittle-error-code"),

          Label(
            "The resource you are requesting was not found.",
            ".error-subtittle"
          ),
        ],
        ".error-container"
      ),
      Div(
        [
          Button("back", ".back-btn", null, (e) => {
            handleUrl.back();
          }),
        ],
        ".button-error-container"
      ),
    ],
    ".error-page-container"
  );
}
