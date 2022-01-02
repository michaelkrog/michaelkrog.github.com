import { randomInt } from 'crypto';
import Link from 'next/link';
import React from 'react';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

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
    { text: 'prioritize mental health', tags: ['#mentalhealth', '#simplicity'] },
    { text: 'design rock solid user interfaces', tags: ['#designthinking', '#softwarearchitecture'] }
  ];
  sentenceIndex = 0;
  sentenceTimer?: any;
  sentenceElement?: HTMLSpanElement;
  tagElement?: HTMLElement;

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

  shuffle(array: SentenceEntry[]) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex]!, array[currentIndex]!];
    }
  
    return array;
  }

  async showNextSentence() {
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
    await this.showNextSentence();

    clearTimeout(this.sentenceTimer);
    this.sentenceTimer = setTimeout(async () => this.loop(), 6000);
  }

  componentDidMount() {
    this.shuffle(this.sentences);
    this.loop();
  }

  componentWillUnmount() {
    clearTimeout(this.sentenceTimer);
  }

  render() {
    return (
      <Background color="bg-gray-100">
        <Section yPadding="py-6">
          <NavbarTwoColumns logo={<Logo xl />}>
            <li>
              <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
                <a>GitHub</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Sign in</a>
              </Link>
            </li>
          </NavbarTwoColumns>
        </Section>

        <Section yPadding="pt-20 pb-32">
          <HeroOneButton
            title={
              <>
                {'Hi there '}
                <sl-animation name="tada" duration="60000"><div style={{'display':'inline-block'}}>👋</div></sl-animation>
                {' \n'}
                <span className="text-primary-500">I'm Michael Krog!</span>
              </>
            }
            description={
              <>
                <div className="inline-flex justify-items-center items-center">
                  <span>What I do is </span>
                  <span ref={el => this.sentenceElement = el!} className="text-primary-700 ml-1" id="sentence"></span>
                  <span className="input-cursor"></span>
                </div>
                <div className="hero__tags">
                  <sl-animation name="fadeIn" ref={(el: HTMLElement) => this.tagElement = el} pause="true" iterations="1" duration="300" easing="easeOut">
                  </sl-animation>
                </div>
              </>
            }
            button={
              <Link href="https://creativedesignsguru.com/category/nextjs/">
                <a>
                  <sl-button size="large" type="primary">Let me tell you how</sl-button>
                </a>
              </Link>
            }
          />
        </Section>
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
      </Background>
    )
  }
}

export { Hero };
