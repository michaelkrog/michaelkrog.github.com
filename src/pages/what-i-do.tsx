import React from 'react';
import { Section } from '../components/layout/Section';
import { Base } from '../templates/Base';
import Tabs from '../components/Tabs';
import Head from 'next/head';

class WhatIDo extends React.Component {

    title = 'What I do';
    description = 'My resume of projects and technologies I currently work with';

    render() {
        const url = `https://michaelkrog.dev/what-i-do`;
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
