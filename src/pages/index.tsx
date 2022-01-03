import { Banner } from '../components/banner';
import { Hero } from '../components/hero';
import { VerticalFeatures } from '../components/VerticalFeatures';
import { Base } from '../templates/Base';

const Index = () => <Base hero={<Hero></Hero>}>
    <VerticalFeatures />
    <Banner />
</Base>;

export default Index;
