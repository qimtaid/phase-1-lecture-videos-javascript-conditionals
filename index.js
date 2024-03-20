function isRose(cat){
    if (cat === 'rose'){
        return 'Hi ROse you are cute!'
    } else if(typeof cat === 'string'){
        return 'Hi ${cat}!'
    }else {
        return 'Sorry, please pass in a cat name'
    }
}



function isRose(cat){
    cat === 'rose'? 'Hi Rose you are cute' : 'Hi ${cat}!'
      
}

function isRose(cat){
    switch(cat){
        case 'rose':
            return 'Hi rose you are cute!'
            case 'ted':
                return 'Hi ted nice to see you!'
        default:
            return 'Hi ${cat}!'
    }
}