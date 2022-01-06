import React from 'react';
import { Section } from '../components/layout/Section';
import { Base } from '../templates/Base';
import Tabs from '../components/Tabs';

class WhatIDo extends React.Component {


    render() {
        return (
            <Base>
                <Section>
                    <Tabs index={1}></Tabs>
                    <div className="flex items-center space-x-6 lg:space-x-9">
                        
                        <div className="text-lg leading-6 font-medium space-y-1">
                            <h3>Michael Krog</h3>
                            <p className="text-indigo-600">Senior Software Developer</p>
                        </div>
                    </div>
                    <div className="text-medium">
                        <p className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                            This is what I do!
                        </p>

                    </div>




                </Section>
            </Base>
        );
    }
}


export default WhatIDo;
