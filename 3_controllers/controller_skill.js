import add_skill_page from "../2_views/pages/add_pages/add_skill_page.js";
import view_skill_page from "../2_views/pages/view_pages/view_skill_page.js";
//
import handleUrl from "./helpers/handleUrl.js";
import { Mapper, clearForm } from "./helpers/tools.js";
import { skills } from "../1_models/models.js";

export default class controller_skill {
   //comentario de pruebas.
   static add(gate) {
      return add_skill_page(gate);
   }
   static view(gate) {
      return (async () => {
         return view_skill_page(await gate.get(skills), gate);
      })();
   }
   static post(gate, form) {
      (async () => {
         const res = await gate.post(Mapper(form, skills));
         if (res) {
            clearForm(form);
         }
         alert("data save");
      })();
   }
   static delete(gate, value) {
      (async () => {
         const res = await gate.delete(new skills(), value);
         alert("data delete");
         handleUrl.changePage({
            target: { href: "/view/skills" },
         });
      })();
   }
}
