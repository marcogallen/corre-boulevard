//Far OBject for modularity
function Far(texture, with, height){
    TilingSprite.call(this,texture, width, height);
}

Far.prototype = Object.create(TilingSprite.prototype);