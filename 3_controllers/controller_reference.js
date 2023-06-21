import add_reference_page from "../../2_views/pages/add_pages/add_reference_page.js";
import view_reference_page from "../../2_views/pages/view_pages/view_reference_page.js";
//
import { Mapper } from "./helpers/tools.js";
import { references } from "../1_models/models.js";

export default class controller_reference {
   static add(gate) {
      return add_reference_page(gate);
   }
   static view(gate) {
      return (async () => {
         return view_reference_page(await gate.get(references), gate);
      })();
   }
   static post(gate, form) {
      (async () => {
         const res = await gate.post(Mapper(form, references));
         if (res) {
            clearForm(form);
         }
         alert("data save");
      })();
   }
   static delete(gate, value) {
      (async () => {
         const res = await gate.delete(value);
         alert("data delete");
         this.view(gate);
      })();
   }
}
