import ModalEcIntro from '@/components/enhanced-conversions/modal-ec-intro.vue';

export default {
  title: 'Enhanced Conversions/Popins',
  component: ModalEcIntro
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ModalEcIntro},
  template: `
    <div>
      <modal-ec-intro v-bind="$props" />
    </div>
  `,
});

export const EnhancedConversionsIntro:any = Template.bind({});
EnhancedConversionsIntro.args = {
  tosAreSigned: false,
}

export const EnhancedConversionsIntroWithTosSigned:any = Template.bind({});
EnhancedConversionsIntro.args = {
  tosAreSigned: true,
}
