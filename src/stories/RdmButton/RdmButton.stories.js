import RdmButton from './RdmButton.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Example/RdmButton',
  component: RdmButton,
  tags: ['autodocs'],
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Active = {
  args: {
    text: 'Click me',
    disabled: false,
    clickHandler: () => {
      alert('clicked')
    },
  },
}

export const Disabled = {
  args: {
    text: 'Click me',
    disabled: true,
    clickHandler: () => {
      alert('This wont be alerted')
    },
  },
}
