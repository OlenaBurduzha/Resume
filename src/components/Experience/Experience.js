import s from './Experience.module.css';

function Experience({
  profession,
  company,
  time,
  country,
  duties,
  achievement,
}) {
  return (
    <li className={s.item}>
      <h4 className={s.title}>
        {profession} <span className={s.company}>{company}</span>
      </h4>
      <span className={s.time}>
        {time}
        <span className={s.divider}> |</span> {country}
      </span>
      <ul>
        {duties.map(({ id, duty }) => (
          <li key={id} className={s.duty}>
            {duty}
          </li>
        ))}
      </ul>
      <p className={s.duty}>Achievement:{achievement}</p>
    </li>
  );
}

export default Experience;
