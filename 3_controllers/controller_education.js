import add_education_page from "../../2_views/pages/add_pages/add_education_page.js";
import view_education_page from "../../2_views/pages/view_pages/view_education_page.js";
//
import handleUrl from "./helpers/handleUrl.js";
import { Mapper, clearForm } from "./helpers/tools.js";
import { educations, moreeducation } from "../1_models/models.js";

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
      /*
      (async () => {
         const moreE = Mapper(form, moreeducation);
         const educ = Mapper(form, educations);
         educ.MoreEducation = moreE;

         const res = await gate.post(educ);
         if (res) {
            clearForm(form);
         }
         alert("data save");
      })();*/
      alert("Option not completed.");
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
