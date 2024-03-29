import Link from 'next/link';
import React from 'react';
import { shuffle } from '../../utils/shuffle';

import { HeroOneButton } from './HeroOneButton';
import { Section } from '../layout/Section';
import { InView } from 'react-intersection-observer';

interface SentenceEntry {
  text: string;
  tags: string[];
}

class Hero extends React.Component {

  sentences: SentenceEntry[] = [
    { text: 'develop simplicity at scale', tags: ['#simplicity'] },
    { text: 'design well-structured REST APIs', tags: ['#designthinking', '#simplicity', '#softwarearchitecture'] },
    { text: 'write clean and testable code', tags: ['#simplicity', '#softwarearchitecture'] },
    { text: 'empathize with the end-users', tags: ['#designthinking'] },
    { text: 'improve my ability to focus', tags: ['#mentalhealth', '#simplicity'] },
    { text: 'design rock solid user interfaces', tags: ['#designthinking', '#softwarearchitecture'] },
    { text: 'prioritize quality in code', tags: ['#simplicity', '#softwarearchitecture'] },
    { text: 'learn new technologies fast', tags: ['#softwarearchitecture'] },
    { text: 'rest well to maximize my performance', tags: ['#mentalhealth'] },
    { text: 'appreciate good relations', tags: ['#mentalhealth'] }
  ];
  sentenceIndex = 0;
  sentenceTimer?: any;
  sentenceElement?: HTMLSpanElement;
  tagElement?: HTMLElement;
  inView: boolean = true;
  
  async typeSentence(sentence: string, eleRef: HTMLElement, delay = 60) {
    console.log('Typing sentence');
    const letters = sentence.split('');
    let i = 0;
    while (i < letters.length) {
      await this.waitForMs(delay + Math.floor(Math.random() * 50));
      eleRef.textContent = eleRef.textContent == null ? letters[i]! : eleRef.textContent! + letters[i];
      i++
    }
    return;
  }

  async addTags(tags: string[], eleRef: HTMLElement) {
    console.log('Adding tags');
    eleRef.setAttribute('pause', 'true');
    
    const wrapper = document.createElement('div');
    tags.forEach(t => {
      const tagEl = document.createElement('sl-badge');
      tagEl.textContent = t;
      tagEl.setAttribute('type', 'default');
      //tagEl.classList.add('mx-1')
      wrapper.appendChild(tagEl);
    });
    eleRef.appendChild(wrapper);
    await this.waitForMs(300);
    console.log('Fading in tags');
    eleRef.setAttribute('pause', 'false');
    return;
  }

  async deleteSentence(eleRef: HTMLElement, delay = 30) {
    for (let i = eleRef.textContent!.length - 1; i >= 0; i--) {
      await this.waitForMs(delay);
      eleRef.textContent = eleRef.textContent!.substring(0, i)
    }
    return;
  }

  async deleteTags(eleRef: HTMLElement) {
    while (eleRef.childNodes.length > 0) {
      eleRef.removeChild(eleRef.firstChild!);
    }

    return;
  }

  waitForMs(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }



  async showNextSentence() {
    console.log('Showing next');
    if(this.tagElement == null || this.sentenceElement == null) return;
    this.deleteTags(this.tagElement!);
    await this.deleteSentence(this.sentenceElement!);
    await this.waitForMs(500);
    this.addTags(this.sentences[this.sentenceIndex]!.tags, this.tagElement!);
    await this.typeSentence(this.sentences[this.sentenceIndex]!.text, this.sentenceElement!);
    this.sentenceIndex++;

    if (this.sentenceIndex >= this.sentences.length) {
      this.sentenceIndex = 0;
    }
  }

  async loop() {
    if(this.inView) {
      await this.showNextSentence();
    }

    clearTimeout(this.sentenceTimer);
    this.sentenceTimer = setTimeout(async () => this.loop(), 4500);
  }

  componentDidMount() {
    shuffle(this.sentences);
    setTimeout(async () => this.loop(), 500);
  }

  componentWillUnmount() {
    clearTimeout(this.sentenceTimer);
  }

  render() {
    return (
        <Section yPadding="pt-20 pb-32">
          <HeroOneButton
            title={
              <>
                {'Hi there '}
                <sl-animation name="tada" duration="60000"><div style={{'display':'inline-block'}}>👋</div></sl-animation>
                {' \n'}
                <span className="text-blue-500">I'm Michael Krog!</span>
              </>
            }
            description={
              <>
              <InView as="div" onChange={(inView, _) => this.inView = inView}>

                <div className="items-center" >
                  <span>What I do is </span>
                  <span ref={el => this.sentenceElement = el!} className="text-blue-700" id="sentence"></span>
                  <span className="input-cursor -mb-1"></span>
                </div>
                <div className="hero__tags">
                  <sl-animation name="fadeIn" ref={(el: HTMLElement) => this.tagElement = el} pause="true" iterations="1" duration="300" easing="easeOut">
                  </sl-animation>
                </div>
                </InView>
              </>
            }
            button={
              <Link href="/blog">
                <a>
                  <sl-button size="large" type="primary">Let me tell you how</sl-button>
                </a>
              </Link>
            }
          />
          <style jsx>
          {`
        @keyframes blink {
          0% {opacity: 1;}
          40% {opacity: 1;}
          60% {opacity: 0;}
          100% {opacity: 0;}
        }
        .navbar :global(li) {
          // @apply mx-4;
        }

        .input-cursor { 
          display: inline-block;
          width: 2px;
          height: 1em;
          background-color: rgb(113,128,150);
          margin-left: 0.1em;
          top: 4px;
          font-size: 1.5rem;
          animation: blink .6s linear infinite alternate;
        }

        .hero__tags {
          height: 2rem;
          margin-top: -0.7rem;
        }
      `}
        </style>
        </Section>
        
    )
  }
}

export { Hero };
