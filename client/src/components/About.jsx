import CardHeading from "./CardHeading";
import LabelInput from "./LabelInput";
function About(props) {
    return (
        <div className="major-card" hidden={props.hidden}>
            <div className="card">
                <div className="card-body">
                    <CardHeading heading="About" />
                    <LabelInput
                        divClassName="form-group"
                        labelFor="nameFielld"
                        labelText="Name"
                        inputId="nameField"
                        inputPlaceholder="Enter name"
                        inputClassName="form-control" />

                    <LabelInput
                        divClassName="form-group mt-2"
                        labelFor="contactField"
                        labelText="PHONE"
                        inputId="contactField"
                        inputPlaceholder="Enter phone number"
                        inputClassName="form-control" />

                    <div className="form-group mt-2">
                        <label htmlFor="adField">ADDRESS</label>
                        <textarea type="text" id="adField" placeholder="Enter address" className="form-control " row="5" ></textarea>
                    </div>

                    <LabelInput
                        divClassName="form-group mt-2"
                        labelFor="emailAdField"
                        labelText="E-mail address"
                        inputId="emailAdField"
                        inputPlaceholder="Enter email"
                        inputClassName="form-control" />
                </div>
            </div>
        </div>
    );
}

export default About;