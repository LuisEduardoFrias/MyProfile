import { getdata, skills, experiences } from '../data/data_access.js';

import CpSkill from '../components/component_skill.js';

import CpExperience from '../components/component_experience.js';

/* ********************************** */

const ArraySkill = await getdata(skills);

const ArrayExperience = await getdata(experiences);

/* ********************************** */

try {
     ArraySkill.forEach(i => CpSkill(document.querySelector('.skills'), i.name, i.url));

     ArrayExperience.forEach(i => CpExperience(document.querySelector('.experiences'), i));

} catch(e) {
    console.log(e);
}

