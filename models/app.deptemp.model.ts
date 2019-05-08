export class Department {
    constructor(
        public DeptId: number,
        public DeptName: string
    ) { }
}

export const Depts: Array<Department> = [
    new Department(101, 'D1'),
    new Department(102, 'D2')
];

export class Employee {
    constructor(
        public EmpId: number,
        public EmpName: string,
        public DeptId: number
    ) {}
}

export const Emps: Array<Employee> = [
    new Employee(1, 'A' , 101),
    new Employee(2, 'B', 102),
    new Employee(3, 'C', 101),
    new Employee(4, 'D', 102)
];
