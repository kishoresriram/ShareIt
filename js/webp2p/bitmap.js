function Bitmap(length)
{
  this.prototype = new BoolArray(length)

  // Return an array with the index of the setted or unsetted bits
  this.indexes = function(setted)
  {
    var array = []

    for(var i=0; i<this.length; i++)
      for(var j=0; j<=7; j++)
        if(this.get(i) == setted)
            array.push(i*8 + j)

    return array
  }

  // Get the index of a random setted or unsetted bit on the bitmap.
  // If none is available, return undefined
  function getRandom(setted)
  {
    var array = this.indexes(setted)

    if(array.length)
      return array[Math.floor(Math.random() * array.length)]
  }
}