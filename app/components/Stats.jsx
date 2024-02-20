'use client';
import './stats.css';
import dynamic from 'next/dynamic';

const AnimatedNumbers = dynamic(() => {
    return import('react-animated-numbers');
}, { ssr: false });


const statsList = [
    {
        name: 'Happy Clients',
        value: 20,
        prefix: '+'
    },
    {
        name: 'Projects Completed',
        value: 50,
        prefix: '+'
    },
    {
        name: 'Lines of Code',
        value: 6000,
        prefix: '+'
    },
]

const Stats = () => {
  return (
    <section className='stats-main'>
        <div className='stats-container'>
            {statsList.map((achievements, index) => {
                return(
                    <div className='stats-item' key={index}>
                        <div className='stats-item-title-main'>
                            <AnimatedNumbers
                                includeComma
                                animateToNumber={achievements.value}
                                locale='en-US'
                                className='stats-item-title'
                                fontStyle={{fontFamily: 'heavy'}}
                                transitions={(index) => ({
                                    type: "spring",
                                    duration: index + 0.01,
                                  })}
                            />
                            {achievements.prefix}
                            </div>
                        <p>{achievements.name}</p>
                    </div>

                )
            })}
        </div>
    </section>
  )
}

export default Stats