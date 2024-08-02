
import PropTypes from 'prop-types';
function Button(props){
     return(
          <button className={`button ${props.classname}`}>props.content</button>
     )
}

Button.propTypes={
     content:PropTypes.string,
     classname:PropTypes.string
}

Button.DefaultProps={
     content:"click me",
     classname:""
}

export default Button