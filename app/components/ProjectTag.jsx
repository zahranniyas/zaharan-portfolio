import './projecttag.css';

const ProjectTag = ({ name, onClick, isSelected }) => {

    const buttonStyle = isSelected ? 'active-pro-btn' : 'inactive-pro-btn';

  return (
    <button onClick={() => onClick(name)} className={`${buttonStyle}`}>{name}</button>
  )
}

export default ProjectTag