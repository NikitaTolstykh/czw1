const fullName = "Mykyta Tolstykh" 
const student_id = "44094"  


const getStudentFullName = (id) => {
    switch (id) {
        case 0:
            return fullName;
        case 1:
            return "Kacper Nowak";
        case 2:
            return "Maja Kowalska";
        default:
            return "Michal Wisniewski";
    }
};
const getStudentId = (id) => {
    switch (id) {
        case 0:
            return student_id;
        case 1:
            return "111222";
        case 2:
            return "222333";
        default:
            return "333444";
    }
};

module.exports = {
    getStudentFullName,
    getStudentId,
};