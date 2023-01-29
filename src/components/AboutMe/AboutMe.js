import Projects from '../Projects';
import Experience from '../Experience';
import Education from '../Education';
import PropTypes from 'prop-types';
import s from './AboutMe.module.css';

function AboutMe({ commandProjects, ownProjects, experience, education }) {
  return (
    <div className={s.container}>
      <div className={s.section}>
        <h1 className={s.name}>Olena Burduzha </h1>
        <h2 className={s.profession}>JUNIOR FRONT-END DEVELOPER</h2>
        <p className={s.description}>
          I'm a Front-End Developer and looking for an interesting job. I want
          to be in a good team to improve my skills and use them for interesting
          tasks. I have sound knowledge of HTML, CSS, JavaScript, React, React
          Redux, TypeScript, Node.js. I am a fast learner, responsible, and
          ready for challenging tasks.
        </p>
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Projects Experience</h3>
        <h4 className={s.subTitle}>
          <span className={s.typeProject}>Teamwork</span> projects
        </h4>
        <ol className={s.list}>
          {commandProjects.map(
            ({ id, label, link, gidHub, title, tech, duty }) => (
              <Projects
                key={id}
                label={label}
                link={link}
                gidHub={gidHub}
                title={title}
                tech={tech}
                duty={duty}
              />
            )
          )}
        </ol>
        <h4 className={s.subTitle}>
          <span className={s.typeProject}>Personal</span> projects
        </h4>
        <ol>
          {ownProjects.map(({ id, label, link, gidHub, title, tech, duty }) => (
            <Projects
              key={id}
              label={label}
              link={link}
              gidHub={gidHub}
              title={title}
              tech={tech}
              duty={duty}
            />
          ))}
        </ol>
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Work Experience</h3>
        <ul>
          {experience.map(
            ({
              id,
              profession,
              company,
              time,
              country,
              duties,
              achievement,
            }) => (
              <Experience
                key={id}
                profession={profession}
                company={company}
                time={time}
                country={country}
                duties={duties}
                achievement={achievement}
              />
            )
          )}
        </ul>
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Education</h3>
        <ul>
          {education.map(({ id, university, label, time, link }) => (
            <Education
              key={id}
              university={university}
              label={label}
              time={time}
              link={link}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

AboutMe.propTypes = {
  commandProjects: PropTypes.arrayOf(PropTypes.object),
  ownProjects: PropTypes.arrayOf(PropTypes.object),
  experience: PropTypes.arrayOf(PropTypes.object),
  education: PropTypes.arrayOf(PropTypes.object),
};

export default AboutMe;
