const {Select} from './tools.js';
//
const {component_profile } from '../../2_view/componemts/component_profile.js'
//
const { home_horizontal_page } from
'../../2_views/pages/home_horizontal_page.js';
const { home_vertical_page } from
'../../2_views/pages/home_vertical_page.js';
const { error_page} from '../../2_views/pages/error_page.js';
const { setting_page} from '../../2_views/pages/setting_page.js';
//
const { add_skill_page} from '../../2_views/pages/add_pages/add_skill_page.js';
const {add_experience_page } from '../../2_views/pages/add_pages/add_experience_page.js';
const {add_proyect_page } from '../../2_views/pages/add_pages/add_proyect_page.js';
const {add_education_page } from '../../2_views/pages/add_pages/add_education_page.js';
const { add_reference_page} from '../../2_views/pages/add_pages/add_reference_page.js';
//
const {view_skill_page } from '../../2_views/pages/view_page/view_skill_page.js';
const {view_experience_page } from '../../2_views/pages/view_page/view_experience_page.js';
const { view_proyect_page} from '../../2_views/pages/view_page/view_proyect_page.js';
const {view_education_page } from '../../2_views/pages/view_page/view_education_page.js';
const { view_reference_page} from '../../2_views/pages/view_page/view_reference_page.js';


export class handleUrl {
   
   static clearAdd(page) {
      const main = Select(".container-main");
      RemoveChild(main);
      main.appendChild(cp_profile());
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
      console.log("async method :" + event);
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

      console.log(event.target.href);

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
            handleUrl.clearAdd(settingPage());
            break;
         }
         case "/view/skills": {
            handleUrl.clearAdd(viewSkillPage());

            break;
         }
         case "/view/experiences": {
            handleUrl.clearAdd(viewExperiencePage());
            break;
         }
         case "/view/proyects": {
            handleUrl.clearAdd(viewProyectPage());
            break;
         }
         case "/view/educations": {
            handleUrl.clearAdd(viewEducationPage());
            break;
         }
         case "/view/references": {
            handleUrl.clearAdd(viewReferencePage());
            break;
         }
         case "/add/skill": {
            handleUrl.clearAdd(addSkillPage());
            break;
         }
         case "/add/experience": {
            handleUrl.clearAdd(addExperiencePage());
            break;
         }
         case "/add/proyect": {
            handleUrl.clearAdd(addProyectPage());
            break;
         }
         case "/add/education": {
            handleUrl.clearAdd(addEducationPage());
            break;
         }
         case "/add/reference": {
            handleUrl.clearAdd(addReferencePage());
            break;
         }
         default: {
            handleUrl.clearAdd(errorpage());
            break;
         }
      }
   }
}