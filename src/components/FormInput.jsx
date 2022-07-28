import './formInput.css'

export default function FormInput(props) {
    const { label, errorMessage, onChange, id, ...inputProps} = props
    return (
        <div className='formInput'>
            <label>{label}</label>
            <input {...inputProps} onChange={onChange}  autoComplete="on" />
            <span>{errorMessage}</span>
        </div>
    )
}
