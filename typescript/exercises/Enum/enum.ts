const enum Flippable {
    Burger,
    Chair,
    Cup,
    Skateboard,
    Table
  }
  
  function flip(f: Flippable) {
    return 'flipped it'
  }
  
  flip(Flippable.Chair)     // 'flipped it'
  flip(Flippable.Cup)       // 'flipped it'
  flip(12)                  // 'flipped it' (!!!)
  // flip('Hat')               // error TS2345: Argument of type '"Hat"' is not assignable to parameter of type 'Flippable'.