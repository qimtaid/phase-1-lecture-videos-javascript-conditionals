function isRose(cat){
    if (cat === 'rose'){
        return 'Hi ROse you are cute!'
    } else if(typeof cat === 'string'){
        return 'Hi ${cat}!'
    }else {
        return 'Sorry, please pass in a cat name'
    }
}