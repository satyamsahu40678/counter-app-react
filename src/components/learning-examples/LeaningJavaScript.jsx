
const person = {
    name: 'John Doe',
    address:{
        line1 : "BAKEER",
        city : 'London',
        country: 'United States',
    },
    profiles:["gtihub", "java", "X", "Cpp"],
    printProfile: () => {
        person.profiles.map(
            // (profile) => {
            //     console.log(profile);
            // }
            profile => console.log(profile),
            )
        console.log(person.profiles[0]);
    }

}

export default function LearningJavaScript(){
    return (
        <>
        <div>
            Learning Java Script {person.name}
        </div>
        <div>
            {person.address.line1}
            {person.address.city}
            {person.address.country}
        </div>
        <div>
            {person.profiles[0]}
            {person.profiles[1]}
        </div>
        <div>
            {person.printProfile()}
        </div>
        </>
    )
}