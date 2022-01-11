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
                    <div className="text-medium">
                        <p className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                            This page will soon describe what I currently accomplish professionally
                        </p>

                    </div>
                </Section>
            </Base>
        );
    }
}


export default WhatIDo;
