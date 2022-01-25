import React, { ReactNode } from 'react';
import { Section } from '../components/layout/Section';
import { Base } from '../templates/Base';
import { shuffle } from '../utils/shuffle';
import Tabs from '../components/Tabs';
import Head from 'next/head';

class WhoIAm extends React.Component {
    imageClasses = 'rounded-full drop-shadow object-cover w-24 h-24 lg:w-27 lg:h-27';
    tooltipPlacement = 'bottom';
    images: ReactNode[] = shuffle([
        <img className={this.imageClasses} src="/assets/images/michael/image1.jpg" />
        ,
        <sl-tooltip content="Me&nbsp;craving&nbsp;a&nbsp;Milk&nbsp;Shake" placement={this.tooltipPlacement}>
            <img className={this.imageClasses} src="/assets/images/michael/image2.jpg" />
        </sl-tooltip>,
        <sl-tooltip content="Me&nbsp;with&nbsp;my&nbsp;beautiful&nbsp;Hannah" placement={this.tooltipPlacement}>
            <img className={this.imageClasses} src="/assets/images/michael/image3.jpg" />
        </sl-tooltip>,
        <sl-tooltip content="Me&nbsp;happy&nbsp;to&nbsp;be&nbsp;alive" placement={this.tooltipPlacement}>
            <img className={this.imageClasses} src="/assets/images/michael/image4.jpg" />
        </sl-tooltip>
    ]);
    
    title = 'Who I am';
    description = 'A short story about who I am';

    render() {
        const url = `https://michaelkrog.dev/who-i-am`;
        const imageUrl = 'https://michaelkrog.dev/assets/images/michael/image1.jpg';
        return (
            <Base title={this.title} description={this.description}>
                <Head>
                    <meta property="og:type" content="website"></meta>
                    <meta property="og:title" content={this.title}></meta>
                    <meta property="og:url" content={url}></meta>
                    <meta property="og:description" content={this.description}></meta>
                    
                    <meta property="og:image" content={imageUrl} />
                </Head>
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
                            Through years of personal experience I have learned how important code quality is. I have
                            seen companies come and go, but it is always the ones that focus on delivering easy to use
                            products of good quality that prevails in the end. It makes the customers as well as the engineers
                            want to stay.
                        </p>
                        <p className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                            I find that a both a <strong>strong focus</strong> and a sense of <strong>humor is important</strong>.
                            It helps us cope in very stressfull situations, gives us more joy and even makes us more productive.
                            And sharing our joy tends to energize people around us. That is why I spend time each day finding out how
                            I can do it even more.
                        </p>
                        <p className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                            From a more personal perspective, in 2003 I married Hannah - the <strong>love of my life</strong>.
                            Together we live
                            in <a href="https://maps.apple.com/?address=Sjælland, Danmark&ll=55.545598,11.697374&q=Sjælland&_ext=EiYpsJNVbCd7S0AxObMC6Jy8JUA5DUQFPYoQTEBBw9CPK5pHKUBQDA==">Denmark</a> where
                            we have a house and a cat - we named it Thorkild. We have a lot of fun.
                            Come to think of it - I think we enjoy fun. And food. Both fun and food is important. <sl-icon name="emoji-smile"></sl-icon>
                        </p>
                    </div>
                </Section>
            </Base>
        );
    }
}

export default WhoIAm;
