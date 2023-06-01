import { getdata, all } from '../data/data_access.js'

import { Select, Hr, Label, Div, Section, Icon, removeChild } from '../js/tools.js'

import cp_profile   from '../components/component_profile.js';
import cp_skill      from './component_skill.js'
import cp_experience from './component_experience.js'
import cp_proyect    from './component_proyect.js'
import cp_education  from './component_education.js'
import cp_reference  from './component_reference.js'

export default function matches() {
    
   /* history.pushState(null, "", "app");*/
    
    const main = Select(".container-main");
    removeChild(main);
    main.appendChild(cp_profile());
    
    (async () => {
     alert("create")
        main.appendChild(Section([
            Div([
                Hr(),
                Label("Habilidades", ".main-tittle"),
                Div([], ".skills matches_container_into")
            ],".matches-div matches_container_section"),
            
            Div([
                Hr(),
                Label("Experiencia laboral", ".main-tittle"),
                Div([ 
                    Icon("arrow_back_ios",".experiences-arrow-button arrow-button"),
                    Div([], ".experiences matches_container_into"),
                    Icon("arrow_forward_ios",".experiences-arrow-button arrow-button")], ".matches_container_into slider_arrow")
            ],".matches-div matches_container_section"),
            
            Div([
                Hr(),
                Label("Proyectos personales", ".main-tittle"),
                Div([
                    Icon("arrow_back_ios",".proyect-arrow-button arrow-button"),
                    Div([], ".proyects matches_container_into"),
                    Icon("arrow_forward_ios",".proyect-arrow-button arrow-button")
                 ], ".matches_container_into slider_arrow")
            ],".matches-div matches_container_section"),
            
            Div([
                Hr(),
                Label("Educacion", ".main-tittle"),
                Div([], ".educations matches_container_into")
            ],".matches-div matches_container_section"),
            
            Div([
                Hr(),
                Label("Referencia", ".main-tittle"),
                Div([], ".references matches_container_into")
            ],".matches-div matches_container_section")
        
        ],".container") );
        
        alert("get data");
        const data = await getdata(all);
        alert("data - " + data);
        
        data.skills?.forEach(i =>
        cp_skill(Select('.skills'), i));

        data.experiences?.forEach(i =>
        cp_experience(Select('.experiences'), i));

        data.proyects?.forEach(i =>
        cp_proyect(Select('.proyects'), i));

        data.educations?.forEach(i =>
        cp_education(Select('.educations'), i));

        data.references?.forEach(i =>
        cp_reference(Select('.references'), i));

    })();
}
