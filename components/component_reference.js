import { Colors, Ui } from "../js/tools.js";

export default function reference(element, reference) {
   const { P, T } = Colors;
   const { Div, Label } = Ui;

   element.appendChild(Div([Label(reference.name, ".name"), Label(reference.phone_number, ".phone")], ".constainer-reference",
         `
         border-width: 2px;
         border-style: double;
         border-bottom-color: ${P};
         border-left-color: ${P};
         border-top-color: ${T};
         border-right-color: ${T};`));
}
