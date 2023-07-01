import add_experience_page from "../../2_views/pages/add_pages/add_experience_page.js";
import view_experience_page from "../../2_views/pages/view_pages/view_experience_page.js";
//
import { Mapper } from "./helpers/tools.js";
import { experiences } from "../1_models/models.js";

export default class controller_experience {
   static add(gate) {
      return add_experience_page(gate);
   }
   static view(gate) {
      return (async () => {
         return view_experience_page(await gate.get(experiences), gate);
      })();
   }
   static post(gate, form) {
      (async () => {
         const res = await gate.post(Mapper(form, experiences));
         if (res) {
            clearForm(form);
         }
         alert("data save");
      })();
   }
   static delete(gate, key) {
      (async () => {
         if (await gate.delete(new experiences(), key)) {
            alert("data delete");
            handleUrl.changePage({
               target: { href: "/view/experiences" },
            });
         } else alert("error");
      })();
   }
}
