class HashStorageClass {
  constructor() {
    this.pubStorage = {};
  }
  addValue ( key,value ) {
    this.pubStorage[key] = value;
  }
  getValue ( key ) {
    return this.pubStorage[key];
  }
  deleteValue ( key ) {
    if ( key in this.pubStorage ) {
      delete this.pubStorage[key];
      return true;
    }
    return false;
  }
  getKeys () {
    return Object.keys( this.pubStorage );
  }
}

const drinkStorage = new HashStorageClass;

function addInfo() {
  let drinkName = prompt( "Введите название напитка" );
  let drinkAlc = prompt( "Алкогольный" );
  let drinkRecipe = prompt( "Рецепт" );
  drinkStorage.addValue ( drinkName, { "Алкогольный": drinkAlc, "Рецепт": drinkRecipe } );
  alert( "Информация о напитке добавлена!" );
}
function getInfo() {
  let drinkName = prompt( "Введите название напитка" );
  let drinkInfo = drinkStorage.getValue( drinkName );
  if (drinkInfo) {
    for (let k in drinkInfo) {
      alert( "Напиток: " + drinkName + "\n"
                + k + ": " + drinkInfo[k] );
    }
  }
  else alert( 'Нет информации о напитке' );
}
function deleteInfo() {
  let drinkName = prompt( "Введите название напитка" );
  let result = drinkStorage.deleteValue( drinkName );
  if (result) 
    alert( "Информация удалена!" );
  else alert( "Напиток не найден!" );
}
function getList() {
  alert( drinkStorage.getKeys() );
}
