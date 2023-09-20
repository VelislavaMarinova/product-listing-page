import  "./TextField.css";
const TextField = ({ styles,label, component: Component = 'input', ...rest }) => {
    return (
      <div className={styles}>
        <label>
          {label}
          <Component {...rest} />
        </label>
      </div>
    )
  }
  
  export default TextField