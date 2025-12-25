select * from
((select distinct salary as "SecondHighestSalary"
from Employee
order by salary desc)
union all
select null
union all
