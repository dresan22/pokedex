import './button.styles.css'

const Button = ({ children, icon, disabled, onPress }) => {
    return (
        <button type="submit" className={disabled ? 'disabled' : ''} onClick={onPress}>
            <div className='button-content'>
                {icon}
                {children}
            </div>
        </button>
    );
}

export default Button;