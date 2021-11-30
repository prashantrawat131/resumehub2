import CardHeading from "./CardHeading";
import LabelInput from "./LabelInput";
function HighSchool(props) {
    return (
        <div className="major-card" hidden={props.hidden}>
            <div className="card">
                <div className="card-body">
                    <CardHeading heading="High School Details" />
                    
                    <LabelInput
                        divClassName="mt-2"
                        labelFor="highSchoolName"
                        labelText="School name"
                        inputId="highSchoolName"
                        inputPlaceholder="Abc School"
                        inputClassName="form-control"
                    />
                    <LabelInput
                        divClassName="mt-2"
                        labelFor="highSchoolLocation"
                        labelText="Location"
                        inputId="highSchoolLocation"
                        inputPlaceholder="New Delhi"
                        inputClassName="form-control" />
                    <LabelInput
                        divClassName="mt-2"
                        labelFor="highSchoolPassYear"
                        labelText="Passing year"
                        inputId="highSchoolPassYear"
                        inputPlaceholder="2019"
                        inputClassName="form-control" />
                </div>
            </div>
        </div>
    );
}

export default HighSchool;