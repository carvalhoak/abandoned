

export function deleteTask(list, index){

    for (let i = 0; i <= 100; i++){
        if(i === index){
            list.splice(index,1);
        }
    }
}

