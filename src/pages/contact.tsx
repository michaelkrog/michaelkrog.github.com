
import React from 'react';
import { Section } from '../components/layout/Section';
import { Base } from '../templates/Base';

class Me extends React.Component {

    render() {
        return (
            <Base>
                <Section>
                    <h3 className="text-3xl text-gray-900 border-b">My Contact Details</h3>
                    <div className="text-lg leading-6 font-medium space-y-1 mt-4">
                            <h3>Michael Krog</h3>
                            <p className="text-indigo-600">Senior Software Developer</p>
                        </div>
                    <div className="text-lg leading-6 font-medium space-y-1 mt-4">
                    <p className="text-gray-500">mic@apaq.dk</p>
                    <p className="text-gray-500 space-x-2">
                        <a href="https://www.linkedin.com/in/michael-krog-bbba2593/"><sl-icon name="linkedin"></sl-icon></a>
                        <a href="https://github.com/michaelkrog"><sl-icon name="github"></sl-icon></a>
                    </p>
                    </div>
                </Section>
            </Base>
        );
    }
}

export default Me;
