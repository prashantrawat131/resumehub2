import '../App.css';
function Skill(props) {
    return (
        <div className="skill">
            <div className="row">

                <input className="skillName col-9 form-control-sm"
                    type="text"
                    placeholder="Skill name"
                />

                <button 
                className="col-3 skill-delete-button btn-close" 
                onClick={props.deleteSkill}
                name={props.id}
                aria-label="Close"
                ></button>
            </div>


            <div className="row skill-options-div">

                <div className="col-3">
                    <input type="radio" name={"skillRadioButton"+props.id} className="skillRadioButton"/>
                    <label className="skillLabel">Beginner</label>
                </div>

                <div className="col-3">
                    <input type="radio" name={"skillRadioButton"+props.id} className="skillRadioButton"/>
                    <label className="skillLabel">Intermediate</label>
                </div>

                <div className="col-3">
                    <input type="radio" name={"skillRadioButton"+props.id} className="skillRadioButton"/>
                    <label className="skillLabel">Advance</label>
                </div>

            </div>
        </div>

    );
}

export default Skill;