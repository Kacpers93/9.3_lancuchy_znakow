var text =  'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';

var dinosaur = 'triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();

var textCharsAfter = text.replace('Velociraptor', dinosaurUpperCased);

var sli = textCharsAfter.length / 2;
console.log(sli);

var partOfMotto = textCharsAfter.slice(0, sli);
console.log(partOfMotto);
