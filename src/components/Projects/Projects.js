import s from './Projects.module.css';

function Projects({ label, link, title, gidHub, tech, duty }) {
  return (
    <li className={s.item}>
      <div>
        <a className={s.link} href={link} target="_blank" rel="noreferrer">
          {label}
        </a>
        <a className={s.link} href={gidHub} target="_blank" rel="noreferrer">
          {title}
        </a>
        <span>
          <b>[</b> <span className={s.name}>{tech}</span> <b>]</b>
        </span>
        <p className={s.text}>{duty}</p>
      </div>
    </li>
  );
}

export default Projects;
