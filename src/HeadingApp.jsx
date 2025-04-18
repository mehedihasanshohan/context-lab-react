import Heading from './Section.jsx';
import Section from './Heading.jsx';
// import '../src/styles.css'

export default function HeadingApp() {
  return (
    <Section level={1}>
      <Heading>Title</Heading>
      <Section level={2}>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section level={3}>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Section level={4}>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
            <Section level={5}>
              <Heading>Sub-sub-sun-heading</Heading>
              <Heading>Sub-sub-sun-heading</Heading>
              <Heading>Sub-sub-sun-heading</Heading>
              <Section level={6}>
                <Heading>Sub-sub-sub-sub-heading</Heading>
                <Heading>Sub-sub-sub-sub-heading</Heading>
                <Heading>Sub-sub-sub-sub-heading</Heading>
              </Section>
            </Section>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}
