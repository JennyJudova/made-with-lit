import { html } from 'lit';
import '../src/made-with-lit.js';

export default {
  title: 'MadeWithLit',
  component: 'made-with-lit',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <made-with-lit
      style="--made-with-lit-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </made-with-lit>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
