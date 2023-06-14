import { Select } from "./tools.js";
import { ui } from "./ui.js";
//
import { component_profile } from "../../2_view/componemts/component_profile.js";
//
import { controller_skill } from "../controller_skill.js";
import { controller_experience } from "../controller_experience.js";
import { controller_proyect } from "../controller_proyect.js";
import { controller_education } from "../controller_education.js";
import { controller_reference } from "../controller_reference.js";
import { controller_home } from "../controller_home.js";
import { controller_setting } from "../controller_setting.js";

export class handleUrl {
   #clearAdd(page) {
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

   #andleLocation() {
      this.changePageEvenClick({
         target: { href: window.location.pathname },
      });
   }

   static back() {
      history.back();
   }

   #changePageEvenClick(event) {
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
               controller_home.vertical(),
               controller_home.horizontal()
            );
            break;
         }
         case "/settings": {
            handleUrl.clearAdd(controller_setting.setting());
            break;
         }
         case "/view/skills": {
            handleUrl.clearAdd(controller_skill.view());

            break;
         }
         case "/view/experiences": {
            handleUrl.clearAdd(controller_experience.view());
            break;
         }
         case "/view/proyects": {
            handleUrl.clearAdd(controller_proyect.view());
            break;
         }
         case "/view/educations": {
            handleUrl.clearAdd(controller_education.view());
            break;
         }
         case "/view/references": {
            handleUrl.clearAdd(controller_reference.view());
            break;
         }
         case "/add/skill": {
            handleUrl.clearAdd(controller_skill.add());
            break;
         }
         case "/add/experience": {
            handleUrl.clearAdd(controller_experience.add());
            break;
         }
         case "/add/proyect": {
            handleUrl.clearAdd(controller_proyect.add());
            break;
         }
         case "/add/education": {
            handleUrl.clearAdd(controller_education.add());
            break;
         }
         case "/add/reference": {
            handleUrl.clearAdd(controller_reference.add());
            break;
         }
         default: {
            handleUrl.clearAdd(controller_setting.error());
            break;
         }
      }
   }
}
