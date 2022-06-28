import DATA from "../../data.json";

let assistants = DATA.filter(person => person.assistant);
let nonAssistanst = DATA.filter(person => !person.assistant)

const Assistant = () => {
    return (
        <div>
            <div>Assistant --- {assistants.map(element => <li>{element.name}</li>)}</div>
            <div>Non Assistant --- {nonAssistanst.map(element => <li>{element.name}</li>)}</div>
        </div>
        )
}

export default Assistant;