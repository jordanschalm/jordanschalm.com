import React from 'react'
import Terminal from './../components/Terminal'
import Preface from './../components/Preface'
import Header from './../components/Header'
import Project from './../components/Project'
import Contact from './../components/Contact'

import data from './../data'

const highlights = [...data.projects, ...data.presentations, ...data.writing].filter(p => p.highlight)

const HomePage = () => (
  <div>
    <Terminal text="Jordan Schalm" />
    <Preface />
    <Header title="Highlights" />
    {highlights.map(project => (
      <Project key={project.name} description={project.long} {...project} />
    ))}
    <Header title="Writing" />
    {data.writing.map(project => (
      <Project key={project.name} description={project.short} {...project} />
    ))}
    <Header title="Presentations" />
    {data.presentations.map(project => (
      <Project key={project.name} description={project.short} {...project} />
    ))}
    <Header title="Other Things" />
    {data.projects.map(project => (
      <Project key={project.name} description={project.short} {...project} />
    ))}
    <Header title="Contact" />
    <Contact />
  </div>
)

export default HomePage
