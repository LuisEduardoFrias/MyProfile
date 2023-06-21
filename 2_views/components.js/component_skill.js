import Ui from "../../3_controllers/helpers/ui.js";

export default function cp_skill({ img, name }) {
   return Ui.Div(
      [
         Ui.Img(img, name, ".skill-img", `width: 70%; height: 70%;`),
         Ui.Label(name, ".skill-name"),
      ],
      ".skill-container"
   );
}
