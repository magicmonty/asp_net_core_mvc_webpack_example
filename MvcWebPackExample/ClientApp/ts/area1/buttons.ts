import $ from 'jquery';

export function TSButton() {
  const button: JQuery<HTMLElement> | null = $('#ts-example');
  button?.html(greeter(user));
}

class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = `${firstName} ${middleInitial} ${lastName}`.replace(
      '  ',
      ' '
    );
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return `Hello ${person.firstName} ${person.lastName}`;
}

const user = new Student('Fred', 'M.', 'Smith');

export const buttons = {
  TSButton,
};
