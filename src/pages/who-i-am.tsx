import React, { ReactNode } from 'react';
import { Section } from '../components/layout/Section';
import { Base } from '../templates/Base';
import { shuffle } from '../utils/shuffle';
import Tabs from '../components/Tabs';
import Link from 'next/link';

class WhoIAm extends React.Component {
    imageClasses = 'rounded-full drop-shadow object-cover w-24 h-24 lg:w-27 lg:h-27';
    tooltipPlacement = 'bottom';
    images: ReactNode[] = shuffle([
        <img className={this.imageClasses} src="/assets/images/michael/image1.jpg" />
        ,
        <sl-tooltip content="Me&nbsp;craving&nbsp;a&nbsp;Milk&nbsp;Shake" placement={this.tooltipPlacement}>
            <img className={this.imageClasses} src="/assets/images/michael/image2.jpg"  />
        </sl-tooltip>,
        <sl-tooltip content="Me&nbsp;with&nbsp;my&nbsp;beautiful&nbsp;Hannah" placement={this.tooltipPlacement}>
            <img className={this.imageClasses} src="/assets/images/michael/image3.jpg"  />
        </sl-tooltip>,
        <sl-tooltip content="Me&nbsp;happy&nbsp;to&nbsp;be&nbsp;alive" placement={this.tooltipPlacement}>
            <img className={this.imageClasses} src="/assets/images/michael/image4.jpg"  />
        </sl-tooltip>
    ]);

    render() {
        return (
            <Base>
                <Section>
                    <Tabs index={0}></Tabs>
                    <div className="flex items-center space-x-6 lg:space-x-9">
                        <div className="my-4 w-24 h-24 lg:w-27 lg:h-27" style={{ position: 'relative' }}>
                            {this.images[0]}
                        </div>
                        <div className="text-lg leading-6 font-medium space-y-1">
                            <h3>Michael Krog</h3>
                            <p className="text-indigo-600">Senior Software Developer</p>
                        </div>
                    </div>
                    <div className="text-medium">
                        <p className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                            Software development and design has been a <strong>major interest</strong> for me since I 
                            was a kid. I love the challenge of making something complex very easy to use. That is also 
                            why I have worked with both frontend, backend, API and UX design - I like to be able to 
                            track the implementation of a prototype design all the way to the core.
                        </p>
                        <p className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                            In 2003 I married Hannah, the <strong>love of my life</strong>. Together we live 
                            in <a href="https://maps.apple.com/?address=Sjælland, Danmark&ll=55.545598,11.697374&q=Sjælland&_ext=EiYpsJNVbCd7S0AxObMC6Jy8JUA5DUQFPYoQTEBBw9CPK5pHKUBQDA==">Denmark</a> where we have a house and a cat - we named it Thorkild. We have a lot of fun.
                            Come to think of it - I think we enjoy fun. And food. Both fun and food is important.
                        </p>
                        <p className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                            I learned from hard experiences that <strong>having fun is important</strong>. Now, I don't 
                            recognize stress or anxiety as something we should aim at getting rid of - in fact it can be 
                            a favorable feeling - but it many cases it can 
                            also become unpleasant when our reaction is based on fear.
                            It is why I emphasize the need to take care of our mental health and write about it 
                            in <Link href="/blog">my blog</Link>. I want to help people cope better in a world that can be 
                            quite stressfull. Lowering our stress level gives us <strong>more joy</strong> and 
                            makes us more productive.
                        </p>
                        <p className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                            Being joyful and showing love to others tends to energize people around us. Each day 
                            I spend time meditating on how <strong>I improve my personal qualities</strong> in an effort
                            to improve my relations and pass a bit of the goodness I have received on to others.
                        </p>
                    </div>
                </Section>
            </Base>
        );
    }
}

export default WhoIAm;
