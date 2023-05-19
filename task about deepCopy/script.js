function deepCopy(value) {
    if (typeof value === 'object' && value !== null) {
      if (Array.isArray(value)) {
        return value.map(deepCopy);
      } else {
        const result = {};
        for (const [key, val] of Object.entries(value)) {
          result[key] = deepCopy(val);
        }
        return result;
      }
    } else {
      return value;
    }
  }
  
  // Тесты
  const h1 = { a: 5, b: { b1: 6, b2: 7 }, c: [33, 22], d: null, e: undefined, f: Number.NaN };
  const h2 = deepCopy(h1);
  
  console.log((h1 === h2)?"не пройден":"пройден"); // false
  console.log((h1.a === h2.a)?"пройден":"не пройден"); // true
  console.log((h1.b === h2.b)?"не пройден":"пройден"); // false
  console.log((h1.b.b1 === h2.b.b1)?"пройден":"не пройден"); // true
  console.log((h1.c === h2.c)?"не пройден":"пройден"); // false
  console.log((h1.c[0] === h2.c[0])?"пройден":"не пройден"); // true
  console.log((h1.d === h2.d)?"пройден":"не пройден"); // true
  console.log((h1.e === h2.e)?"пройден":"не пройден"); // true
  console.log((isNaN(h2.f))?"пройден":"не пройден"); // true
  console.log((h2.c instanceof Array)?"пройден":"не пройден"); // true

  const a1=[ 5, {b1:6,b2:7}, [33,22], null, undefined, Number.NaN];
  const a2=deepCopy(a1);
  
  console.log((a1===a2)?"не пройден":"пройден"); // false
  console.log((typeof(a2)===typeof(a1))?"пройден":"не пройден"); // true
  console.log((a1[0]===a2[0])?"пройден":"не пройден"); // true
  console.log((a1[1]===a2[1])?"не пройден":"пройден"); // false
  console.log((a1[1].b1===a2[1].b1)?"пройден":"не пройден"); // true
  console.log((a1[2]===a2[2])?"не пройден":"пройден"); // false
  console.log((a1[2][0]===a2[2][0])?"пройден":"не пройден"); // true
  console.log((a1[3]===a2[3])?"пройден":"не пройден"); // true
  console.log((a1[4]===a2[4])?"пройден":"не пройден"); // true
  console.log((isNaN(a2[5]))?"пройден":"не пройден"); // true
  console.log((a2[2] instanceof Array)?"пройден":"не пройден"); // true

  const v1="sss";
  const v2=deepCopy(v1);
  
  console.log((typeof(v2)===typeof(v1))?"пройден":"не пройден"); // true
  console.log((v1===v2)?"пройден":"не пройден"); // true

  const z1=null;
  const z2=deepCopy(z1);
 
  console.log((typeof(z2)===typeof(z1))?"пройден":"не пройден"); // true
  console.log((z1===z2)?"пройден":"не пройден"); // true

  const n1=Number.NaN;
  const n2=deepCopy(n1);
  
  console.log((typeof(n2)===typeof(n1))?"пройден":"не пройден"); // true
  console.log((isNaN(n2))?"пройден":"не пройден"); // true





  