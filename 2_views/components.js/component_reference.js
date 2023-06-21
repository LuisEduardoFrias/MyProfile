import Ui from "../../3_controllers/helpers/ui.js";

export default function cp_reference({name,phone_number}) {
   const { Div, Label } = Ui;

   return Div([Label(name, ".name"), Label(phone_number, ".phone")], ".constainer-reference");
}
