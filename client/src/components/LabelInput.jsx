function LabelInput(props) {
    return (
        <div className={props.divClassName}>
            <label htmlFor={props.LabelFor}>{props.labelText}</label>
            <input 
            type="text"
            name={props.name}
            id={props.inputId} 
            onChange={props.onChange}
            placeholder={props.inputPlaceholder} 
            className={props.inputClassName} />
        </div>
    );
}

export default LabelInput;