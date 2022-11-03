/**
 * Grouping the first three input fields
 */

export let inputFields = [
  {
    element: 'input',
    id: 'fullname',
    aria: 'Your full name',
    type: 'text',
    class: 'form-input',
    required: true,
    label: 'Full Name *',
    labelClass: 'form-label',
    helpfulText: 'Please input your Full-name',
  },
  {
    element: 'input',
    id: 'email',
    aria: 'Your email',
    type: 'text',
    class: 'form-input',
    required: true,
    label: 'Email *',
    labelClass: 'form-label',
    helpfulText: 'Please input your Email',
  },
  {
    element: 'input',
    id: 'phone',
    aria: 'Your Phone',
    type: 'text',
    class: 'form-input',
    required: true,
    label: 'Phone *',
    labelClass: 'form-label',
    helpfulText: 'Please input your Phone',
  },
];
