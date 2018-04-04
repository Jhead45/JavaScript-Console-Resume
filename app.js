var name = 'Justin Head';
var nameU = name.toUpperCase();
var careerField = 'Career: Student, Javascript Developer';
var Desc = "About me: I am currently studying to be a Full Stack Engineer.";
var interests = ['My Interests:', '* Hockey', '* Going to the movies','* Learning to code'];
var coolSkill = 'BAM:'

var experience = [
    {companyName: 'AGS LLC:', title: 'Roof Specialist:', description: 'Inspected and sold Roofs'},
    {companyName: 'Bethel University:', title: 'College Recruiter:', description: 'Recruited to the Criminal Justice Programs'},
    {companyName: 'Mt Juliet Police Department:', title: 'Police Officer:', description: 'Protected and Served'}
    
];

var skill = [
    {cool: false, skillName: '* HTML'},
    {cool: true, skillName: 'CSS/bootstrap'},
    {cool: false, skillName: '* typing'},
    {cool: true, skillName: 'Shooting Guns'},
    {cool: true, skillName: 'Emergency Vehicle Operation'},
    {cool: false, skillName: '* Sales'},
    {cool: true, skillName: 'Bow Hunting'},
    {cool: true, skillName: 'Martial Arts'},
    {cool: false, skillName: '* First Aid'}
];

function displaySkill(cool, skillName) {
    if (cool == true) {
        console.log(`* BAM: ${skillName}`);
    } else { 
        console.log(skillName);

    }
};

function displayPosition(companyName, title, description) {
    console.log(companyName, title, description);
};



console.log(nameU);
console.log(careerField);
console.log(Desc);
console.log(' ');
console.log(interests[0]);
console.log(interests[1]);
console.log(interests[2]);
console.log(interests[3]);
console.log('My Previous Experience:');

for (i = 0; i < experience.length; i++) {
    displayPosition(experience[i].companyName, experience[i].title, experience[i].description);
};
console.log(' ');
console.log('My Skills:');

for (i = 0; i < skill.length; i++) {
    displaySkill(skill[i].cool, skill[i].skillName);
};


