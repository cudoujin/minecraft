//(async () => {})();

// MoreToolsData = await fetch('./more_tools.json').then(response => response.json())
/* --- tools --- */
const ToolTypes = MoreToolsData["tool_type_sorted"]
const tools = MoreToolsData["tools"]
let tool_extended = tools.filter(names => !names[0].includes("{tool}"));
for (const names of tools) {
    if (names[0].includes("{tool}")) {
        const en_name = ToolTypes['en'].map(t => names[0].replace("{tool}", t))
        const zh_name = ToolTypes['zh'].map(t => names[1].replace("{tool}", t))
        const temp = en_name.map((element, index) => [element, zh_name[index]])
        console.log(temp)
        tool_extended = [...tool_extended, ...temp]
    }
}

tool_extended.sort((a, b) => {
    const r = a[1].localeCompare(b[1])
    if (r === 0) return a[0].localeCompare(b[0])
    return r
})

const ToolsTableBody = document.getElementById("more-tools-tools")
for (const names of tool_extended) {
    // alternative: use DOMParser
    let tr = ToolsTableBody.appendChild(document.createElement("tr"))
    let td_name = tr.appendChild(document.createElement("td"))
    td_name.appendChild(document.createTextNode(names[0]))
    let td_tool = tr.appendChild(document.createElement("td"))
    td_tool.appendChild(document.createTextNode(names[1]))
}

/* --- armours --- */
const ArmourTypes = MoreToolsData["armour_type_sorted"]
const armours = MoreToolsData["armours"]
let armour_extended = armours.filter(names => !names[0].includes("{armour}"));
for (const names of armours) {
    if (names[0].includes("{armour}")) {
        const en_name = ToolTypes['en'].map(t => names[0].replace("{armour}", t))
        const zh_name = ToolTypes['zh'].map(t => names[1].replace("{armour}", t))
        const temp = en_name.map((element, index) => [element, zh_name[index]])
        console.log(temp)
        armour_extended = [...armour_extended, ...temp]
    }
}

const ArmoursTableBody = document.getElementById("more-tools-armours")
for (const names of armour_extended) {
    // alternative: use DOMParser
    let tr = ArmoursTableBody.appendChild(document.createElement("tr"))
    let td_name = tr.appendChild(document.createElement("td"))
    td_name.appendChild(document.createTextNode(names[0]))
    let td_tool = tr.appendChild(document.createElement("td"))
    td_tool.appendChild(document.createTextNode(names[1]))
}
