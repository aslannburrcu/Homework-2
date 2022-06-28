import DATA from "../../data.json";

let groupNames = DATA.reduce((result, item) => {
    result[item.group] = []
    return result;
  }, {});

  Object.keys(groupNames).forEach(group => {
    let findStudents = DATA.filter(student => student.group == group);
    groupNames[group] = findStudents;
  });

const Group = () => {

const title = "BoothCamp Ödev 2 ";
const subtitle = "Group Names";
console.log("groupNames",groupNames);
return (
    <div>

    {Object.keys(groupNames).map(el => {
        return groupNames[el].map(name => (
            <li>{el}---{name.name}</li>
            ))
        })}
        </div>
    )
}

export default Group;