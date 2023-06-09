import { Colors, Ui } from "../js/tools.js";

export default function skill(element, skill) {
   const { P, T } = Colors;

   element.appendChild(
      Ui.Div(
         [
            Ui.Img(
               skill.img,
               skill.name,
               ".skill-img",
               `width: 70%; height: 70%;`
            ),
            Ui.Label(skill.name, ".skill-name"),
         ],
         ".skill-container",
         `
         border-bottom-color: ${P};
         border-left-color: ${P};
         border-top-color: ${T};
         border-right-color: ${T};
         `
      )
   );
}
