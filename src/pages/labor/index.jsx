import React from 'react'

const linksData = [
  {'Documents': [
    {'title': 'Birth Plan', 'link': '/files/birth-plan.pdf'},
    {'title':'Birth Information', 'link': '/files/birth-information.pdf'}
  ]},
  {'Breathing': [
    {'title': 'Breathing Techniques', 'link': '/files/breathing-techniques.mp3'}
  ]},
  {'Relaxtion': [
    {'title': 'Relaxtion Audio', 'link': '/files/relaxation.mp3'}
  ]},
  {'Spotify Music': [
    {'title':'Relaxing Massage', 'link': 'https://open.spotify.com/playlist/37i9dQZF1DXebxttQCq0zA?si=uQgMfWPGQIi34J2T6-iFOg'},
    {'title':'Birth Dance Party', 'link': 'https://open.spotify.com/playlist/6KCpbfGOJTcUrkOFCoIkSt?si=NBS8oOTwRX2zRXQH-jEl3Q'}
  ]},
  {'Meditation' : [ 
    {'title':'Visualization Meditation', 'link': 'https://www.youtube.com/watch?v=qYyV8yvC62c'},
    {'title':'Wisdom Power Strength Meditation', 'link': 'https://www.youtube.com/watch?v=U_Nvf7b9Nko'},
    {'title':'Washing Away Fear Meditation', 'link': 'https://www.youtube.com/watch?v=lB9gHnJWV9w'},
  ]},
  { 'For Rio': [
    {'title': 'Birth Partner Notes', 'link': '/files/birth-partner-notes.pdf'}
  ]}
]

const LaborPage = () => {
  return (
    <>
      {linksData.map((datum) => {
        const title = Object.keys(datum)

        return (
          <>
            <h2>{title}</h2>
            <ul>
              {
                Object.values(datum[title]).map((obj) => {
                  return (
                    <>
                      <li><h3>{obj.title}</h3></li>
                      <a href={obj.link}target="_blank" rel="noopener noreferrer">{obj.link}</a>
                    </>
                  )
                })
              }
              
            </ul>
          </>
        )
      })}
    </>
  )
}

export default LaborPage