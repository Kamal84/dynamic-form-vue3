type Title = 'Mr' | 'Mrs' | 'Miss' | 'Ms' | 'Dr';

export interface FormSchema {
  label: string;
  type: string;
  inputType: string;
  state: string;
  placeholder?: string;
  options?: any[];
}

export interface PersonDetails {
  Title: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
}

export interface AppRoute {
  appRoute: Array<Record<string, Path>>;
}

export interface Path {
  path: string;
}
