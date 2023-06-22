import add_proyect_page from "../../2_views/pages/add_pages/add_proyect_page.js";
import view_proyect_page from "../../2_views/pages/view_pages/view_proyect_page.js";
//
import handleUrl from "./helpers/handleUrl.js";
import { Mapper, clearForm } from "./helpers/tools.js";
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
   static delete(gate, key) {
      (async () => {
         if (await gate.delete(new proyects(), key)) {
            alert("data delete");
            handleUrl.changePage({
               target: { href: "/view/proyects" },
            });
         } else alert("error");
      })();
   }
}
