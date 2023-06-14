import { Select } from "./tools.js";
import { ui } from "./ui.js";
//
import { component_profile } from "../../2_view/componemts/component_profile.js";
//
import { home_horizontal_page } from "../../2_views/pages/home_horizontal_page.js";
import { home_vertical_page } from "../../2_views/pages/home_vertical_page.js";
import { error_page } from "../../2_views/pages/error_page.js";
import { setting_page } from "../../2_views/pages/setting_page.js";
//
import { add_skill_page } from "../../2_views/pages/add_pages/add_skill_page.js";
import { add_experience_page } from "../../2_views/pages/add_pages/add_experience_page.js";
import { add_proyect_page } from "../../2_views/pages/add_pages/add_proyect_page.js";
import { add_education_page } from "../../2_views/pages/add_pages/add_education_page.js";
import { add_reference_page } from "../../2_views/pages/add_pages/add_reference_page.js";
//
import { view_skill_page } from "../../2_views/pages/view_page/view_skill_page.js";
import { view_experience_page } from "../../2_views/pages/view_page/view_experience_page.js";
import { view_proyect_page } from "../../2_views/pages/view_page/view_proyect_page.js";
import { view_education_page } from "../../2_views/pages/view_page/view_education_page.js";
import { view_reference_page } from "../../2_views/pages/view_page/view_reference_page.js";

export class handleUrl {
   static clearAdd(page) {
      const main = Select(".container-main");
      RemoveChild(main);
      main.appendChild(component_profile());
      main.appendChild(Ui.Section([page], ".container"));
   }

   static listenerUrl() {
      window.onpopstate = this.handleLocation;
      window.route = this.changePageEvenClick;

      window.addEventListener("popstate", (event) => {
         handleUrl.changePageEvenClick({
            target: { href: window.history.state.page },
         });
      });

      this.changePageEvenClick({
         target: { href: window.location.pathname },
      });
   }

   async handleLocation() {
      this.changePageEvenClick({
         target: { href: window.location.pathname },
      });
   }

   static back() {
      history.back();
   }

   static changePageEvenClick(event) {
      event = event || window.event;

      history.pushState(
         { page: event.target.href },
         "My Profile",
         event.target.href
      );

      switch (event.target.href) {
         case "/index.html": {
            MediaQuery(
               "max-width: 900px",
               home_vertical_page,
               home_horizontal_page
            );
            break;
         }
         case "/settings": {
            handleUrl.clearAdd(setting_page());
            break;
         }
         case "/view/skills": {
            handleUrl.clearAdd(view_skill_page());

            break;
         }
         case "/view/experiences": {
            handleUrl.clearAdd(view_experience_page());
            break;
         }
         case "/view/proyects": {
            handleUrl.clearAdd(view_proyect_page());
            break;
         }
         case "/view/educations": {
            handleUrl.clearAdd(view_education_page());
            break;
         }
         case "/view/references": {
            handleUrl.clearAdd(view_reference_page());
            break;
         }
         case "/add/skill": {
            handleUrl.clearAdd(add_skill_page());
            break;
         }
         case "/add/experience": {
            handleUrl.clearAdd(add_experience_page());
            break;
         }
         case "/add/proyect": {
            handleUrl.clearAdd(add_proyect_page());
            break;
         }
         case "/add/education": {
            handleUrl.clearAdd(add_education_page());
            break;
         }
         case "/add/reference": {
            handleUrl.clearAdd(add_reference_page());
            break;
         }
         default: {
            handleUrl.clearAdd(error_page());
            break;
         }
      }
   }
}
