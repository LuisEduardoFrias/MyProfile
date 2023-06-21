export class segurity {
   constructor() {}
}

export class skills {
   constructor(Name,ImageName) {
      this.Name = Name;
      this.ImageName = ImageName;
   }
}

export class experiences {
   constructor() {}
}

export class proyects {
   constructor() {}
}

export class educations {
   constructor() {}
}

export class references {
   constructor() {}
}

export class all {
   constructor() {}
}

class models {}

models.segurity = segurity;
models.skills = skills;
models.experiences = experiences;
models.proyects = proyects;
models.educations = educations;
models.references = references;
models.all = all;

export default models;
