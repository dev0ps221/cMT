let cmtVersion = "0.1"

console.log(
    `createPopup v ${cmtVersion}\n`,
    'Auteur :   X\n',
    "Rocking..."
)
let cmtIssue = (i,m) => {
    console.log(
    `createPopup v ${cmtVersion}\n`,
    `'issue < ${i} > : "${m}"'` 
    )
    return null
}
window.addEventListener(
    'load',
    e=>{
        (
            ()=>{

                window.createMenuTabs = (parent,tbs) => {
                    let menuTabs = document.createElement('div')
                    menuTabs.className = 'cmt-menutabs'
                    ,options = []
                    ,tabs = []
                    tbs.forEach(
                        ({name,options,listener},i)=>{
                            tabs.push(
                                window.createMenuTab(name,listener,options)
                            )
                            menuTabs.appendChild(tabs[i].elem)
                        }
                    )
                    return {
                        elem : menuTabs
                        ,options
                        ,tabs
                    }

                }
                window.createMenuTab = (name,listener,options=[]) => {
                    let menuTab =  document.createElement('span')
                    menuTab.className = 'cmt-menutab'
                    menuTab.innerText = name
                    options.forEach(
                        ({name,value})=>{
                            menuTab[name] = value
                        }
                    )
                    return {
                        elem: menuTab
                        ,listener
                    }
                }
            }
        )
    }
)