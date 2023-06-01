import { base_url } from "../js/tools.js"

export async function getdata(t) { 
 
 alert(base_url + "get data metod");
 
  return await fetch(base_url + "data/data.json")
        .then((response) => response.json())
        .then((json) =>
        {     alert("in fetch " + json)
            switch (t) {
                case skills:      return json.skills;
                case segurity:    return json.segurity;
                case experiences: return json.experiences;
                case proyects:    return json.proyects;
                case educations:  return json.educations;
                case references:  return json.references; 
                case all:         return json;
                default:          return undefined;
            }
        })
        .catch(error => {
            console.error('There was a problem with the Fetch operation:', error);
            alert(error);
        });
}

/*
export function getalldata(exe) {
 
    Document.prototype.fetchName = function() { 

       fetch('http://localhost:8080/data/data.json')
       .then((response) => response.json())
       .then((json) => {
       
           document.dispatchEvent(
            new CustomEvent('jsonFetched', { json: {
                segurity : json.segurity,
                skills : json.skills,
                experiences : json.experiences,
                proyects : json.proyects,
                educations : json.educations,
                references : json.references } }
           ));
           
       }); 
    } 
    
    document.addEventListener('jsonFetched', exe); 

    document.fetchName();
}
*/

export const segurity = {};
export const skills = {};
export const experiences = {};
export const proyects = {};
export const educations = {};
export const references = {};
export const all = {};

/*import {base_url} from "../js/tools.js";
const url = `${base_url}/data/data.json`;
 */