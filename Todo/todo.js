let input = prompt('What do u want to do?');
let array = ["jdgeiu"];
while(input!=='quit'){
    input = prompt('What do u want to do?');
    if(input==='new'){
        const l = prompt('Enter the task');
        array.push(l);
        console.log(`${l} added to the list`);
    }
    else if(input==='list'){
        console.log("**********");
        for(let i=0;i<array.length;i++){
            console.log(`${i}: ${array[i]}`);
        }
        console.log("**********");
    }
    else if(input==='delete'){
        let l = parseInt(prompt('Enter the index of task'));
        if(!Number.isNaN(l)){
            const del = array.splice(l,1);
            console.log(`ok deleted ${del}`);
        }else{
            console.log("invalid index");
        }
        
    }
    else{
        console.log("Enter valid command");
    }
}
console.log("you quit");
