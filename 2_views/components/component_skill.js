import Ui from "../../3_controllers/helpers/ui.js";

export default function cp_skill({ Name, ImageName }) {
   return Ui.Div(
      [
         Ui.Img(ImageName, Name, ".skill-img", `width: 70%; height: 70%;`),
         Ui.Label(Name, ".skill-name"),
      ],
      ".skill-container"
   );
}
