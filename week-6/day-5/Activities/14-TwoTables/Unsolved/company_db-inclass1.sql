DROP DATABASE IF EXISTS company_DB;
CREATE database company_DB;

USE company_DB;

CREATE TABLE departmentsTable
(
    id INTEGER(11)
    AUTO_INCREMENT NOT NULL,
    name VARCHAR
    (45) NULL,
    PRIMARY KEY
    (id)
);

    CREATE TABLE employeeTable
    (
        id INTEGER(11)
        AUTO_INCREMENT NOT NULL,
    name VARCHAR
        (45) NULL,
    PRIMARY KEY
        (id)
);

        CREATE TABLE department_employeeTable
        (
            id INTEGER(11)
            AUTO_INCREMENT NOT NULL,
    employee_id INTEGER NOT NULL,
    department_id INTEGER NOT NULL,
    PRIMARY KEY
            (id)
);

            SELECT *
            FROM departmentsTable;
            SELECT *
            FROM employeeTable;
            SELECT *
            FROM department_employeeTable;

            insert into department_employeeTable
                (employee_id, department_id)
            values
                (1, 3),
                (2, 2),
                (3, 5),
                (4, 3);

            SELECT department_employeeTable.id, employeeTable.name, departmentsTable.name
            FROM department_employeeTable
                JOIN employeeTable
                ON department_employeeTable.employee_id = employeeTable.id
                JOIN departmentsTable
                ON department_employeeTable.department_id = departmentsTable.id;