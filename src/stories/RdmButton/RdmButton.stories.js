import RdmButton from './RdmButton.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Example/RdmButton',
  component: RdmButton,
  tags: ['autodocs'],
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultActive = {
  args: {
    text: 'Click me',
    disabled: false,
    clickHandler: () => {
      alert('clicked')
    },
  },
}
