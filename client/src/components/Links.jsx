import CardHeading from "./CardHeading";
import LabelInput from "./LabelInput";
function Links(props) {
    return (
        <div className="major-card" hidden={props.hidden}>
            <div className="card">
                <div className="card-body">
                    <CardHeading heading="Links"/>
                    <LabelInput
                        divClassName="form-group mt-2"
                        labelFor="ldField"
                        labelText="Linked In Url"
                        inputId="ldField"
                        inputPlaceholder="Enter linkedIn url"
                        inputClassName="form-control" />

                    <LabelInput
                        divClassName="form-group mt-2"
                        labelFor="twField"
                        labelText="Twitter id"
                        inputId="twField"
                        inputPlaceholder="Enter twitter id"
                        inputClassName="form-control" />
                </div>
            </div>
        </div>
    );
}

export default Links;