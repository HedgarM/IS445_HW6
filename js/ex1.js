//Complete the following functions
//Displays all body nodes
const bodyNodes = () => {
  const bodyChildren = document.body.childNodes;

  bodyChildren.forEach(node =>{
    console.log(node);
  })
}
bodyNodes();