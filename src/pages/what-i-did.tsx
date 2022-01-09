import React from 'react';
import { Section } from '../components/layout/Section';
import { Base } from '../templates/Base';
import Tabs from '../components/Tabs';

class WhatIDid extends React.Component {


    render() {
        return (
            <Base>
                <Section>
                    <Tabs index={2}></Tabs>
                    <div className="text-medium">
                        <p className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                            This page will woon describe what I have accomplished so far professionally.
                        </p>

                    </div>




                </Section>
            </Base>
        );
    }
}

export default WhatIDid;
