import { getdata, skills, experiences, proyects  } from '../data/data_access.js';

console.log(" okey g");

import CpSkill from '../components/component_skill.js';

import CpExperience from '../components/component_experience.js';

import CpProyect from '../components/component_proyect.js';

import CpEducation from '../components/component_education.js';

import CpReference from '../components/component_reference.js';

/* ********************************** */

const ArraySkill = await getdata(skills);

const ArrayExperience = await getdata(experiences);

const ArrayProyect = await getdata(proyects);

/* ********************************** */

try {
     ArraySkill.forEach(i => CpSkill(document.querySelector('.skills'), i.name, i.url));

     ArrayExperience.forEach(i => CpExperience(document.querySelector('.experiences'), i));
     
     ArrayProyect.forEach(i => CpProyect(document.querySelector('.proyects'), i));
} catch(e) { 
    console.log(e);
}
