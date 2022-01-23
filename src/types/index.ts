export interface FormSchema {
  label: string;
  type: string;
  state: string;
  placeholder?: string;
  options?: Array<string>[];
}

export interface PersonDetails {
  firstName: string;
  lastName: string;
  email: string;
}
