import { getdata, skills, experiences, proyects, educations, references } from '../data/data_access.js';

import { Select, removeChild, Div, Section } from "../js/tools.js";

import cp_skill from './component_skill.js';
import cp_experience from './component_experience.js';
import cp_proyect from './component_proyect.js';
import cp_education from './component_education.js';
import cp_reference from './component_reference.js';
import cp_profile from './component_profile.js';
import cp_menu from './component_menu.js';

export default function unmatches() {
 
 const main = Select(".container-main");
 const section = Div([],".container");
 
 removeChild(main);
 main.appendChild(cp_profile());
 main.appendChild(cp_menu());
 main.appendChild(section);
 
 const btnS = Select(".memu-btn-skill");
 const btnE = Select(".menu-btn-experience");
 const btnD = Select(".menu-btn-education");
 const btnP = Select(".menu-btn-proyect");
 const btnR = Select(".menu-btn-reference");
 /*let href;*/
 
 function skill() {
  
  /*history.pushState(null, "", "skills");*/
  
  /*if(location.href !== href) {
   */
  removeChild(section);
  
  (async () => {

    section.appendChild(Div([], ".skills matches-div"));

    const data = await getdata(skills);
    data?.forEach(i => cp_skill(Select('.skills'), i));

   })();
   
  /* href = location.href;*/
   
 /* }*/

 }

 skill();

 /* ********************************** */

 btnS.addEventListener("click", (event) => skill());

 /* ********************************** */

 btnE.addEventListener("click", (event) => {
/*  history.pushState(null, "", "experiences");*/
  
  /*if(location.href !== href) {*/
   removeChild(section);

   (async () => {
    
    section.appendChild(Div([], ".experiences matches-div"));
    
    const data = await getdata(experiences);
    data?.forEach(i => cp_experience(Select('.experiences'), i));

   })();
   /*href = location.href;*/
 /* }*/

 });

 /* ********************************** */
 
 btnP.addEventListener("click", (event) => {
 
 /* history.pushState(null, "", "proyects");*/
 
  /*if(location.href !== href) {*/
  
   removeChild(section);

   (async () => {

    section.appendChild(Div([], ".proyects matches-div"));
    
    const data = await getdata(proyects);
    data?.forEach(i => cp_proyect(Select('.proyects'), i));

   })();
   
   /*href = location.href;*/
  /*}*/

 });

 /* ********************************** */

 btnD.addEventListener("click", (event) => {
 
 /* history.pushState(null, "", "educations");*/
  
  /*if(location.href !== href) {*/
  
   removeChild(section);

   (async () => {

    section.appendChild(Div([], ".educations matches-div"));
    
    const data = await getdata(educations);
    data?.forEach(i => cp_education(Select('.educations'), i));

   })();
   
   /*href = location.href;*/
  /*}*/

 });

 /* ********************************** */

 btnR.addEventListener("click", (event) => {
  
  /*history.pushState(null, "", "references");*/
  
  /*if(location.href !== href) {*/
  
   removeChild(section);

   (async () => {
    
    section.appendChild(Div([], ".references matches-div"));
    
    const data = await getdata(references);
    data?.forEach(i => cp_reference(Select('.references'), i));

   })();
   
   /*href = location.href;*/
  /* }*/

 });
 
}