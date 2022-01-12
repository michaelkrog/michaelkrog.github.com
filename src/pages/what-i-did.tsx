import React, { Fragment } from 'react';
import { Section } from '../components/layout/Section';
import { Base } from '../templates/Base';
import Tabs from '../components/Tabs';

const activity = [

  {
    id: '1_1',
    type: 'hire',
    title: 'Software Developer',
    imageUrl:
      'https://www.audio.dk/wp-content/uploads/2017/02/audio-logo-512.png',
    company: { name: 'Audio Media', href: 'http://audio.dk' },
    date: 'January 2000',
    comment: ''
  },
  {
    id: '1_2',
    type: 'assignment',
    description: 'Developed and maintained a CMS and website with sales of articles for both online reading and download of PDFs.',
    tags: ['Java', 'Sql', 'Javascript', 'Html', 'CSS']
  },
  {
    id: '2_1',
    type: 'hire',
    title: 'Senior Software Developer',
    imageUrl:
      'https://usercontent.one/wp/www.conscius.com/wp-content/uploads/2018/08/favicon_114x114px.png',
    company: { name: 'Conscius', href: 'http://conscius.com' },
    date: 'May 2005',
  },
  {
    id: '2_2',
    type: 'assignment',
    description: 'Developed and maintained new UI for existing CMS.',
    tags: ['Java', 'Javascript', 'Html', 'CSS']
  },
  {
    id: '2_3',
    type: 'assignment',
    description: 'Developed fast REST Api with Financial News related content.',
    tags: ['Java', 'Lucene', 'Spring']
  },
  {
    id: '3_1',
    type: 'hire',
    title: 'Software Architect',
    imageUrl:
      'data:image/png;base64,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',
    company: { name: 'Nykredit', href: 'http://nykredit.dk' },
    date: 'May 2010',
  },
  {
    id: '3_2',
    type: 'assignment',
    description: 'Developed tools for automatically creating documentation videos based on unit tests.',
    tags: ['Java', 'Spring', 'Selenium', 'JUnit']
  },
  {
    id: '3_3',
    type: 'assignment',
    description: 'Continued development on internally developed CI server.',
    tags: ['Java', 'Spring']
  },
  {
    id: '4_1',
    type: 'hire',
    title: 'Senior Software Developer',
    imageUrl:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAnFBMVEXEFhz///9BQELBAADQXF/DCBHDDBTOS0/tx8jbhojCAAbGIif129zekJE+PT86OTsnJik1NDeTk5Oop6h5eHlVVFYwLzFJSUrMzMxIR0nx8fExMDLj4+Pr6+tRUFL4+PjV1dWJiIljYmS0tLRvb3Cjo6Pd3d0kIybDw8SbmpuysrJnZmeAgIHIx8iLiou8u7zZfYD56enlp6nNQ0YJHsCDAAAHIklEQVR4nO3da5ebNhAG4OD0mqYIcZEBcTM3G2ObNv3//63AOs0muyDZRmjk6v2Y5OzZJxgwYmb0wWAmDWv/UFT2xS3b3POSYPMtQZIkXp7nbXm6XOymcbrD2c+iMEzZP3elfJj7yzArmjJBhBCKMULmmM2bjH+MhmCMKe3/uUVwkOTurhdn9TT2828rZEoYZk6J+l8Uv0fiyYjuwT3XtCeQf30Un0/vCuvKwwSj+2jvYIn7vvD3Tx+E54+3wsgOLHzngZsibgEJzzlZmAdL2CVkcR4kYSbGB0e4s8T4oAijDRbkAyI8C/qAghF2e3E+EMKDJRIIQFiLBQIQBgLPQRBCW9xVFIYwIoKB0oWnxR4ipoJyqcLwlhvF9Un3pmDLC6UKHd6z0MSEBHm5s2+M47/vW03o8V1ITZJUMwsSd2UdYch3nTHNw7K69YRnygVMRCyerSOsuE5DEgsAriTkulegnQjgSsKc50JDMoWFW64P6cQNTQlhwPZtNlgIEJIQqSzk+pRqoRZqoRZqoRZqoRZqoRZCEG5uX0P8GrOcXuCBJLw/JrIuzy3ss596fn4aoaWFWqiFWqiFWqiFWqiFWghA+OzfvE3rNAEEJbTuDs6LKSAk4fOvYmihFmqhFmqhFmqhFmqhFmqhFjKECY+QqizkakZQuoLWffoq6AtXJbutsPDI1Y1AhXxM1xH6XD0z5kT3mQpCzq4glAg4FVfq7OJquBiWPfNu6cYZcN15lATtqamcGzP9H7NWh+UNjdymOYwRujF03060hT1Plywu5QpX6HQO5AqN3bN3qxvpvdOulBEa2dNPjTCOzz75wzAcoUQIQrFEEELjIHDIEAyhEefC7otAhP31Bgu6MYIRGmlDhRjhCA0jbAhZ/msqJGGfQ0npwkjp30t/TFiUe4LRctdW3AITDskcN7AeZb4MaSWklTuBZzqh75wSPM7YfRmxy+Bch+3icfJsH7zJ3UtV+JPrdNKFV2fkF9XOLXMvQOSlkmv49V8Vdg1Dhnv+1vPy0t3ZjXM8nLMoZs97WWPK7ke28HXSIWEcRXUUjwmHP7jpR7zO359XyG1CFaOF6kcL1Y8Wqh8tVD9aqH60UP1oofrRQvWjhepHC9VPL/zyp/h8WeJ3TdMo8w9dd+xTdN3hcPb9rI7i+eW+XvjTCouW/zxEi/1j4+YJGhZqKaUvlVZDyMvKLUWbJC+HXd78+s3y8yD8WfjC8y+/3ouLuotnDfu/odkl91e7vO3N/NQU5+jrcYUsjAt30x+fm1+dDMV3xKLb1j5mgIV1k1iPvRgaygwJ8WEK42q70PZvpgdRmJULbt63hSf0vUXfsyfQhJm3cF0PMGFcLr67HSyhI6AOBJIwFFKUBUhYm0LqzeEIu72YykEwQmHVn1CE4spbgQgFVmHDEPoCC5RBCMPl91gGJsy5bxPjk9/bXB/7x9HT5vc7wJsQvnlXXLuG9TpCErcqzlkdXVP3yTLfP3TF0XEa+3Jyyzb3km2wQZQM1WmWVckXxlwnISKBnd1QX3atTotSAM/4Jcdn1LRONb/u+0gX8uxjS9q7fQCELfM6alrH+33yhexDaOLHeqxlC9kDD6zoIaBsYcoEkvNjQNnCA+uh9/GdFyULXdYxpA/vDipZyDqEuHkUKFlYs4QLTByRK2QNVkHuw0DJQtawA9qpLmSNcJqck62KMGV8SKe6+tQRsh6cljgN5QozxqV0gXuFZCFrT3A8PQpcEWHHENIl9nOXKmTdDhcZEydVyBrg9D8Q+lqohVqohVooVHjMPWbyS6yu0LFMjqB9raww4XvniE7KCgPOkZ2uFmqhFmqhFmohcCFzFUN5YcEQ0pm3o2oImWttM68t1BCeWSvCM0UYaggfWfPm/OYtWfjIe4sLZzWcXCGrEsNMpoVpu3+ZFseYkydXyH5/OFenMM6KS9P5nyFbyHwHzFFMA1vIfI+/U13IupjybDQFW8isp+EoVQAuZNVEzV1N1RAy69oI8yACF7KqMfozkVVwAlzIri9FEzOIlRFGzBphytgvDLqQo86bzBPBCzlq9Wk59+UNvJBdRNufi2jmigpfyLXfFMknS2vgCw2Hp8HZJMh+fzC4AkKj5etdQ4QErt0cj0enqprGti+nsvUYu4zCEPL3H45DaK5B12Y8FYQid2MCIjQ6YUQoQnG93GCERiWICEdoFGJmKgASGr6Qjm5IQiP2+BZ51RUaRrP4/B1oQiPbLn0YoQmH18LL7qkFT2iEtrWkEaBw2DcM0cXOR5BCw0iPCVloQy3JlXszyWy0BNLcd1CFA3K3IfjO6VjDVEhKCPI62X3AjNSOSy3KPQLTNF/Gu1jWJj81nT/OMIUtHBKfKzfB45DWbw+8/9UAX3dBG0azUjPw2l1V/DCHFr5wTBr5XWWfytxLxnhe3rZl6Z4udlM5RXfOonBimvC/1qRwRYZG9aMAAAAASUVORK5CYII=',
    company: { name: 'EG A/S', href: 'http://eg.dk' },
    date: 'February 2015',
  },
  {
    id: '4_2',
    type: 'assignment',
    description: 'Created user friendly docker orchestration web interface.',
    tags: ['Java', 'Spring', 'docker', 'swarm', 'kubernetes', 'mongodb', 'Html', 'CSS']
  },
  {
    id: '4_3',
    type: 'assignment',
    description: 'Designed and implemented central Design System.',
    link: 'https://ds.xena.biz',
    tags: ['CSS', 'Webcomponents', 'StencilJs', 'Typescript']
  },
  {
    id: '4_4',
    type: 'assignment',
    description: 'Continued development on accounting system backend for Xena.biz',
    link: 'https://xena.biz',
    tags: ['C#', 'SQL', 'RabbitMQ']
  },
  {
    id: '4_5',
    type: 'assignment',
    description: 'Architected Angular-based Webcomponents for transforming deprecated accounting UI into a modern code base.',
    tags: ['CSS', 'Webcomponents', 'Angular', 'StencilJs', 'Typescript']
  }
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

class WhatIDid extends React.Component {


  render() {
    return (
      <Base>
        <Section>
          <Tabs index={2}></Tabs>
          <div className="flow-root">
            <ul role="list" className="-mb-8 mt-8">
              {activity.map((activityItem, activityItemIdx) => (
                <li key={activityItem.id}>
                  <div className="relative pb-8">
                    {activityItemIdx !== activity.length - 1 ? (
                      <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                    ) : null}
                    <div className="relative flex items-start space-x-3">
                      {activityItem.type === 'comment' ? (
                        <>
                          <div className="relative">
                            <img
                              className="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white"
                              src={activityItem.imageUrl}
                              alt=""
                            />

                            <span className="absolute -bottom-0.5 -right-1 bg-white rounded-tl px-0.5 py-px">
                              <sl-icon name="chat" className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </span>
                          </div>
                          <div className="min-w-0 flex-1">
                            <div>
                              <div className="text-sm">
                                <a href="activityItem.person!.href" className="font-medium text-gray-900">
                                  activityItem.person!.name
                                </a>
                              </div>
                              <p className="mt-0.5 text-sm text-gray-500">Commented {activityItem.date}</p>
                            </div>
                            <div className="mt-2 text-sm text-gray-700">
                              <p>{activityItem.comment}</p>
                            </div>
                          </div>
                        </>
                      ) : activityItem.type === 'hire' ? (
                        <>
                          <div className="relative">
                            <img
                              className="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white"
                              src={activityItem.imageUrl}
                              alt=""
                            />

                          </div>
                          <div className="min-w-0 flex-1">
                            <div>
                              <div className="text-sm text-gray-900 font-semibold">
                                {activityItem.title}
                              </div>
                              <p className="mt-0.5 text-sm text-gray-500">Hired {activityItem.date} at <a href={activityItem.company!.href} className="text-blue-900">
                                {activityItem.company!.name}
                              </a>
                              </p>
                            </div>
                            <div className="mt-2 text-sm text-gray-700">
                              <p>activityItem.comment</p>
                            </div>
                          </div>
                        </>
                      ) : activityItem.type === 'assignment' ? (
                        <>
                          <div>
                            <div className="relative px-1">
                              <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                                <sl-icon name="wrench" className="h-5 w-5 text-gray-500" aria-hidden="true" />
                              </div>
                            </div>
                          </div>
                    <div className="min-w-0 flex-1 py-1.5">
                      <div className="text-sm text-gray-500">
                        {activityItem.description}
                        {activityItem.link != null ? <a target="_blank" className="ml-1 text-blue-500" href={activityItem.link}><sl-icon name="box-arrow-up-right"></sl-icon></a> : null }
                      </div>
                      {activityItem.tags?.map(t => <sl-badge type="info" style={{'margin-right':'0.2rem'}}>{t}</sl-badge>)}
                    </div>
                  </>
                ) : activityItem.type === 'tags' ? (
                  <>
                    <div>
                      <div className="relative px-1">
                        <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                          <sl-icon name="tag" className="h-5 w-5 text-gray-500" aria-hidden="true" />
                        </div>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1 py-0">
                      <div className="text-sm leading-8 text-gray-500">
                        <span className="mr-0.5">
                          <a href="activityItem.person!.href" className="font-medium text-gray-900">
                            activityItem.person!.name
                          </a>{' '}
                          added tags
                        </span>{' '}
                        <span className="mr-0.5">
                          {activityItem.tags!.map((_) => (
                            <Fragment key="tag.name">
                              <a
                                href="tag.href"
                                className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm"
                              >
                                <span className="absolute flex-shrink-0 flex items-center justify-center">
                                  <span
                                    className={classNames('tag.color', 'h-1.5 w-1.5 rounded-full')}
                                    aria-hidden="true"
                                  />
                                </span>
                                <span className="ml-3.5 font-medium text-gray-900">tag.name</span>
                              </a>{' '}
                            </Fragment>
                          ))}
                        </span>
                        <span className="whitespace-nowrap">{activityItem.date}</span>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>


                </Section >
            </Base >
        );
  }
}

export default WhatIDid;
