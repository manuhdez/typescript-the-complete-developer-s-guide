interface UserProps {
  name: string;
  age: number;
}

export default class User {
  private data: UserProps;

  constructor(data: UserProps) {
    this.data = data;
  }

  get = (propName: keyof UserProps): string | number => {
    return this.data[propName];
  };
}
