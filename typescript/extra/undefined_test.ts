
interface IInstruction {
    instruction: string;
    photo?: string | undefined; // URL
}

let test_of_defined: IInstruction[] = [
    {
    instruction: "Define it is",
    photo: "http://blah"
    },
    {
    instruction: "Not present"
    },
    {
    instruction: "Empty String",
    photo: ''
    },
    {
    instruction: "Undefined one",
    photo: undefined
    }
];


function test_for_photo(instruction: IInstruction): void {
    ///
    console.log('-------------------------');
    console.log(`Scenario ${instruction.instruction}`);
    console.log(`Exists: ${instruction.photo}`);
    console.log(`Type of: ${typeof instruction.photo}`);
    console.log(`Equal Undefined: ${instruction.photo == undefined}`);
    console.log(`Is Undefined: ${instruction.photo === undefined}`);
}


for (let item of test_of_defined) {
    test_for_photo(item);
}


/*
-------------------------
Scenario Define it is
Exists: http://blah
Type of: string
Equal Undefined: false
Is Undefined: false
-------------------------
Scenario Not present
Exists: undefined
Type of: undefined
Equal Undefined: true
Is Undefined: true
-------------------------
Scenario Empty String
Exists:
Type of: string
Equal Undefined: false
Is Undefined: false
-------------------------
Scenario Undefined one
Exists: undefined
Type of: undefined
Equal Undefined: true
Is Undefined: true
*/
