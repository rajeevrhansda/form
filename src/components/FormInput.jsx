import './formInput.css'

export default function FormInput(props) {
    return (
        <div className='formInput'>
            {/* <label>Username</label> */}
            <input placeholder={props.placeholder} ref={props.refer} />
        </div>
    )
}
