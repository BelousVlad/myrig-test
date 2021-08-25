function heightConver(height) {
    const match = height.match(/(\d+)\'(\d+)\"/);
    let ft_ = Number(match[1]);
    let in_ = Number(match[2]);
    in_ += ft_ * 12;
    return in_ * 2.54;
}
const now = new Date()

function getAge(time) {
    return (now.getYear() - new Date(time).getYear())
}

export function convert(employee) {
    return {
        ...employee,
        weight: employee.weight / 2.2046, //Из фунтов в киллограммы
        height: heightConver(employee.height),
        age: getAge(employee.date_of_birth*1000)
    }
}