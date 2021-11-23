import CardHeading from "./CardHeading";
import LabelInput from "./LabelInput";
function SecondarySchool(props) {
    return (
        <div className="major-card">
            <div className="card">
                <div className="card-body">
                    <CardHeading heading="Secondary School Details" />
                    
                    <LabelInput
                        divClassName="mt-2"
                        labelFor="secondarySchoolName"
                        labelText="School name"
                        inputId="secondarySchoolName"
                        inputPlaceholder="Abc School"
                        inputClassName="form-control"
                    />
                    <LabelInput
                        divClassName="mt-2"
                        labelFor="secondarySchoolLocation"
                        labelText="Location"
                        inputId="secondarySchoolLocation"
                        inputPlaceholder="New Delhi"
                        inputClassName="form-control" />
                    <LabelInput
                        divClassName="mt-2"
                        labelFor="secondarySchoolPassYear"
                        labelText="Passing year"
                        inputId="secondarySchoolPassYear"
                        inputPlaceholder="2019"
                        inputClassName="form-control" />
                </div>
            </div>
        </div>
    );
}

export default SecondarySchool;