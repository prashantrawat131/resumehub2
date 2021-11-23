import CardHeading from "./CardHeading";
import LabelInput from "./LabelInput";
function Work(props) {
    return (
        <div className="major-card">
            <div className="card">
                <div className="card-body">
                    <CardHeading heading="Work Experience" />

                    <LabelInput
                        divClassName="mt-2"
                        labelFor="jobTitle"
                        labelText="Job Title"
                        inputId="jobTitle"
                        inputPlaceholder="Assistant Manager"
                        inputClassName="form-control"
                    />
                    <LabelInput
                        divClassName="mt-2"
                        labelFor="jobLocation"
                        labelText="Location"
                        inputId="jobLocation"
                        inputPlaceholder="Banglore"
                        inputClassName="form-control" />
                    <LabelInput
                        divClassName="mt-2"
                        labelFor="companyName"
                        labelText="Company name"
                        inputId="companyName"
                        inputPlaceholder="Amazon"
                        inputClassName="form-control" />
                    <LabelInput
                        divClassName="mt-2"
                        labelFor="jobStartDate"
                        labelText="Job start date"
                        inputId="jobStartDate"
                        inputPlaceholder="2 August 2020"
                        inputClassName="form-control" />
                    <LabelInput
                        divClassName="mt-2"
                        labelFor="jobEndDate"
                        labelText="Job end date"
                        inputId="jobEndDate"
                        inputPlaceholder="20 October 2021"
                        inputClassName="form-control" />
                </div>
            </div>
        </div>
    );
}

export default Work;