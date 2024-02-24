import { Component } from '@angular/core';

interface Lista {
  firstName: string;
  lastName: string;
  age: number;
  hoobies: string[];
  profession: string;
}

let users: Lista[] = [
  {
    firstName: "Alejandro",
    lastName: "Toro",
    age: 29,
    hoobies: ["soccer","read","student","gym","shooter videogames"],
    profession: "Software development"
  },
  {
    firstName: "Camilo",
    lastName: "Toro",
    age: 31,
    hoobies: ["soccer","gym","dance"],
    profession: "Telecommunication engenier"
  },
  {
    firstName: "Laura",
    lastName: "Ramirez",
    age: 22,
    hoobies: ["soccer","dance","basketball","gym","music"],
    profession: "networking engenier"
  },
  {
    firstName: "Lucas",
    lastName: "Montero",
    age: 24,
    hoobies: ["tennis","f1","student","gym","shooter videogames"],
    profession: "players of tennis"
  },
  {
    firstName: "Valentina",
    lastName: "Casanare",
    age: 19,
    hoobies: ["soccer","read","gym"],
    profession: "Psicology"
  },
]

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})

export class UserComponent {

  /**
   * Crearemos una lista de usarios donde se verá su información, podrá eliminar el último usuario de su lista.
   * Podra usar directivas como ngFor, ngIf, etc.
   */

  public userList: Lista[] = users;
  public userDelate?: Lista;
  constructor() {
  }

  delateUser(): void {
    this.userDelate = this.userList.pop();
  }

}
