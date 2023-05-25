/* Triage the wounded soldiers. 
Wounded soldiers need healing, but we need to help the most wounded first.

*/
let doctor = hero.findByType("paladin")[0];
let mage = hero.findByType("pixie")[0];
let helper = hero.findByType("peasant")[0];
let soldiers = hero.findByType("soldier");

// Initialize patient arrays.
let doctorPatients = [];
let magePatients = [];
let helperPatients = [];

// Iterate all the soldiers:
for (let i = 0; i < soldiers.length; i++) {
    let soldier = soldiers[i];
    // If soldier is slowed:
    if (soldier.maxSpeed < 6) {
        // Add them to the 'mage's array of patients.
        magePatients.push(soldier);
    }
    // Else if soldier.health is less than half of maxHealth:
    else if (soldier.health < soldier.maxHealth / 2)
        // Add them to the 'doctor's array of patients.
        doctorPatients.push(soldier);
    // Else:
    else
        // Add soldier to the 'helper's array of patients.
        helperPatients.push(soldier);
}
// Now assign the patient lists to the appropriate person.
mage.patients = magePatients;
doctor.patients = doctorPatients;
helper.patients = helperPatients;
