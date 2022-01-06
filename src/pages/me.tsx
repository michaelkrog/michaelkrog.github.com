import Image from 'next/image'
import image1 from '../../public/assets/images/michael/image1.jpg';
import image2 from '../../public/assets/images/michael/image2.jpg';
import image3 from '../../public/assets/images/michael/image3.jpg';
import image4 from '../../public/assets/images/michael/image4.jpg';
import React, { ReactNode } from 'react';
import { Section } from '../components/layout/Section';
import { Base } from '../templates/Base';
import { shuffle } from '../utils/shuffle';

class Me extends React.Component {
    imageClasses = 'rounded-full drop-shadow';
    images: ReactNode[] = shuffle([
        <Image className={this.imageClasses} src={image1} title="Me on a sunny day" layout="fill" objectFit="cover" />,
        <Image className={this.imageClasses} src={image2} title="Me craving a Milk Shake" layout="fill" objectFit="cover" />,
        <Image className={this.imageClasses} src={image3} title="Me with my beautiful wife" layout="fill" objectFit="cover" />,
        <Image className={this.imageClasses} src={image4} title="Me happy to be alive" layout="fill" objectFit="cover" />
    ]);

    render() {
        return (
            <Base>
                <Section>
                    <h3 className="text-3xl text-gray-900 border-b">Who I am</h3>
                    <div className="flex items-center space-x-4 lg:space-x-6">
                        <div className="my-4 w-20 h-20 lg:w-24 lg:h-24 " style={{ position: 'relative' }}>
                            {this.images[0]}
                        </div>
                        <div className="text-lg leading-6 font-medium space-y-1">
                            <h3>Michael Krog</h3>
                            <p className="text-indigo-600">Senior Software Developer</p>
                        </div>
                    </div>
                    <div className="text-medium">
                    <p className="text-gray-500 mb-2">
                        Software development has been a major interest for me since I was a kid. I love the challenge of making 
                        something complex very easy to use. That is also why I have worked with both frontend, backend, API and 
                        UX design - I want to be able to track users needs all the way to the core.
                    </p>
                    <p className="text-gray-500 mb-2">
                        In 2003 I married Hannah, the love of my life. Together we live in <a className="text-blue-500" href="https://maps.apple.com/?address=Sjælland, Danmark&ll=55.545598,11.697374&q=Sjælland&_ext=EiYpsJNVbCd7S0AxObMC6Jy8JUA5DUQFPYoQTEBBw9CPK5pHKUBQDA==">Denmark</a> where we have a house and a cat - we named it Thorkild. We have a lot of fun.
                        Come to think of it - I think we enjoy fun. And food. Both fun and food is important.
                    </p>
                    <p className="text-gray-500 mb-2">
                        I know fun is important because I have experienced severe stress and anxiety. However, I don't recognize stress or anxiety as particalur dangerous - in fact it can be a favorable feeling - but it many cases it can also become extremely unpleasant when our reaction is based on fear.
                        It is why I emphasize the need to take care of our mental health and write about it in my blog. Lowering our stress level gives us more joy and makes us more productive.
                    </p>
                  </div>


                    <h3 className="text-3xl text-gray-900 border-b">What I do</h3>
                    <p className="text-gray-500 mb-2">
                        -
                    </p>
                    <h3 className="text-3xl text-gray-900 border-b">What I did</h3>
                    <p className="text-gray-500 mb-2">
                        -
                    </p>
                </Section>
            </Base>
        );
    }
}

export default Me;
