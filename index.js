// code your solution here

function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(activity){
    const innerfunction = function(inner){
        if(activity === '*'){
            return `You are ${activity}${inner}${activity}!`;
        }  
        else if(activity === '||'){
            return `You are ${activity}${inner}${activity}!`;
        }
    }

    return innerfunction;
}

