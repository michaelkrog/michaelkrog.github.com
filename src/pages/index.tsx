import { Hero } from '../components/Hero/Hero';
import { VerticalFeatures } from '../components/features/VerticalFeatures';
import { Base } from '../templates/Base';
import { Banner } from '../components/Banner';

const Index = () => <Base hero={<Hero></Hero>}>
    <VerticalFeatures />
    <Banner/>
</Base>;

export default Index;
