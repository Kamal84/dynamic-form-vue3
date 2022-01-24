import { FormSchema } from '../types/index';

// export const formSchema: Array<FormSchema> = [
//   {
//     label: 'Title',
//     type: 'radio',
//     inputType: 'BaseRadioButtonGroup',
//     state: 'title',
//     options: ['Mr', 'Mrs', 'Miss', 'Ms', 'Dr'],
//   },
//   {
//     label: 'First name',
//     type: 'text',
//     inputType: 'BaseInput',
//     state: 'firstName',
//     placeholder: 'First name',
//   },
//   {
//     label: 'Last name',
//     type: 'text',
//     inputType: 'BaseInput',
//     state: 'lastName',
//     placeholder: 'Last name',
//   },
//   {
//     label: 'Email address',
//     type: 'email',
//     inputType: 'BaseInput',
//     state: 'email',
//     placeholder: 'Email address',
//   },
//   {
//     label: 'Phone number',
//     type: 'number',
//     inputType: 'BaseInput',
//     state: 'phoneNumber',
//     placeholder: 'Phone number',
//   },
// ];

export const formSchema = {
  personDetails: [
    {
      label: 'Title',
      type: 'radio',
      inputType: 'BaseRadioButtonGroup',
      state: 'title',
      options: ['Mr', 'Mrs', 'Miss', 'Ms', 'Dr'],
    },
    {
      label: 'First name',
      type: 'text',
      inputType: 'BaseInput',
      state: 'firstName',
      placeholder: 'First name',
    },
    {
      label: 'Last name',
      type: 'text',
      inputType: 'BaseInput',
      state: 'lastName',
      placeholder: 'Last name',
    },
    {
      label: 'Email address',
      type: 'email',
      inputType: 'BaseInput',
      state: 'email',
      placeholder: 'Email address',
    },
    {
      label: 'Phone number',
      type: 'number',
      inputType: 'BaseInput',
      state: 'phoneNumber',
      placeholder: 'Phone number',
    },
  ],
  workDetails: [
    {
      label: 'Job title',
      type: 'text',
      inputType: 'BaseInput',
      state: 'jobTitle',
      placeholder: 'Job title',
    },
    {
      label: 'Company name',
      type: 'text',
      inputType: 'BaseInput',
      state: 'companyName',
      placeholder: 'Company name',
    },
  ],
};
