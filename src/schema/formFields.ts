import { FormSchema } from '../types/index';

export const formSchema: Array<FormSchema> = [
  // {
  //   label: 'Title',
  //   type: 'Select',
  //   state: 'title',
  //   options: ['Mr', 'Mrs', 'Miss', 'Ms', 'Dr'],
  // },
  {
    label: 'First name',
    type: 'Input',
    state: 'firstName',
    placeholder: 'First name',
  },
  {
    label: 'Last name',
    type: 'Input',
    state: 'lastName',
    placeholder: 'Last name',
  },
  {
    label: 'Email address',
    type: 'Input',
    state: 'email',
    placeholder: 'Email address',
  },
];
