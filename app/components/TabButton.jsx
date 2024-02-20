import './tabbutton.css';

const TabButton = ({ active, selectTab, children}) => {

    const buttonClasses = active ? 'active-btn' : 'inactive-btn'

  return (
    <button className='btn-st' onClick={selectTab}>
        <h3 className={buttonClasses}>{children}</h3>
    </button>
  )
}

export default TabButton