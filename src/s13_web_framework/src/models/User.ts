interface UserProps {
  name?: string;
  age?: number;
}

export default class User {
  private data: UserProps;

  constructor(data: UserProps) {
    this.data = data;
  }

  get = (propName: keyof UserProps): string | number | undefined => {
    return this.data[propName];
  };

  set = (propName: keyof UserProps, value: string | number): void => {
    const updatedData = {
      ...this.data,
      [propName]: value
    };

    this.data = updatedData;
  };

  update = (newData: UserProps): void => {
    Object.assign(this.data, newData);
  };
}
