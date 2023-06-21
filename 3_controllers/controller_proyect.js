import add_proyect_page from "../../2_views/pages/add_pages/add_proyect_page.js";
import view_proyect_page from "../../2_views/pages/view_pages/view_proyect_page.js";
//
import { Mapper } from "./helpers/tools.js";
import { proyects } from "../1_models/models.js";

export default class controller_proyect {
   static add(gate) {
      return add_proyect_page(gate);
   }
   static view(gate) {
      return (async () => {
         return view_proyect_page(await gate.get(proyects), gate);
      })();
   }
   static post(gate, form) {
      (async () => {
         const res = await gate.post(Mapper(form, proyects));
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
