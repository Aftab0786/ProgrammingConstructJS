// UC 1  Using If Else Condition Checking Employee Is Present Or Absent.
{
    const IS_ABSENT = 0
    let empcheck = Math.floor(Math.random() * 10) % 2;
    if(empcheck == IS_ABSENT){
        console.log("Employee is ABSENT");
    }
    else{
        console.log("Employee is PRESENT");
    }
}

// UC2 Using Switch Case Calculate Daily Wage For a Employee

{
    const IS_ABSENT = 0
    const IS_PRESENT = 1;
    const PRESENT_HOUR = 8;
    const Wage_PER_HOUR = 20;
    let empHrs = 0;

     let empcheck = Math.floor(Math.random() * 10) % 2;
     if(empcheck == IS_ABSENT){
         console.log("Employee is ABSENT");
     }
     else{
        empHrs = PRESENT_HOUR;
         console.log("Employee is PRESENT");    
     }
     
     let empWage = empHrs * Wage_PER_HOUR;
     console.log("Emp Wage: " + empWage);
    
}

//UC3 Add Part Time Employee and Wage
{
    const IS_ABSENT = 0
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const Full_TIME_HOUR = 8; 
    const PART_Time_Hour = 4;
    const EMP_RATE_PER_HOUR = 20;
    let empHrs = 0;
    
    let empCheck = Math.floor(Math.random() * 10) % 3;
    if (empCheck == IS_ABSENT)
    {
        console.log("Employee is Absent");
        empHrs = 0;
    }
    else if (empCheck == IS_FULL_TIME) 
    {
        console.log("Employee is Present For Full Time");
        empHrs = Full_TIME_HOUR;
    }
    else
    {
        console.log("Employee is Present For Part Time");
        empHrs = PART_Time_Hour;
    }
   let empWage = empHrs * EMP_RATE_PER_HOUR;
    console.log("Employee Wage is : " + empWage);
}
 
//UC4 Solving Using Switch Case Statement

{
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_Time_Hour = 4;
    const Full_TIME_HOUR = 8;
    const Wage_PER_HOUR = 20;
    let empHr = 0
    let empcheck = Math.floor(Math.random() * 10) % 3;
    switch(empcheck){
        case IS_PART_TIME:
            empHr = PART_Time_Hour;
            break;
            case IS_FULL_TIME:
                empHr = Full_TIME_HOUR;
                break;
                default:
                    empHr = 0;
                    break;
    }
    let empWage = empHr * Wage_PER_HOUR;
    console.log("Total employee wage: " + empWage);

}

//Write function for daily working hours

function getWorkingHours(empCheck)
{
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const Full_TIME_HOUR = 8;
    const PART_TIME_HOUR = 4;
    
    switch (empCheck)
    {
        case IS_PART_TIME:
            return PART_TIME_HOUR;
        case IS_FULL_TIME:
            return Full_TIME_HOUR;
        default:
            return 0;
    }
}


//UC5 Calculating Wages For A months
{
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const WAGE_PER_HOUR = 20;
    const NUM_OF_WORKING_DAYS = 20;
    let empHrs = 0;
    let empWage = 0;
    for(let day = 0; day < NUM_OF_WORKING_DAYS; day++)
    {
        let empCheck = Math.floor(Math.random() * 10) % 3;
        empHrs += getWorkingHours(empCheck);
    }
    empWage = empHrs * WAGE_PER_HOUR;
    console.log("Total Hrs: " + empHrs + "\tEmp Wage: " +empWage);
}  

//UC6 Calculating Wages till Number of Working Days or Total Working Hours Per Month is Reached
{
    const NUM_OF_WORKING_DAYS = 20;
    const MAX_HRS_IN_MONTH = 100;
    let totalWorkingDays = 0;
    const  WAGE_PER_HOUR = 20;
    let empHrs = 0;
    let empWage = 0;
    let totalEmpHrs = 0;
    while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS)
    {
        totalWorkingDays ++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        totalEmpHrs += getWorkingHours(empCheck);
    }
    empWage = totalEmpHrs * WAGE_PER_HOUR;
    console.log("Total Days: " + totalWorkingDays + "\tTotal Hrs: " + totalEmpHrs + "\tEmp Wage: " + empWage);
}
                
