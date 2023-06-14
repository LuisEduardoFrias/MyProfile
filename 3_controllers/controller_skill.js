import { add_skill_page } from "../../2_views/pages/add_pages/add_skill_page.js";
import { view_skill_page } from "../../2_views/pages/view_page/view_skill_page.js";
import { dataAccess } from "../4_data_access/dataAccess.js";
import { skill } from "../1_models/models.js";

export class controllerSkill {
   static add() {}
   static view() {
      (async () => {
         const data = await dataAccess(skill);
         return view_skill_page(data);
      })();
   }
}
