import add_education_page from "../../2_views/pages/add_pages/add_education_page.js";
import view_education_page from "../../2_views/pages/view_pages/view_education_page.js";
//
import { Mapper } from "./helpers/tools.js";
import { educations } from "../1_models/models.js";

export default class controller_education {
   static add(gate) {
      return add_education_page(gate);
   }
   static view(gate) {
      return (async () => {
         return view_education_page(await gate.get(educations), gate);
      })();
   }
   static post(gate, form) {
      (async () => {
         const res = await gate.post(Mapper(form, educations));
         if (res) {
            clearForm(form);
         }
         alert("data save");
      })();
   }
   static delete(gate, key) {
      (async () => {
         if (await gate.delete(new educations(), key)) {
            alert("data delete");
            handleUrl.changePage({
               target: { href: "/view/educations" },
            });
         } else alert("error");
      })();
   }
}
