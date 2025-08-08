import RdmInput from './RdmInput.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Example/RdmInput',
  component: RdmInput,
  tags: ['autodocs'],
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Active = {
  args: {
    label: 'Name',
    placeholder: 'Enter your name',
    disabled: false,
  },
}

export const Disabled = {
  args: {
    label: 'Name',
    placeholder: 'Enter your name',
    disabled: true,
  },
}

export const Password = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    disabled: false,
  },
}
