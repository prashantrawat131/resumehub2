import CardHeading from "./CardHeading";
import LabelInput from "./LabelInput";
function College(props) {
    return (
        <div className="major-card">
            <div className="card">
                <div className="card-body">
                    <CardHeading heading="College Details" />

                    <LabelInput
                        divClassName="mt-2"
                        labelFor="collegeName"
                        labelText="School name"
                        inputId="collegeName"
                        inputPlaceholder="College name"
                        inputClassName="form-control"
                    />
                    <LabelInput
                        divClassName="mt-2"
                        labelFor="collegeLocation"
                        labelText="Location"
                        inputId="collegeLocation"
                        inputPlaceholder="New Delhi"
                        inputClassName="form-control" />
                    <LabelInput
                        divClassName="mt-2"
                        labelFor="degreeName"
                        labelText="Degree name"
                        inputId="degreeName"
                        inputPlaceholder="B.Tech"
                        inputClassName="form-control" />
                    <LabelInput
                        divClassName="mt-2"
                        labelFor="graduationStartYear"
                        labelText="Graduation start Year"
                        inputId="graduationStartYear"
                        inputPlaceholder="2019"
                        inputClassName="form-control" />

                    <LabelInput
                        divClassName="mt-2"
                        labelFor="graduationEndYear"
                        labelText="Graduation End Year"
                        inputId="graduationEndYear"
                        inputPlaceholder="2023"
                        inputClassName="form-control" />
                </div>
            </div>
        </div>
    );
}

export default College;