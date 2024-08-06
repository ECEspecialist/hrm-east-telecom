import PropsTypes from 'prop-types'
import './button.css';
import { MdEdit } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import Key from '../../auth/Key';

const Button = ({ onDelete }) => {
    const isAdmin = Key((state) => state.isAdmin);
    return (
        <div className="action_state">
            <button className='button_view'><IoEyeOutline className="view_icon" /><strong>View</strong></button>
            {isAdmin ? (
                <>
                    <button className='button_edit'><MdEdit className="edit_icon" /><strong>Edit</strong></button>
                    <button className='button_delete' onClick={onDelete}><RiDeleteBin6Line className="delete_icon" /><strong>Delete</strong></button>
                </>
            ) : null}
        </div>
    );
};

Button.propTypes={
    onDelete:PropsTypes.string,
}

export default Button;
