
import React, { ReactNode } from 'react';
import { Section } from '../components/layout/Section';
import { Base } from '../templates/Base';

class Me extends React.Component {

    render() {
        return (
            <Base>
                <Section>
                    <h3 className="text-3xl text-gray-900 border-b">My Contact Details</h3>
                    <div className="text-lg leading-6 font-medium space-y-1">
                            <h3>Michael Krog</h3>
                            <p className="text-indigo-600">Senior Software Developer</p>
                        </div>
                </Section>
            </Base>
        );
    }
}

export default Me;
