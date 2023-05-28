"use strict";

import { getdata, all, skills, experiences, proyects, educations, references } from '../data/data_access.js'

import { mediaQuery, Select, Hr, Label, Div, removeChild } from './tools.js'

import CpSkill from '../components/component_skill.js'

import CpExperience from '../components/component_experience.js'

import CpProyect from '../components/component_proyect.js'

import CpEducation from '../components/component_education.js'

import CpReference from '../components/component_reference.js'

/* ********************************** */

function matches() {
 // llamada con función asíncrona

 (async () => {

  const data = await getdata(all);

  const ArraySkill = data.skills;
  const ArrayExperience = data.experiences;
  const ArrayProyect = data.proyects;
  const ArrayEducation = data.educations;
  const ArrayReference = data.references;

  const main = Select(".container-main");

  main.appendChild(Hr());
  main.appendChild(Label("Habilidades", ".main-tittle"));
  main.appendChild(Div([], ".skills"));

  main.appendChild(Hr());
  main.appendChild(Label("Experiencia laboral", ".main-tittle"));
  main.appendChild(Div([], ".experiences"));

  main.appendChild(Hr());
  main.appendChild(Label("Proyectos personales", ".main-tittle"));
  main.appendChild(Div([], ".proyects"));

  main.appendChild(Hr());
  main.appendChild(Label("Educacion", ".main-tittle"));
  main.appendChild(Div([], ".educations"));

  main.appendChild(Hr());
  main.appendChild(Label("Referencia", ".main-tittle"));
  main.appendChild(Div([], ".references"));

  ArraySkill?.forEach(i =>
   CpSkill(Select('.skills'), i.name, i.url));

  ArrayExperience?.forEach(i =>
   CpExperience(Select('.experiences'), i));

  ArrayProyect?.forEach(i =>
   CpProyect(Select('.proyects'), i));

  ArrayEducation?.forEach(i =>
   CpEducation(Select('.educations'), i));

  ArrayReference?.forEach(i =>
   CpReference(Select('.references'), i));

 })();

}

function no_matches() {

 const btnS = Select(".btnS");
 const btnE = Select(".btnE");
 const btnP = Select(".btnP");
 const btnEd = Select(".btnEd");
 const btnR = Select(".btnR");
 let href;

 const main = Select(".container-main");

 function skill() {
  history.pushState(null, "", "skills");
  if(location.href !== href) {
   removeChild(main);

   (async () => {

    const ArraySkill = await getdata(skills);

    main.appendChild(Div([], ".skills"));

    ArraySkill.forEach(i => CpSkill(Select('.skills'), i.name, i.url));

   })();
   href = location.href;
  }

 }

 skill();

 /* ********************************** */

 btnS.addEventListener("click", (event) => skill());

 /* ********************************** */

 btnE.addEventListener("click", (event) => {
  history.pushState(null, "", "experiences");
  if(location.href !== href) {
   removeChild(main);

   (async () => {

    const ArrayExperience = await getdata(experiences);
    main.appendChild(Div([], ".experiences"));
    ArrayExperience.forEach(i => CpExperience(Select('.experiences'), i));

   })();
   href = location.href;
  }

 });

 /* ********************************** */

 btnP.addEventListener("click", (event) => {
  history.pushState(null, "", "proyects");
  if(location.href !== href) {
   removeChild(main);

   (async () => {

    const ArrayProyect = await getdata(proyects);
    main.appendChild(Div([], ".proyects"));
    ArrayProyect.forEach(i => CpProyect(Select('.proyects'), i));

   })();
   href = location.href;
  }

 });

 /* ********************************** */

 btnEd.addEventListener("click", (event) => {
  history.pushState(null, "", "educations");
  if(location.href !== href) {
   removeChild(main);

   (async () => {

    const ArrayEducation = await getdata(educations);
    main.appendChild(Div([], ".educations"));
    ArrayEducation.forEach(i => CpEducation(Select('.educations'), i));

   })();
   href = location.href;
  }

 });

 /* ********************************** */

 btnR.addEventListener("click", (event) => {
  history.pushState(null, "", "references");
  if(location.href !== href) {
   removeChild(main);

   (async () => {

    const ArrayReference = await getdata(references);
    main.appendChild(Div([], ".references"));
    ArrayReference.forEach(i => CpReference(Select('.references'), i));

   })();
   href = location.href;
  }

 });

}

mediaQuery("max-width: 900px", matches, no_matches);
