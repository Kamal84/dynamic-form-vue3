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
  yourAddress: [
    {
      label: 'Your Postcode',
      type: 'text',
      inputType: 'BaseInput',
      state: 'postcode',
      placeholder: 'Your Postcode',
    },
    {
      label: 'Address Line 1',
      type: 'text',
      inputType: 'BaseInput',
      state: 'addressLine1',
      placeholder: 'Address Line 1',
    },
    {
      label: 'City',
      type: 'text',
      inputType: 'BaseInput',
      state: 'city',
      placeholder: 'City',
    },
  ],
  yourIncome: [
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
    {
      label: 'Employment Status',
      type: 'radio',
      inputType: 'BaseRadioButtonGroup',
      state: 'employmentStatus',
      placeholder: 'Employment Status',
      options: [
        'Full time employed',
        'Part time employed',
        'Self employed',
        'Unemployed',
        'Retired',
      ],
    },
    {
      label: 'Pay frequency',
      type: 'radio',
      inputType: 'BaseRadioButtonGroup',
      state: 'payFrequency',
      placeholder: 'Pay frequency',
      options: ['Weekly', 'twice monthly', 'Monthly', 'Irregular'],
    },
  ],
};
