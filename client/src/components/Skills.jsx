import { useState } from "react";
import CardHeading from "./CardHeading";
import Skill from "./Skill";

let uniqueId = 3;

function Skills(props) {

    const [skillList, setSkillList] = useState([{ id: 0 }, { id: 1 }, { id: 2 }]);

    function addSkill() {
        uniqueId = uniqueId + 1;
        var newList = [];
        skillList.forEach((value) => {
            newList.push(value);
        });

        newList.push({ id: uniqueId });
        setSkillList(newList);
        // console.log("before:"+skillList.length);
        // setSkillList(prev => [...prev, uniqueId]);
        // console.log("after:"+skillList.length);
    }

    function deleteSkill(event) {
        const id = event.target.name;
        console.log("Taget ID : " + id);
        const newSkillList = skillList.filter((value) => value.id + "" !== id);
        setSkillList(newSkillList);
    }

    return (
        <div className="major-card" hidden={props.hidden}>
            <div className="card">
                <div className="card-body">
                    <CardHeading heading="Skills" />

                    {skillList.map(function (value) {
                        return (
                            <Skill
                                id={value.id}
                                deleteSkill={deleteSkill}
                                key={value.id}
                            />
                        );
                    })}

                    <button onClick={addSkill} className="add-skill-button">+ add skill</button>
                </div>
            </div>
        </div>
    );
}

export default Skills;