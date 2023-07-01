export class skills {
  constructor(Name, ImageName) {
    this.Name = Name;
    this.ImageName = ImageName;
  }
}

export class experiences {
  constructor(Company, Description, Position, Tacks) {
    this.Company = Company;
    this.Description = Description;
    this.Position = Position;
    this.Tacks = Tacks;
  }
}

export class proyects {
  constructor(Tittle, Description, Tegnologys, Repositorys) {
    this.Tittle = Tittle;
    this.Description = Description;
    this.Tegnologys = Tegnologys;
    this.Repositorys = Repositorys;
  }
}

export class moreeducation {
  constructor(Tittle, Institution, UrlIstitution, TittleImg) {
    this.Tittle = Tittle;
    this.Institution = Institution;
    this.UrlIstitution = UrlIstitution;
    this.TittleImg = TittleImg;
  }
}
export class educations {
  constructor(Tittle, Institution, TittleImg, MoreEducation) {
    this.Tittle = Tittle;
    this.Institution = Institution;
    this.TittleImg = TittleImg;
    this.MoreEducation = MoreEducation;
  }
}

export class references {
  constructor(Name, PhoneNumber) {
    this.Name = Name;
    this.PhoneNumber = PhoneNumber;
  }
}

export class all {
  constructor() {}
}

class models {}

models.skills = skills;
models.experiences = experiences;
models.proyects = proyects;
models.educations = educations;
models.moreeducation = moreeducation;
models.references = references;
models.all = all;

export default models;
